package com.mobilemall.mobilemall.service;

import com.mobilemall.mobilemall.entity.UserAddress;

public interface UserAddressService {
    /**
     * 获取收货地址详情
     *
     * @param addressId
     * @return
     */
    UserAddress getUserAddressById(Long addressId);
}
