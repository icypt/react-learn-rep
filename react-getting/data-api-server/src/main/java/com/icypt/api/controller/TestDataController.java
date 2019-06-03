package com.icypt.api.controller;

import com.icypt.api.common.controller.BaseController;
import com.icypt.api.service.ProductItemService;
import com.icypt.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/react")
public class TestDataController extends BaseController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductItemService productItemService;

    /**
     * 获取任务列表
     * @return
     */
    @RequestMapping(value = "/getTaskList",produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getTaskList() {
        return success(getData());
    }

    /**
     * 获取任务
     * @return
     */
    @RequestMapping(value = "/getTask/{index}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getTask(@PathVariable("index") Integer index) {
        return success(getData().get(index));
    }

    /**
     * 制造数据
     * @return
     */
    public List<Map<String, Object>> getData() {
        List<Map<String, Object>> result = new LinkedList<>();
        for(int i = 0 ;i<10; i++) {
            Map<String, Object> task = new HashMap<>();
            task.put("title", "任务标题" + i);
            task.put("content", "任务内容" + i +"：不论在生活中还是网络里，人人都会有朋友。如果没有朋友情，生活就不会有悦耳的和音，就如死水一滩");
            result.add(task);
        }
        return result;
    }

    /**
     * 根据id获取商品信息
     * @param pid
     * @return
     */
    @RequestMapping(value = "/getProduct/{pid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getProduct(@PathVariable("pid") Long pid) {
        return success(productService.getProductById(pid));
    }

    /**
     * 获取商品类目列表
     * @return
     */
    @RequestMapping(value = "/getProductItemList", produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getProductItemList() {
        return success(productItemService.getAllProjectItemsList());
    }
}
