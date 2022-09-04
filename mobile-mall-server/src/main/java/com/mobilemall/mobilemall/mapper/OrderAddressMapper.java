package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.OrderAddress;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderAddressMapper {
    int insertSelective(OrderAddress orderAddress);
}
