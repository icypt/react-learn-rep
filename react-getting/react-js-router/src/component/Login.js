import React from 'react';
import { Redirect } from 'react-router'

/**
 *Redirect文档： https://reacttraining.com/react-router/web/api/Redirect
 */
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是登录组件',
            loginFlag: false
        }
    }

    login =()=> {
        var userName = this.refs.userName.value;
        var pass = this.refs.pass.value;
        if(userName === 'icypt' && pass === '123') {
            //登录成功
            this.setState({
                loginFlag: true
            });
        } else {
            alert("用户名密码错误！");
        }
    }

    render() {
        //通过js路由
        if(this.state.loginFlag) {
           return ( <Redirect to="/"/>);
        } else {
            return(
                <div>
                    <h2>{this.state.msg}</h2>
                    用户名：<input ref="userName"/><br/><br/>
                    密码：<input ref="pass"/><br/><br/>
                    <button onClick={this.login}>登录</button>
                </div>
            )
        }
    }

}
export default Login;