package com.mobilemall.mobilemall.controller;

import com.mobilemall.mobilemall.common.Constants;
import com.mobilemall.mobilemall.controller.param.GoodsParam;
import com.mobilemall.mobilemall.controller.param.UserRegisterParam;
import com.mobilemall.mobilemall.controller.vo.IndexCarouselVO;
import com.mobilemall.mobilemall.controller.vo.IndexConfigGoodsVO;
import com.mobilemall.mobilemall.controller.vo.IndexInfoVO;
import com.mobilemall.mobilemall.service.CarouselService;
import com.mobilemall.mobilemall.service.GoodsService;
import com.mobilemall.mobilemall.utils.Result;
import com.mobilemall.mobilemall.utils.ResultGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/home")
public class indexController {

    @Autowired
    CarouselService carouselService;

    @Autowired
    GoodsService goodsService;
    /*
     *轮播图、新品、推荐等
     */
    @GetMapping("/index-infos")
    public Result<IndexInfoVO> indexInfo() {
        IndexInfoVO indexInfoVO = new IndexInfoVO();
        //获取轮播图
        List<IndexCarouselVO> carouselList = carouselService.getCarousels();
        indexInfoVO.setCarousels(carouselList);
        //获取热销商品列表
        List<IndexConfigGoodsVO> hotGoodses = goodsService.getGoodses(3);
        indexInfoVO.setHotGoodses(hotGoodses);
        //获取新上架商品列表
        List<IndexConfigGoodsVO> newGoodses = goodsService.getGoodses(4);
        indexInfoVO.setNewGoodses(newGoodses);
        //获取推荐商品列表
        List<IndexConfigGoodsVO> recommendGoodses = goodsService.getGoodses(5);
        indexInfoVO.setRecommendGoodses(recommendGoodses);
        return ResultGenerator.genSuccessResult(indexInfoVO);
    }

    /*
     *模糊搜索
     */
    @PostMapping("/search-infos")
    public Result<IndexConfigGoodsVO> searchInfo(@RequestBody GoodsParam goodsParam) {
        List<IndexConfigGoodsVO> seachList = new ArrayList<>();
        System.out.println("-----------------"+goodsParam.getKeyWords());
        seachList = goodsService.getSearchLists(goodsParam.getKeyWords());
        Map<String,Object> resultMap = new HashMap<String,Object>();
        resultMap.put("searchList",seachList);
        return ResultGenerator.genSuccessResult(resultMap);
    }
}
