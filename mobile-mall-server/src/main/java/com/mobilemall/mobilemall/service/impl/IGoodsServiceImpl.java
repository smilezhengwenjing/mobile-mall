package com.mobilemall.mobilemall.service.impl;

import com.mobilemall.mobilemall.controller.vo.IndexCarouselVO;
import com.mobilemall.mobilemall.controller.vo.IndexConfigGoodsVO;
import com.mobilemall.mobilemall.entity.Carousel;
import com.mobilemall.mobilemall.entity.Goods;
import com.mobilemall.mobilemall.entity.GoodsInfo;
import com.mobilemall.mobilemall.mapper.GoodsInfoMapper;
import com.mobilemall.mobilemall.mapper.GoodsMapper;
import com.mobilemall.mobilemall.service.GoodsService;
import com.mobilemall.mobilemall.utils.BeanUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class IGoodsServiceImpl implements GoodsService {
    @Autowired
    GoodsInfoMapper goodsInfoMapper;

    @Override
    public List<IndexConfigGoodsVO> getGoodses(int type){
        List<IndexConfigGoodsVO> IndexConfigGoodsVOS = new ArrayList<>();
        List<GoodsInfo> goods = goodsInfoMapper.getGoodsInfo(type);
        if (!CollectionUtils.isEmpty(goods)) {
            IndexConfigGoodsVOS = BeanUtil.copyList(goods, IndexConfigGoodsVO.class);
        }
        return IndexConfigGoodsVOS;
    };
    @Override
    public List<IndexConfigGoodsVO> getSearchLists(String keyWords){
        List<IndexConfigGoodsVO> IndexConfigGoodsVOS = new ArrayList<>();
        List<GoodsInfo> goods = goodsInfoMapper.getSearchLists(keyWords);
        if (!CollectionUtils.isEmpty(goods)) {
            IndexConfigGoodsVOS = BeanUtil.copyList(goods, IndexConfigGoodsVO.class);
        }
        return IndexConfigGoodsVOS;
    };
}
