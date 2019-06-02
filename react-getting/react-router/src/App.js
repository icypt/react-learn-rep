import React from 'react';
import Home from "./component/Home";
import News from "./component/New";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Product from "./component/Product";
import './assets/css/index.css';
import Content from "./component/Content";
import ProductContent from "./component/ProductContent";

/*
  react路由的配置：
    1、找到官方文档 https://reacttraining.com/react-router/web/example/basic
    2、安装  cnpm install react-router-dom --save
    3、找到项目的根组件引入react-router-dom
       import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    4、复制官网文档根组件里面的内容进行修改  （加载的组件要提前引入）
         <Router>
                <Link to="/">首页</Link>
                <Link to="/news">新闻</Link>
                <Link to="/product">商品</Link>
               <Route exact path="/" component={Home} />
               <Route path="/news" component={News} />
               <Route path="/product" component={Product} />
         </Router>
         exact表示严格匹配
    5、获取动态路由的传值：this.props.match.params.nid
*/
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <header className="header">
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                    <Link to="/product">Product</Link>
                </header>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/news" component={News} />
                    <Route path="/product" component={Product} />
                    <Route path="/productContent" component={ProductContent} />
                    <Route path="/content/:nid" component={Content} />
                </div>
            </Router>
        );
    }
}
export default App;
