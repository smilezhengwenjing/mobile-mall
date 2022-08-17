package com.mobilemall.mobilemall.service;

import com.mobilemall.mobilemall.controller.vo.IndexConfigGoodsVO;

import java.util.List;

public interface GoodsService {
    List<IndexConfigGoodsVO> getGoodses(int type);
    List<IndexConfigGoodsVO> getSearchLists(String keyWords);
}
