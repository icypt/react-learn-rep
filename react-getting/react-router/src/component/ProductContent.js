import React from 'react';
import url from 'url'; //cnpm install url --save
class ProductContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: ''
        }
    }

    componentDidMount() {
        var query = url.parse(this.props.location.search,true).query;
        console.log(query)//{pid: "111"}
        this.setState({
            pid: query.pid
        });

    }

    render() {
        return (
            <div>
                <h2>商品详情</h2>
                <br/>
                <br/>

                <h4>商品编号：{this.state.pid}</h4>
            </div>
        )
    }
}

export default ProductContent;

