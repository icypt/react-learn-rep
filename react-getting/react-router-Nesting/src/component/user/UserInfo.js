import React from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
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
                        <Route exact  path={`${this.props.match.url}/`} component={UserList} />
                        <Route path={`${this.props.match.url}/userAdd/`} component={UserAdd} />
                    </div>
                </div>
            </div>
        )
    }
}
export default UserInfo;