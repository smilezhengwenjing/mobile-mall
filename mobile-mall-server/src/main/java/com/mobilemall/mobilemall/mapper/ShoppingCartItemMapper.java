package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.ShoppingCartItem;
import com.mobilemall.mobilemall.entity.User;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartItemMapper {
    int insertSelective(ShoppingCartItem record);

    ShoppingCartItem selectByUserIdAndGoodsId(@Param("userId") Long userId, @Param("goodsId") Long goodsId);

    int selectCountByUserId(Long userId);

    List<ShoppingCartItem> selectByUserIdAndCartItemIds(@Param("userId") Long userId, @Param("cartItemIds") List<Long> cartItemIds);
}
