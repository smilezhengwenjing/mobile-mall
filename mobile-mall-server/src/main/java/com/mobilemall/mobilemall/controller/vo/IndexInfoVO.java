package com.mobilemall.mobilemall.controller.vo;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class IndexInfoVO implements Serializable {
    //轮播图列表
    private List<IndexCarouselVO> carousels;
    //热销商品列表
    private List<IndexConfigGoodsVO> hotGoodses;
    //新品列表
    private List<IndexConfigGoodsVO> newGoodses;
    //特色推荐列表
    private List<IndexConfigGoodsVO> recommendGoodses;
}
