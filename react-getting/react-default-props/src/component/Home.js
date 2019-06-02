import React from 'react';
import Header from './Header';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            msg: '我是Home组件的内容',
            title: 'Home组件'
        }

    }

    render() {
        return (
            <div>
                {/*<Header title={this.state.title}/>*/}
                <Header />
                <br/>
                <hr/>
                {this.state.msg}
            </div>
        )
    }
}

export default Home;