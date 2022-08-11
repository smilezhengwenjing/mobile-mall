package com.mobilemall.mobilemall.controller;

import com.mobilemall.mobilemall.common.ServiceResultEnum;
import com.mobilemall.mobilemall.controller.param.UserRegisterParam;
import com.mobilemall.mobilemall.entity.User;
import com.mobilemall.mobilemall.service.UserService;
import com.mobilemall.mobilemall.utils.Result;
import com.mobilemall.mobilemall.utils.NumberUtil;
import com.mobilemall.mobilemall.utils.ResultGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

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
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("loginName",userRegisterParam.getLoginName());
            return ResultGenerator.genSuccessResult(map);
        }
        //注册失败
        return ResultGenerator.genFailResult(registerResult);
    }
}
