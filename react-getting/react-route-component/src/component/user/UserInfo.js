import React from 'react';
import { Route,Link } from "react-router-dom";
class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            msg: '我是用户信息组件'
        }
    }



    render(){
        return (
            <div>
                <div className="content">
                    <div className="left">
                        <ul className="menu">
                            <li>
                                <Link to="/userInfo">用户列表</Link>
                            </li>
                            <li>
                                <Link to="/userInfo/userAdd/">用户新增</Link>
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
export default UserInfo;