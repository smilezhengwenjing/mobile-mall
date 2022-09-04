package com.mobilemall.mobilemall.controller;

import com.mobilemall.mobilemall.common.ServiceResultEnum;
import com.mobilemall.mobilemall.controller.param.SaveCartItemParam;
import com.mobilemall.mobilemall.service.ShoppingCartService;
import com.mobilemall.mobilemall.utils.Result;
import com.mobilemall.mobilemall.utils.ResultGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cart")
public class ShoppingCartController {
    @Autowired
    ShoppingCartService shoppingCartService;
    @PostMapping("/add")
    public Result addCart(@RequestBody SaveCartItemParam saveCartItemParam) {
        String saveResult = shoppingCartService.saveNewBeeMallCartItem(saveCartItemParam);
        //添加成功
        if (ServiceResultEnum.SUCCESS.getResult().equals(saveResult)) {
            return ResultGenerator.genSuccessResult();
        }
        //添加失败
        return ResultGenerator.genFailResult(saveResult);
    }
}
