package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.controller.vo.IndexCarouselVO;
import com.mobilemall.mobilemall.entity.Carousel;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarouselMapper {
    List<Carousel> getCarousels();
}
