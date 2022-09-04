package com.mobilemall.mobilemall.controller.param;

import lombok.Data;

@Data
public class SaveCartItemParam {
    //商品数量
    private Integer goodsCount;
    //商品id
    private Long goodsId;
    //用户id
    private Long userId;
}
