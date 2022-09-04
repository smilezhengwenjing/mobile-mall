package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.Goods;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodsMapper {
     List<Goods> getGoodses(int type);

}
