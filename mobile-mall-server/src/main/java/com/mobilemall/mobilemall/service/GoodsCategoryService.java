package com.mobilemall.mobilemall.service;

import com.mobilemall.mobilemall.entity.GoodsCategory;

import java.util.List;
import java.util.Map;

public interface GoodsCategoryService {
    /**
     * 查询商品分类
     */
    List<Map> query();
}
