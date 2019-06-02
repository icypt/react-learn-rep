package com.icypt.api.service.impl;

import com.icypt.api.entity.Product;
import com.icypt.api.repository.ProductRepository;
import com.icypt.api.service.ProductService;
import org.aspectj.lang.annotation.AfterThrowing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product getProductById(Long id) {
        return productRepository.findOne(id);
    }
}
