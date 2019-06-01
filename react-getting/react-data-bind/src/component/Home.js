import React from 'react';

/**
 * 事件对象:在触发DOM上的某个事件时,会产生一个事件对象event。这个对象中包含着所有与事件有关的信息
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Home组件',
            userName: ''
        }
    }

    run = (event) => {
        // alert(event.target);
        // event.target.style.background='red';
        //获取dom属性
        alert(event.target.getAttribute('aid'));
    }

    inputChange = (e) => {
        //获取表单的值
        this.setState({
            userName: e.target.value
        })
    }

    getUserName =()=> {
        alert(this.state.userName);
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <h2>事件对象演示</h2>
                <button aid="111" onClick={this.run}>事件对象</button>
                <br/><br/><hr/>
                {/*获取表单的值
                1、监听表单的改变事件
                2、在改变的事件里面获取输入的值
                3、把表单输入的值复制给userName
                4、点击按钮的时候获取state中userName的值*/}
                <input onChange={this.inputChange}/><button onClick={this.getUserName}>获取input的值</button>
            </div>
        );
    }
}

export default Home;