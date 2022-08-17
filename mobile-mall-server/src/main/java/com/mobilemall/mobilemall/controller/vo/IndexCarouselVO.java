package com.mobilemall.mobilemall.controller.vo;

import lombok.Data;

import java.io.Serializable;
@Data
public class IndexCarouselVO implements Serializable {
    //轮播图图片地址
    private String carouselUrl;
    //轮播图点击后的跳转路径
    private String redirectUrl;
}
