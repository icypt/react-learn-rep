import React from 'react';
import { Route,Link } from "react-router-dom";
class NewsInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            msg: '我是新闻列表组件'
        }
    }



    render(){
        return (
            <div>
                <div className="content">
                    <div className="left">
                        <ul className="menu">
                            <li>
                                <Link to="/newsInfo">新闻列表</Link>
                            </li>
                            <li>
                                <Link to="/newsInfo/newsAdd/">新闻新增</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        {
                            this.props.routes.map(function (route, key) {
                                if(route.exact) {
                                    return <Route key={key} exact  path={route.path} component={route.component} />;
                                } else {
                                    return <Route key={key} path={route.path} component={route.component} />;
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsInfo;