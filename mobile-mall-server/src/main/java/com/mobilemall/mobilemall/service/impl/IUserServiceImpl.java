package com.mobilemall.mobilemall.service.impl;


import com.mobilemall.mobilemall.common.Constants;
import com.mobilemall.mobilemall.common.ServiceResultEnum;
import com.mobilemall.mobilemall.entity.User;
import com.mobilemall.mobilemall.mapper.UserMapper;
import com.mobilemall.mobilemall.service.UserService;
import com.mobilemall.mobilemall.utils.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class IUserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public String register(String loginName, String password) {
        System.out.println("----------"+userMapper.selectByLoginName(loginName));
        if (userMapper.selectByLoginName(loginName) != null) {
            return ServiceResultEnum.SAME_LOGIN_NAME_EXIST.getResult();
        }
        User registerUser = new User();
        registerUser.setLoginName(loginName);
        registerUser.setNickName(loginName);
        registerUser.setIntroduceSign(Constants.USER_INTRO);
        String passwordMD5 = MD5Util.MD5Encode(password, "UTF-8");
        registerUser.setPasswordMd5(passwordMD5);
        if (userMapper.insertSelective(registerUser) > 0) {
            return ServiceResultEnum.SUCCESS.getResult();
        }
        return ServiceResultEnum.DB_ERROR.getResult();
    }
}
