import React from 'react';

import Axios from './component/Axios';

import FecthJsonp from './component/FetchJsonp';


/**
 * 根组件
 */
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Axio获取服务端数据</h2>
                <Axios/>
                <br/>
                <br/>
                <hr/>
                <h2>Fetch-jsonp获取服务端数据</h2>
                <FecthJsonp/>
            </div>
        );
    }
}
export default App;
