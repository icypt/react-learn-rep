#创建商品类目表
drop table if exists product_item;
create table  product_item(
	id bigint not null primary key auto_increment comment '主键',
	prod_item_no varchar(16) not null comment '类目编号',
	prod_item_name varchar(32) not null comment '类目名称'
);

#创建商品表
drop table if exists product;
create table product(
	id bigint not null primary key auto_increment comment '商品主键',
	prod_no varchar(16) not null comment '商品编号',
	prod_item_id bigint not null comment '上平类目',
	prod_name varchar(32) not null comment '商品名称',
	prod_price decimal(16,2) not null comment '商品价格',
	prod_count int not null comment '商品数量',
	prod_img varchar(128) not null comment '商品图片',
	prod_desc text not null comment '商品描述',
	prod_create_time datetime not null comment '商品创建时间' 
);