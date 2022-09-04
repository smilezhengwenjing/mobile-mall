package com.mobilemall.mobilemall.controller;

import com.mobilemall.mobilemall.common.MallException;
import com.mobilemall.mobilemall.common.ServiceResultEnum;
import com.mobilemall.mobilemall.controller.param.SaveOrderParam;
import com.mobilemall.mobilemall.controller.vo.ShoppingCartItemVO;
import com.mobilemall.mobilemall.entity.User;
import com.mobilemall.mobilemall.entity.UserAddress;
import com.mobilemall.mobilemall.service.OrderService;
import com.mobilemall.mobilemall.service.ShoppingCartService;
import com.mobilemall.mobilemall.service.UserAddressService;
import com.mobilemall.mobilemall.utils.Result;
import com.mobilemall.mobilemall.utils.ResultGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    UserAddressService userAddressService;
    @Autowired
    OrderService orderService;

    @Autowired
    ShoppingCartService shoppingCartService;

    @PostMapping("/saveOrder")
    public Result saveOrder(@RequestBody SaveOrderParam saveOrderParam) {
        //参数判断
        if(saveOrderParam == null || saveOrderParam.getCartItemIds()==null ||saveOrderParam.getAddressId()==null || saveOrderParam.getUserId()==null){
            return ResultGenerator.genFailResult(ServiceResultEnum.PARAM_ERROR.getResult());
        }
        if(saveOrderParam.getCartItemIds().length<1){
            MallException.fail(ServiceResultEnum.PARAM_ERROR.getResult());
        }
        int priceTotal = 0;
        List<ShoppingCartItemVO> itemsForSave = shoppingCartService.getCartItemsForSettle(Arrays.asList(saveOrderParam.getCartItemIds()), saveOrderParam.getUserId());
        if (CollectionUtils.isEmpty(itemsForSave)) {
            //无数据
            MallException.fail("参数异常");
        } else {
            for(ShoppingCartItemVO shoppingCartItemVO:itemsForSave){
                priceTotal += shoppingCartItemVO.getGoodsCount() * shoppingCartItemVO.getSellingPrice();
            }
            if (priceTotal < 1) {
                MallException.fail("价格异常");
            }
            //获取用户地址
            UserAddress userAddress = userAddressService.getUserAddressById(saveOrderParam.getAddressId());
            //保存订单并返回订单号
            String saveOrderResult = orderService.saveOrder(saveOrderParam.getUserId(),userAddress, itemsForSave);
            Result result = ResultGenerator.genSuccessResult(saveOrderResult);
            return result;
        }
      return ResultGenerator.genFailResult("生成订单失败");
    }
}
