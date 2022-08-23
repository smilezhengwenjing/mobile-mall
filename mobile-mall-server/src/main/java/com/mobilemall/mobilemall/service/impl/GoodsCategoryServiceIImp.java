package com.mobilemall.mobilemall.service.impl;

import com.mobilemall.mobilemall.entity.GoodsCategory;
import com.mobilemall.mobilemall.mapper.GoodsCategoryMapper;
import com.mobilemall.mobilemall.service.GoodsCategoryService;
import com.mobilemall.mobilemall.utils.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GoodsCategoryServiceIImp implements GoodsCategoryService {
    @Autowired
    private GoodsCategoryMapper goodsCategoryMapper;

    @Override
    public List<Map> query(){
        List<Map> resultList = new ArrayList<>();

        //一级分类
        List<GoodsCategory> list1 = goodsCategoryMapper.selectAll(1);
        for (GoodsCategory oneCateGory : list1) {
            resultList.add(EntityUtils.entityToMap(oneCateGory));
        }

        //二级分类
        List<GoodsCategory> list2 = goodsCategoryMapper.selectAll(2);

        //处理一级分类的子类
        for(int i=0;i<resultList.size();i++){
            List childrenList = new ArrayList();
            for(int j=0;j<list2.size();j++){
                if(list1.get(i).getCategoryId() == list2.get(j).getParentId()){
                    childrenList.add(list2.get(j));
                }
            }
            resultList.get(i).put("children",childrenList);
        }
        return resultList;
    }

}
