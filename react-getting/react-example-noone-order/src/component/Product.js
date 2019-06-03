import React from 'react';
import common from '../model/Common'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../assets/css/basic.css';
import '../assets/css/index.css';
import rexiao from '../assets/image/rexiao.png';
import caidan from '../assets/image/caidan.png';
import sousuo from '../assets/image/sousuo.png';
import axios from 'axios';
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
            ],
            staturl: 'http://192.168.31.219:8081/dataApi/upload/'
        }
    }

    //初始化数据
    componentDidMount() {
        axios.get('/dataApi/react/getProductItemList')
            .then( (response) => {
                console.log(response);
                this.setState({
                    list: response.data.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }


    render() {
        return (
            <div>
                <header className="index_header">
                    <div className="hlist">
                        <img src={rexiao}/>
                        <p>热销榜</p>
                    </div>
                    <div className="hlist">
                        <img src={caidan}/>
                        <p>点过的菜</p>
                    </div>
                    <div className="hlist">
                        <img src={sousuo}/>
                        <p>搜你喜欢</p>
                    </div>
                </header>
                <div className="content">
                    {
                        this.state.list.map( (value, key) => {
                            return (
                                <div className="item" key={key}>
                                    <h3 className="item_cate">{value.prodItemName}</h3>
                                    <ul className="item_list">
                                        {
                                            value.productSet.map( (product, productKey) =>{
                                                return (
                                                    <li key={productKey}>
                                                        <Link to={`/productContent/${product.id}`}>
                                                            <div className="inner">
                                                                <img src={`${this.state.staturl}${product.prodImg}`}/>
                                                                <p className="title">{product.prodName}</p>
                                                                <p className="price">{product.prodPrice}元</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            );
                        })
                    }

                </div>

                <div className="bg" id="bg">


                </div>
            </div>
        )
    }
}

export default Product;

