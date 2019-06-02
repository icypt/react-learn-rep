import React from 'react';

import Lifcycle from './component/Lifecycle';


/**
 * 根组件
 */
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "父组件title",
            flag: true
        }
    }
    setTitle =()=> {
        this.setState({
            title: "改变后的父组件title"
        })
    }

    setFlag =()=> {
        this.setState( {
                flag: !this.state.flag
        }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.setTitle}>改变父组件传值</button>
                <br/>
                <br/>
                <button onClick={this.setFlag}>创建或者销毁组件</button>
                <br/>
                <br/>
                <hr/>
                {
                    this.state.flag ? <Lifcycle title={this.state.title}/> : ''
                }


            </div>
        );
    }
}
export default App;
