package com.icypt.api.entity;

import javax.naming.Name;
import javax.persistence.*;
import java.io.Serializable;

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
}
