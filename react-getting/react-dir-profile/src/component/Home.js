import React, {Component} from 'react';

class Home extends Component{
    constructor(props) {
        super(props);
        //定义数据
        this.state={
            name:"张三",
            age: 30,
            parentInfo: {
                parentName: '老陈',
                parentAge: 55
            }
        }
    }


    render() {
        return (
            <div>
                <p>您好！ React--我是Home组件</p>
                <p>React使用jsx语法：js与html的混合写法</p>
                <p>如果有多行代码必须放在一个根节点下</p>
                <p>姓名：{this.state.name}</p>
                <p>年龄：{this.state.age}</p>
                <p>对象：姓名：{this.state.parentInfo.parentName}---------年龄：{this.state.parentInfo.parentAge}</p>

            </div>
        );
    }
}
export default Home;
