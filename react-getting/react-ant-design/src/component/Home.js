import React from 'react';
import { Button } from 'antd';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是Home组件'
        }
    }

    render() {
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <Button type="primary">antd 按钮</Button>
            </div>
        )
    }

}
export default Home;