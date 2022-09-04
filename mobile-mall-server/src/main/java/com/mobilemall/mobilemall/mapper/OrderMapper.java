package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.Order;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderMapper {
    int insertSelective(Order order);
}
