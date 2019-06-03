package com.icypt.api.service;

import com.icypt.api.entity.ProductItem;

import java.util.List;

/**
 * 商品类目接口
 */
public interface ProductItemService {

    /**
     * 获得所有的商品类目
     * @return
     */
    public List<ProductItem> getAllProjectItemsList();
}
