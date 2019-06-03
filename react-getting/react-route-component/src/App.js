import React from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import './assets/css/main.css';
import routes from './model/route';


/**
 * 路由配置：https://reacttraining.com/react-router/web/example/route-config
 */
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
                    {
                        routes.map(function (route, key) {
                            if(route.exact) {
                                return <Route key={key} exact path={route.path}
                                              render={props => (
                                                  // 传入嵌套路由
                                                  <route.component {...props} routes={route.routes} />
                                              )}
                                />;
                            } else {
                                return <Route key={key} path={route.path}
                                              render={props => (
                                                  // 传入嵌套路由
                                                  <route.component {...props} routes={route.routes} />
                                              )}
                                />;
                            }
                        })
                    }
                </div>
            </Router>
        );
    }
}
export default App;
