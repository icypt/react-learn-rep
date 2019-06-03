package com.icypt.api.service.impl;

import com.icypt.api.entity.ProductItem;
import com.icypt.api.repository.ProductItemRepository;
import com.icypt.api.service.ProductItemService;
import org.aspectj.lang.annotation.AfterThrowing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductItemServiceImpl implements ProductItemService {

    @Autowired
    private ProductItemRepository productItemRepository;

    @Override
    public List<ProductItem> getAllProjectItemsList() {
        return productItemRepository.findAll();
    }
}
