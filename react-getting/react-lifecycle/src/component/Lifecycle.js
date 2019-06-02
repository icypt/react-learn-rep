import React from 'react';
/*
https://reactjs.org/docs/react-component.html
React生命周期函数：
    组件加载之前，组件加载完成，以及组件更新数据，组件销毁。
    触发的一系列的方法 ，这就是组件的生命周期函数
组件加载的时候触发的函数的顺序：
    1、constructor 构造函数 更新时不会触发
    2、componentWillMount 组件将要挂载时触发
    3、render 渲染dom
    4、componentDidMount 组件挂载完成时触发 dom操作|请求数据
组件数据更新的时候触发的生命周期函数的顺序：
    1、shouldComponentUpdate 是否应该更新 返回true|false
        nextProps: 父子组件传值时更新只收的属性
        nextState: 更新的数据
    2、componentWillUpdate 将要更新
    3、render 渲染
    4、componentDidUpdate 更新完成
你在父组件里面改变props传值的时候触发的：
    componentWillReceiveProps
组件销毁的时候触发的：
    componentWillUnmount
必须记住的生命周期函数：
    *加载的时候：componentWillMount、 render 、componentDidMount（dom操作）
    更新的时候：componentWillUpdate、render、componentDidUpdate
    *销毁的时候： componentWillUnmount
*/
class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            msg: "生命周期函数"
        }
    }

    updateMsg =()=> {
        this.setState({
            msg: '呵呵'
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <h2>生命周期函数--{this.props.title}</h2>
                <button onClick={this.updateMsg}>更新msg数据</button>
                <h3>msg:{this.state.msg}</h3>
            </div>
        )
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
}

export default Lifecycle;

