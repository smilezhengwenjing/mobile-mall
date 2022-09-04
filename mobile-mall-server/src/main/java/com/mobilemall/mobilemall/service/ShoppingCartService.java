package com.mobilemall.mobilemall.service;

import com.mobilemall.mobilemall.controller.param.SaveCartItemParam;
import com.mobilemall.mobilemall.controller.vo.ShoppingCartItemVO;

import java.util.List;

public interface ShoppingCartService {
    /**
     * 保存商品至购物车中
     *
     * @param saveCartItemParam
     * @return
     */
    String saveNewBeeMallCartItem(SaveCartItemParam saveCartItemParam);

    /**
     * 根据userId和cartItemIds获取对应的购物项记录
     *
     * @param cartItemIds
     * @param userId
     * @return
     */
    List<ShoppingCartItemVO> getCartItemsForSettle(List<Long> cartItemIds, Long userId);
}
