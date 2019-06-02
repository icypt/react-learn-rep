import React from 'react';
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nid: ''
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            // 获取动态路由的传值
            nid: this.props.match.params.nid
        })
    }

    render() {
        return (
            <div>
                <h2>新闻详情</h2>
                <br/>
                <br/>

                <h4>新闻编号：{this.state.nid}</h4>
            </div>
        )
    }
}

export default Content;

