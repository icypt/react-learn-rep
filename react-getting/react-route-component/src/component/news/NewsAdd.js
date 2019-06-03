import React from 'react';

class NewsAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是新闻新增组件'
        }
    }

    render(){
        return (
            <div>
                <h2>{this.state.msg}</h2>
            </div>
        )
    }
}
export default NewsAdd;