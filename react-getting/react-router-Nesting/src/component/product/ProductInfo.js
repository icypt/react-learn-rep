import React from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import ProductAdd from "./ProductAdd";
import ProductList from "./ProductList";
class ProductInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            msg: '我是商品信息'
        }
    }



    render(){
        return (
            <div>
                <div className="content">
                    <div className="left">
                        <ul className="menu">
                            <li>
                                <Link to="/productInfo">商品列表</Link>
                            </li>
                            <li>
                                <Link to="/productInfo/productAdd/">商品新增</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <Route exact  path={`${this.props.match.url}/`} component={ProductList} />
                        <Route path={`${this.props.match.url}/productAdd/`} component={ProductAdd} />
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductInfo;