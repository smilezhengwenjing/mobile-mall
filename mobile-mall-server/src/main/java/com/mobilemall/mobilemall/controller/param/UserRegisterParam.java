package com.mobilemall.mobilemall.controller.param;

import lombok.Data;

import java.io.Serializable;
import javax.validation.constraints.NotEmpty;

@Data
public class UserRegisterParam implements Serializable {
    @NotEmpty(message = "登录名不能为空")
    private String loginName;

    @NotEmpty(message = "密码不能为空")
    private String password;

}
