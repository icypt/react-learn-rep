import React from 'react';
import '../assets/css/index.css';

/**
 * 绑定属性需注意：
 * 如果要用class必须使用className，因为class为关键字
 * 如果要用for必须使用htmlFor，因为for为关键字
 * 行内样式style,style={{"color": "green"}}
 */
class Home extends React.Component {

    //数据
    constructor(props) {
        super(props);

        this.state = {
            msg: 'Home组件',
            title :'我是p标签的title',
            style: {
                color: 'red',
                size: '16px'
            }
        }

    }

    //模板
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <hr/>
                <p title={this.state.title}>我是一个p标签</p>
                {/*如果要用class必须使用className，因为class为关键字*/}
                <p className="red_p">我是一个红色的p标签</p>
                <p>
                    {/*如果要用for必须使用htmlFor，因为for为关键字*/}
                    <label htmlFor="name">姓名</label>
                    <input id="name"/>
                </p>

                <p>
                    <span style={{"color": "green"}}> 行内样式</span>
                </p>

                <p>
                    <span style={this.state.style}> 绑定行内样式</span>
                </p>

            </div>
        );
    }
}

export default Home;