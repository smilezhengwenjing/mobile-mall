package com.mobilemall.mobilemall.service;

public interface UserService {
    /**
     * 用户注册
     *
     * @param loginName
     * @param password
     * @return
     */
    String register(String loginName, String password);
}
