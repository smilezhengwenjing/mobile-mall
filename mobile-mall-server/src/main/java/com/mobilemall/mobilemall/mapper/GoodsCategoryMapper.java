package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.GoodsCategory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodsCategoryMapper {
    List<GoodsCategory> selectAll();
    List<GoodsCategory> selectAll(int categoryLevel);
}
