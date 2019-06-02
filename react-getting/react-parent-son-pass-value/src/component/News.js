import React from 'react';
import Header from './Header';
import Footer from "./Footer";
class News extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            msg: '我是新闻组件的内容',
            title: '新闻组件'
        }

    }

    //传入子组件方法
    run =()=> {
        alert("我是新闻组件方法");
    }

    getData =()=> {
        alert(this.state.msg);
    }

    getChildData =(data)=> {
        this.setState({
           msg: data
        });
        alert(data);
    }

    //通过子组件dom获取子组件数据
    getChildDataByDom =()=> {
        alert(this.refs.footer.state.msg);//直接获取子组件数据
    }
    //通过子组件dom调用子组件方法
    getChildMethod =()=> {
        this.refs.footer.getData();
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} run={this.run} news={this}/>
                <br/>
                <hr/>
                {this.state.msg}
                <br/>
                <button onClick={this.getChildDataByDom}>父组件通过dom直接获取子组件数据</button>
                <button onClick={this.getChildMethod}>父组件通过dom直接调用子组件方法</button>
                <br/>
                <hr/>
                <Footer ref="footer"/>
            </div>
        )
    }
}

export default News;