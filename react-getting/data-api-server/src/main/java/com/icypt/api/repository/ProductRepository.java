package com.icypt.api.repository;

import com.icypt.api.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 商品持久层接口
 */
public interface ProductRepository extends JpaRepository<Product, Long> {
}
