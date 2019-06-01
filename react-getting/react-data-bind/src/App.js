import React from 'react';

// import Home from './component/Home';
import  Data from './component/Data';
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
                {/*<Home/>*/}
                <Data/>
            </div>
        );
    }
}

export default App;
