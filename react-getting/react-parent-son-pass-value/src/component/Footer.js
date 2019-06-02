import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个底部组件'
        }

    }

    getData =()=> {
        alert("我是底部组件的方法");
    }

    render() {
        return (
            <div>
                {this.state.msg}
            </div>
        )
    }
}

export default Footer;