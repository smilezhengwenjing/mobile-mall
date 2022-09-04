package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.OrderItem;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderItemMapper {
    int insertBatch(List<OrderItem> orderItems);
}
