package com.mobilemall.mobilemall.controller.vo;

import lombok.Data;

import java.io.Serializable;
@Data
public class ShoppingCartItemVO implements Serializable {

    //购物项id
    private Long cartItemId;

    //商品id
    private Long goodsId;

    //商品数量
    private Integer goodsCount;

    //商品名称
    private String goodsName;

    //商品图片
    private String goodsCoverImg;

    //商品价格
    private Integer sellingPrice;
}
