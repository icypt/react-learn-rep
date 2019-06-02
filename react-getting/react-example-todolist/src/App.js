import React from 'react';

import TodoList from './component/TodoList';

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
                <TodoList/>
            </div>
        );
    }
}

export default App;
