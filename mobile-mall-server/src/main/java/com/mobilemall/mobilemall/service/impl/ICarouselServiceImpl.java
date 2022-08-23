package com.mobilemall.mobilemall.service.impl;

import com.mobilemall.mobilemall.controller.vo.IndexCarouselVO;
import com.mobilemall.mobilemall.entity.Carousel;
import com.mobilemall.mobilemall.mapper.CarouselMapper;
import com.mobilemall.mobilemall.service.CarouselService;
import com.mobilemall.mobilemall.utils.BeanUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class ICarouselServiceImpl implements CarouselService {
    @Autowired
    CarouselMapper carouselMapper;
    @Override
    public List<IndexCarouselVO> getCarousels(){
        List<IndexCarouselVO> indexCarouselVOS = new ArrayList<>();
        List<Carousel> carousels = carouselMapper.getCarousels();
        if (!CollectionUtils.isEmpty(carousels)) {
            indexCarouselVOS = BeanUtil.copyList(carousels, IndexCarouselVO.class);
        }
        return indexCarouselVOS;
    }
}
