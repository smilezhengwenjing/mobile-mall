package com.mobilemall.mobilemall.service;

import com.mobilemall.mobilemall.controller.param.SaveOrderParam;
import com.mobilemall.mobilemall.controller.vo.ShoppingCartItemVO;
import com.mobilemall.mobilemall.entity.UserAddress;

import java.util.List;

public interface OrderService {
    String saveOrder(Long userId, UserAddress userAddress, List<ShoppingCartItemVO> itemsForSave);
}
