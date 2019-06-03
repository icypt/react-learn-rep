#创建数据库
create database db_order charset utf8;
####################################建表语句######################################################
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

####################################初始化数据######################################################
#初始化商品类目表数据
delete from product_item;
insert into product_item(prod_item_no, prod_item_name) values('001', '家常小炒');
insert into product_item(prod_item_no, prod_item_name) values('002', '精美糖粥');
insert into product_item(prod_item_no, prod_item_name) values('003', '特色小面');
#初始化商品表数据
delete from product;
insert into product(prod_no, prod_item_id, prod_name, prod_price, prod_count, prod_img, prod_desc, prod_create_time) 
values('01', 1, '小炒肉', 32, 50, 'xiaochaorou.png', '小炒肉是湖南省一道常见的特色传统名菜，属于湘菜系。麻辣鲜香，口味滑嫩。制作原料主要是五花肉和青椒、红椒等。', current_timestamp);
insert into product(prod_no, prod_item_id, prod_name, prod_price, prod_count, prod_img, prod_desc, prod_create_time) 
values('02', 1, '干煸豆角', 24, 50, 'ganbiandoujiao.jpg', '干煸豆角是用豇豆制作作为主要食材，以酱油、香油、味精、醋作为调料制作而成的一道家常菜。口味咸香辣，色泽嫩绿，口感脆嫩，营养丰富。', current_timestamp);
insert into product(prod_no, prod_item_id, prod_name, prod_price, prod_count, prod_img, prod_desc, prod_create_time) 
values('03', 1, '香菇青菜', 16, 50, 'xiangguqingcai.jpg', '香菇青菜是一道菜品，制作原料有青菜、香菇、油、盐等。香菇盛出后，用筷子整齐地摆放在青菜上，最后将锅内的汁淋在菜上即可。', current_timestamp);

insert into product(prod_no, prod_item_id, prod_name, prod_price, prod_count, prod_img, prod_desc, prod_create_time) 
values('03', 2, '南瓜粥', 5, 50, 'nanguazhou.png', '南瓜粥，中医认为，南瓜性味甘、温，归脾、胃经，有补中益气、清热解毒之功，适用于脾虚气弱、营养不良、肺痈、水火烫伤。', current_timestamp);
insert into product(prod_no, prod_item_id, prod_name, prod_price, prod_count, prod_img, prod_desc, prod_create_time) 
values('03', 2, '八宝粥', 4, 50, 'babaozhou.jpg', '八宝又名腊八粥，佛粥，中国传统节日食品。是一种在腊八节用由多种食材熬制的粥。', current_timestamp);
insert into product(prod_no, prod_item_id, prod_name, prod_price, prod_count, prod_img, prod_desc, prod_create_time) 
values('03', 2, '黑米粥', 7, 50, 'heimizhou.jpg', '黑米粥是黑米、黑豆、花生等为原料熬成的粥，具有补气养血，保产育胎的作用。对孕妇来说，常食此粥，有利于孕妇及胎儿的健康，尤其对胎儿的大脑发育有着特殊作用。', current_timestamp);
insert into product(prod_no, prod_item_id, prod_name, prod_price, prod_count, prod_img, prod_desc, prod_create_time) 
values('03', 2, '皮蛋瘦肉粥', 10, 50, 'pidanshourouzhou.jpg', '皮蛋瘦肉粥是一种广东省的地方传统著名小吃。皮蛋瘦肉粥营养丰富，以切成小块的皮蛋及咸瘦肉为配料。不同地区的配料有所不同，有人会在进食前加上香油及葱花，或者加葱花及薄脆。', current_timestamp);

insert into product(prod_no, prod_item_id, prod_name, prod_price, prod_count, prod_img, prod_desc, prod_create_time) 
values('03', 3, '臊子面', 12, 50, 'saozimian.jpg', '臊（sào）子面是中国陕西省特色传统面食、著名西府小吃，以宝鸡的岐山臊子面最为正宗。在陕西关中平原及甘肃陇东等地方流行。', current_timestamp);
insert into product(prod_no, prod_item_id, prod_name, prod_price, prod_count, prod_img, prod_desc, prod_create_time) 
values('03', 3, '刀削面', 15, 50, 'daoxiaomian.jpg', '刀削面（外文名：Daoxiao Noodles [1]  ），是山西的特色传统面食，为“中国十大面条”之一，流行于山西及其周边。', current_timestamp);