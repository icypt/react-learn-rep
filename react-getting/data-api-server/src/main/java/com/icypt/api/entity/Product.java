package com.icypt.api.entity;

import javax.naming.Name;
import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "product")
public class Product implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    //产品编号
    @Column(name = "prodNo")
    private String prodNo;
    //可选属性optional=false,表示author不能为空。删除文章，不影响用户
    @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    //设置在product_item表中的关联字段(外键)
    @JoinColumn(name="prod_item_id")
    private ProductItem productItem;

    @Column(name = "prod_name")
    private String prodName;

    @Column(name = "prod_price")
    private BigDecimal prodPrice;

    @Column(name = "prod_count")
    private Integer prodCount;

    @Column(name = "prod_img")
    private String prodImg;

    @Column(name = "prod_desc")
    private String prodDesc;

    @Column(name = "prod_create_time")
    private Date prodCreateTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProdNo() {
        return prodNo;
    }

    public void setProdNo(String prodNo) {
        this.prodNo = prodNo;
    }

    public ProductItem getProductItem() {
        return productItem;
    }

    public void setProductItem(ProductItem productItem) {
        this.productItem = productItem;
    }

    public String getProdName() {
        return prodName;
    }

    public void setProdName(String prodName) {
        this.prodName = prodName;
    }

    public BigDecimal getProdPrice() {
        return prodPrice;
    }

    public void setProdPrice(BigDecimal prodPrice) {
        this.prodPrice = prodPrice;
    }

    public Integer getProdCount() {
        return prodCount;
    }

    public void setProdCount(Integer prodCount) {
        this.prodCount = prodCount;
    }

    public String getProdImg() {
        return prodImg;
    }

    public void setProdImg(String prodImg) {
        this.prodImg = prodImg;
    }

    public String getProdDesc() {
        return prodDesc;
    }

    public void setProdDesc(String prodDesc) {
        this.prodDesc = prodDesc;
    }

    public Date getProdCreateTime() {
        return prodCreateTime;
    }

    public void setProdCreateTime(Date prodCreateTime) {
        this.prodCreateTime = prodCreateTime;
    }
}
