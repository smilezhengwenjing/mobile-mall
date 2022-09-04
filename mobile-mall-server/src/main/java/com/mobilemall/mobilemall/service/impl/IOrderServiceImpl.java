package com.mobilemall.mobilemall.service.impl;

import com.mobilemall.mobilemall.common.ServiceResultEnum;
import com.mobilemall.mobilemall.controller.param.SaveOrderParam;
import com.mobilemall.mobilemall.controller.vo.ShoppingCartItemVO;
import com.mobilemall.mobilemall.entity.Order;
import com.mobilemall.mobilemall.entity.OrderAddress;
import com.mobilemall.mobilemall.entity.OrderItem;
import com.mobilemall.mobilemall.entity.UserAddress;
import com.mobilemall.mobilemall.mapper.OrderAddressMapper;
import com.mobilemall.mobilemall.mapper.OrderItemMapper;
import com.mobilemall.mobilemall.mapper.OrderMapper;
import com.mobilemall.mobilemall.service.OrderService;
import com.mobilemall.mobilemall.utils.BeanUtil;
import com.mobilemall.mobilemall.utils.NumberUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class IOrderServiceImpl implements OrderService {

    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    OrderItemMapper orderItemMapper;
    @Autowired
    OrderAddressMapper orderAddressMapper;
    @Override
    public String saveOrder(Long userId, UserAddress userAddress, List<ShoppingCartItemVO> itemsForSave) {
        //生成订单号
        String orderNo = NumberUtil.genOrderNo();
        //保存订单
        Order order = new Order();
        order.setOrderNo(orderNo);
        order.setUserId(userId);
        //总价
        int priceTotal=0;
        for(ShoppingCartItemVO shoppingCartItemVO:itemsForSave){
            priceTotal += shoppingCartItemVO.getGoodsCount() * shoppingCartItemVO.getSellingPrice();
        }
        order.setTotalPrice(priceTotal);
        String extraInfo = "";
        order.setExtraInfo(extraInfo);
        System.out.println("---------------"+order);
        //生成订单项并保存订单项记录
       if(orderMapper.insertSelective(order)>0){
           System.out.println("--------"+order);
           //生成收货地址快照，并保存到数据库
           OrderAddress orderAddress = new OrderAddress();
           BeanUtil.copyProperties(userAddress,orderAddress);
           orderAddress.setOrderId(order.getOrderId());
           //生成所有的订单项快照，并保存至数据库
           List<OrderItem> orderItems = new ArrayList<>();
           for (ShoppingCartItemVO shoppingCartItemVO : itemsForSave) {
               OrderItem orderItem = new OrderItem();
               //使用BeanUtil工具类将newBeeMallShoppingCartItemVO中的属性复制到newBeeMallOrderItem对象中
               BeanUtil.copyProperties(shoppingCartItemVO, orderItem);
               //NewBeeMallOrderMapper文件insert()方法中使用了useGeneratedKeys因此orderId可以获取到
               orderItem.setOrderId(order.getOrderId());
               orderItems.add(orderItem);
           }
           //保存至数据库
           System.out.println("---------------"+orderItems);
           System.out.println("---------------"+orderAddress);
           if (orderItemMapper.insertBatch(orderItems) > 0 && orderAddressMapper.insertSelective(orderAddress) > 0) {
               //所有操作成功后，将订单号返回，以供Controller方法跳转到订单详情
               return orderNo;
           }
       }
        return ServiceResultEnum.SHOPPING_ITEM_ERROR.getResult();
    }
}
