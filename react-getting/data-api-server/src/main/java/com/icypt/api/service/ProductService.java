package com.icypt.api.service;

import com.icypt.api.entity.Product;

/**
 * 商品服务层接口
 */
public interface ProductService {
    /**
     * 根据ID获取商品
     * @param id
     * @return
     */
    public Product getProductById(Long id);

}
