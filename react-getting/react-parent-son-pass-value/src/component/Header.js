import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个头部组件'
        }

    }

    getData =()=> {
        alert(this.props.news.state.title);
    }

    render() {
        return (
            <div>
                {this.props.title}
                <br/><br/>
                <button onClick={this.props.run}>子组件调用父组件传入方法</button>
                <br/><br/>
                <button onClick={this.props.news.getData}>子组件通过获取父组件对象调用父组件方法</button>
                <br/><br/>
                <button onClick={this.props.news.getChildData.bind(this, '子组件传入内容')}>
                    子组件通过获取父组件对象调用父组件方法并传入值</button>
                <br/><br/>
                <button onClick={this.getData}>子组件通过子组件方法调用父组件方法</button>
            </div>
        )
    }
}

export default Header;