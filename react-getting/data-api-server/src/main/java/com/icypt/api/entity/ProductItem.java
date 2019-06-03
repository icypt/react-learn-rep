package com.icypt.api.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.naming.Name;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "product_item")
public class ProductItem  implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "prod_item_no")
    private String prodItemNo;

    @Column(name = "prod_item_name")
    private String prodItemName;

    @JsonManagedReference
    @OneToMany(mappedBy = "productItem")
    Set<Product> productSet;

  public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProdItemNo() {
        return prodItemNo;
    }

    public void setProdItemNo(String prodItemNo) {
        this.prodItemNo = prodItemNo;
    }

    public String getProdItemName() {
        return prodItemName;
    }

    public void setProdItemName(String prodItemName) {
        this.prodItemName = prodItemName;
    }

    public Set<Product> getProductSet() {
        return productSet;
    }

    public void setProductSet(Set<Product> productSet) {
        this.productSet = productSet;
    }
}
