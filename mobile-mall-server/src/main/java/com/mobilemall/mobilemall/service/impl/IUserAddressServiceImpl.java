package com.mobilemall.mobilemall.service.impl;

import com.mobilemall.mobilemall.common.ServiceResultEnum;
import com.mobilemall.mobilemall.entity.UserAddress;
import com.mobilemall.mobilemall.mapper.UserAddressMapper;
import com.mobilemall.mobilemall.service.UserAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IUserAddressServiceImpl implements UserAddressService {
    @Autowired
    private UserAddressMapper userAddressMapper;
    @Override
    public UserAddress getUserAddressById(Long addressId){
        UserAddress userAddress = userAddressMapper.selectByPrimaryKey(addressId);
        return userAddress;
    }
}
