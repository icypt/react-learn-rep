import React from 'react';

// import Home from './component/Home';
import ReactForm from './component/ReactForm'
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
                <ReactForm/>
            </div>
        );
    }
}

export default App;
