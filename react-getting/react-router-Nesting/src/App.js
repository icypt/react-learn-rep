import React from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Home from "./component/Home";
import './assets/css/main.css';
import NewsInfo from "./component/news/NewsInfo";
import ProductInfo from "./component/product/ProductInfo";
import UserInfo from "./component/user/UserInfo";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="header">
                        <Link to="/">首页</Link>
                        <Link to="/newsInfo/">实时新闻</Link>
                        <Link to="/productInfo/">秒杀商品</Link>
                        <Link to="/userInfo/">个人中心</Link>
                    </header>
                    <Route exact path="/" component={Home} />
                    <Route  path="/newsInfo/" component={NewsInfo} />
                    <Route  path="/productInfo/" component={ProductInfo} />
                    <Route path="/userInfo/" component={UserInfo}/>
                </div>
            </Router>
        );
    }
}
export default App;
