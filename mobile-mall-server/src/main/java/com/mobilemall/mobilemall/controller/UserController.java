package com.mobilemall.mobilemall.controller;

import com.mobilemall.mobilemall.common.ServiceResultEnum;
import com.mobilemall.mobilemall.controller.param.UserRegisterParam;
import com.mobilemall.mobilemall.entity.User;
import com.mobilemall.mobilemall.mapper.UserMapper;
import com.mobilemall.mobilemall.service.UserService;
import com.mobilemall.mobilemall.utils.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Result register(@RequestBody @Valid UserRegisterParam userRegisterParam) {
        if (!NumberUtil.isPhone(userRegisterParam.getLoginName())){
            return ResultGenerator.genFailResult(ServiceResultEnum.LOGIN_NAME_IS_NOT_PHONE.getResult());
        }
        String registerResult = userService.register(userRegisterParam.getLoginName(), userRegisterParam.getPassword());

        //注册成功
        if (ServiceResultEnum.SUCCESS.getResult().equals(registerResult)) {
            return ResultGenerator.genSuccessResult();
        }
        //注册失败
        return ResultGenerator.genFailResult(registerResult);
    }

    /**
     * 登录
     *
     * @param user
     * @return
     */
    @Resource
    UserMapper userMapper;
    @PostMapping("/login")
    public Response loginUser(@RequestBody @Valid UserRegisterParam userRegisterParam) {
        String uname = userRegisterParam.getLoginName();
        String pwd =  MD5Util.MD5Encode(userRegisterParam.getPassword(), "UTF-8");
        System.out.println("uname=" + uname + "pwd" + pwd);
        if (uname.equals("") || pwd.equals("")) {
            return new Response(100, "用户名或密码不能为空", "");
        } else {
//            String passwordMD5 = MD5Util.MD5Encode(pwd, "UTF-8");
            System.out.println(userMapper.login(uname, pwd));
            if (userMapper.login(uname, pwd) != null) {
                return new Response(200, "操作成功", "");
            } else {
                return new Response(500, "用户不存在/密码错误", "");
            }
        }
    }
}
