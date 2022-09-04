package com.mobilemall.mobilemall.service.impl;

import com.mobilemall.mobilemall.common.Constants;
import com.mobilemall.mobilemall.common.MallException;
import com.mobilemall.mobilemall.common.ServiceResultEnum;
import com.mobilemall.mobilemall.controller.param.SaveCartItemParam;
import com.mobilemall.mobilemall.controller.vo.ShoppingCartItemVO;
import com.mobilemall.mobilemall.entity.Goods;
import com.mobilemall.mobilemall.entity.GoodsInfo;
import com.mobilemall.mobilemall.entity.ShoppingCartItem;
import com.mobilemall.mobilemall.mapper.GoodsInfoMapper;
import com.mobilemall.mobilemall.mapper.GoodsMapper;
import com.mobilemall.mobilemall.mapper.ShoppingCartItemMapper;
import com.mobilemall.mobilemall.service.ShoppingCartService;
import com.mobilemall.mobilemall.utils.BeanUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class IShoppingCartServiceImpl implements ShoppingCartService {
    @Autowired
    ShoppingCartItemMapper shoppingCartItemMapper;

    @Autowired
    GoodsInfoMapper goodsInfoMapper;

    @Override
    public String saveNewBeeMallCartItem(SaveCartItemParam saveCartItemParam){
        ShoppingCartItem temp = shoppingCartItemMapper.selectByUserIdAndGoodsId(saveCartItemParam.getUserId(), saveCartItemParam.getGoodsId());
        if (temp != null) {
            //已存在则修改该记录
            MallException.fail(ServiceResultEnum.SHOPPING_CART_ITEM_EXIST_ERROR.getResult());
        }
        GoodsInfo goodsInfo =goodsInfoMapper .selectByPrimaryKey(saveCartItemParam.getGoodsId());
        //商品为空
        if (goodsInfo == null) {
            return ServiceResultEnum.GOODS_NOT_EXIST.getResult();
        }
        int totalItem = shoppingCartItemMapper.selectCountByUserId(saveCartItemParam.getUserId());
        //超出单个商品的最大数量
        if (saveCartItemParam.getGoodsCount() < 1) {
            return ServiceResultEnum.SHOPPING_CART_ITEM_NUMBER_ERROR.getResult();
        }
        //超出单个商品的最大数量
        if (saveCartItemParam.getGoodsCount() > Constants.SHOPPING_CART_ITEM_LIMIT_NUMBER) {
            return ServiceResultEnum.SHOPPING_CART_ITEM_LIMIT_NUMBER_ERROR.getResult();
        }
        //超出最大数量
        if (totalItem > Constants.SHOPPING_CART_ITEM_TOTAL_NUMBER) {
            return ServiceResultEnum.SHOPPING_CART_ITEM_TOTAL_NUMBER_ERROR.getResult();
        }
        ShoppingCartItem shoppingCartItem = new ShoppingCartItem();
        BeanUtil.copyProperties(saveCartItemParam, shoppingCartItem);
        System.out.println(shoppingCartItem);
        //保存记录
        if (shoppingCartItemMapper.insertSelective(shoppingCartItem) > 0) {
            return ServiceResultEnum.SUCCESS.getResult();
        }
        return ServiceResultEnum.DB_ERROR.getResult();
    }

    public List<ShoppingCartItemVO> getCartItemsForSettle(List<Long> cartItemIds, Long userId){
        List<ShoppingCartItemVO> shoppingCartItemVOS = new ArrayList<>();
       if(CollectionUtils.isEmpty(cartItemIds)){
          MallException.fail("购物项不能为空");
       }
       List<ShoppingCartItem> shoppingCartItems = shoppingCartItemMapper.selectByUserIdAndCartItemIds(userId, cartItemIds);
       if (CollectionUtils.isEmpty(shoppingCartItems)) {
           MallException.fail("购物项不能为空");
       }
       if (shoppingCartItems.size() != cartItemIds.size()) {
           MallException.fail("参数异常");
       }
       return getShoppingCartItemVOS(shoppingCartItemVOS, shoppingCartItems);
    }

    /**
     * 数据转换
     *
     * @param shoppingCartItemVOS
     * @param shoppingCartItems
     * @return
     */
    private List<ShoppingCartItemVO> getShoppingCartItemVOS(List<ShoppingCartItemVO> shoppingCartItemVOS, List<ShoppingCartItem> shoppingCartItems) {
        if (!CollectionUtils.isEmpty(shoppingCartItems)) {
            //查询商品信息并做数据转换
            List<Long> goodsIds = shoppingCartItems.stream().map(ShoppingCartItem::getGoodsId).collect(Collectors.toList());
            List<GoodsInfo> goods = goodsInfoMapper.selectByPrimaryKeys(goodsIds);
            Map<Long, GoodsInfo> goodsMap = new HashMap<>();
            if (CollectionUtils.isEmpty(goodsMap)) {
                goodsMap = goods.stream().collect(Collectors.toMap(GoodsInfo::getGoodsId, Function.identity(), (entity1, entity2) -> entity1));
            }
            for (ShoppingCartItem shoppingCartItem : shoppingCartItems) {
                ShoppingCartItemVO shoppingCartItemVO = new ShoppingCartItemVO();
                BeanUtil.copyProperties(shoppingCartItem, shoppingCartItemVO);
                if (goodsMap.containsKey(shoppingCartItem.getGoodsId())) {
                    GoodsInfo goodsTemp = goodsMap.get(shoppingCartItem.getGoodsId());
                    shoppingCartItemVO.setGoodsCoverImg(goodsTemp.getGoodsCoverImg());
                    String goodsName = goodsTemp.getGoodsName();
                    // 字符串过长导致文字超出的问题
                    if (goodsName.length() > 28) {
                        goodsName = goodsName.substring(0, 28) + "...";
                    }
                    shoppingCartItemVO.setGoodsName(goodsName);
                    shoppingCartItemVO.setSellingPrice(goodsTemp.getSellingPrice());
                    shoppingCartItemVOS.add(shoppingCartItemVO);
                }
            }
        }
        return shoppingCartItemVOS;
    }
}
