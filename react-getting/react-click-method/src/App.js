import React from 'react';

import Home from './component/Home';

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
                <Home/>
            </div>
        );
    }
}

export default App;
