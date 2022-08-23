package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.Goods;
import com.mobilemall.mobilemall.entity.GoodsInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodsInfoMapper {
    List<GoodsInfo> getGoodsInfo(int type);
    List<GoodsInfo> getSearchLists(String keyWords);
}
