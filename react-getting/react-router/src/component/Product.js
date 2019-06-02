import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    pid:111,
                    title: '商品111'
                },
                {
                    pid:222,
                    title: '商品222'
                },
                {
                    pid:333,
                    title: '商品333'
                },
                {
                    pid:444,
                    title: '商品444'
                }
            ]
        }
    }


    render() {
        return (
            <div>
                <h2>商品列表</h2>
                <br/>
                <ul>
                    {
                        this.state.list.map(function (value,key) {
                            return <li key={key}><Link to={`/productContent?pid=${value.pid}`}>{value.title}</Link></li>;
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Product;

