package com.mobilemall.mobilemall.controller;

import com.mobilemall.mobilemall.common.ServiceResultEnum;
import com.mobilemall.mobilemall.controller.param.UserRegisterParam;
import com.mobilemall.mobilemall.entity.GoodsCategory;
import com.mobilemall.mobilemall.service.GoodsCategoryService;
import com.mobilemall.mobilemall.service.UserService;
import com.mobilemall.mobilemall.utils.NumberUtil;
import com.mobilemall.mobilemall.utils.Result;
import com.mobilemall.mobilemall.utils.ResultGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/goods")
public class GoodsCategoryController {
    @Autowired
    private GoodsCategoryService goodsCategoryService;

    @GetMapping("/category")
    public Result quertCategory() {
        List<Map> queryResult = goodsCategoryService.query();
        System.out.println(queryResult);
        System.out.println("-------------------------------------"+ServiceResultEnum.SUCCESS.getResult());
        //查询成功
        if (queryResult!=null) {
            return ResultGenerator.genSuccessResult(queryResult);
        }
        //查询失败
        return ResultGenerator.genFailResult("查询失败");
    }
}
