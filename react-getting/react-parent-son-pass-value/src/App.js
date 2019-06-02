import React from 'react';

import Home from './component/Home';
import News from './component/News';

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
                <h2>父子组件传值</h2>
                {/*<Home/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                <News/>
            </div>
        );
    }
}

export default App;
