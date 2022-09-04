package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.UserAddress;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAddressMapper {
    UserAddress selectByPrimaryKey(Long addressId);
}
