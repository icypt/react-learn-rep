import React from 'react';
import url from 'url'; //cnpm install url --save
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import '../assets/css/pcontent.css';
class ProductContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            staticurl: 'http://192.168.31.219:8081/dataApi/upload/'
        }
    }

    //页面加载完成获取动态路由传入商品id
    componentDidMount () {
        console.log(this.props.match.params.pid);
        var pid = this.props.match.params.pid;
        this.getProductData(pid);
    }

    //获取商品详情
    getProductData =(pid)=> {
        var reqUrl = '/dataApi/react/getProduct/' + pid;
        axios.get(reqUrl)
            .then( (response) => {
                console.log(response);
                this.setState({
                    product: response.data.data
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
                <div className="back" >
                    <Link to="/" style={{"color": "#ffffff","text-decoration":" none"}}>返回</Link>
                </div>
                <div className="p_content">
                    <div className="p_info">
                        <img src={`${this.state.staticurl}${this.state.product.prodImg}`}/>
                        <h2>{this.state.product.prodName}</h2>
                        <p className="price">{this.state.product.prodPrice}元/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>
                            商品详情
                        </h3>
                        <div className="p_content">
                            <img src={`${this.state.staticurl}${this.state.product.prodImg}`}/>
                            <br/>
                            <p style={{"margin-bottom": "100px"}} dangerouslySetInnerHTML={{__html: this.state.product.prodDesc}}>

                            </p>
                        </div>
                    </div>
                </div>
                <footer className="pfooter">
                    <div className="cart">
                        <strong>数量:</strong>
                        <div className="cart_num">
                            <div className="input_left">-</div>
                            <div className="input_center">
                                <input type="text" readOnly="readonly" value="1" name="num" id="num"/>
                            </div>
                            <div className="input_right">+</div>
                        </div>
                    </div>
                    <button className="addcart">加入购物车</button>
                </footer>
            </div>
        )
    }
}

export default ProductContent;

