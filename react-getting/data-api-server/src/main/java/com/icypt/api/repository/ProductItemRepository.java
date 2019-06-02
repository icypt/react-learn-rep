package com.icypt.api.repository;

import com.icypt.api.entity.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 商品类目持久层接口
 */
public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {
}
