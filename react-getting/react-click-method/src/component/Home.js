import React from 'react';

/**
 * 改变this指向的三种方法：
 * 第一种方法：<button onClick={this.run.bind(this)}>按钮</button>
 * 第二种方法：造函数中改变  this.run = this.run.bind(this);
 * 第三种方法：run=()=> {alert(this.state.name)}
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "Home组件",
            userName: "张三"
        }
        this.getData = this.getData.bind(this);
    }

    run() {
        alert("方法已执行");
    }

    getData() {
        alert(this.state.msg);
    }

    setData = () => {
        this.setState({
            msg: "Home组件1"
        });
    }

    getUserName = () => {
        alert(this.state.userName);
    }

    setUserName(str) {
        this.setState({
            userName: str
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <h2>{this.state.userName}</h2>
                <button onClick={this.run}>执行方法</button>
                <br/>
                <br/>
                <button onClick={this.getData.bind(this)}>获取数据----第一种改变this指向的方式</button>
                <br/>
                <br/>
                <button onClick={this.getData}>获取数据----第二种改变this指向的方式</button>
                <br/>
                <br/>
                <button onClick={this.getUserName}>获取数据----第三种改变this指向的方式</button>
                <br/>
                <br/>
                <button onClick={this.setData}>改变state的值</button>
                <br/>
                <br/>
                <button onClick={this.setUserName.bind(this, "王五")}>执行方法传值</button>
            </div>
        );
    }
}

export default Home;