import React from 'react';
import { Link } from "react-router-dom";

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
            </div>
        )
    }

}
export default Home;