import React,{Component} from 'react';
import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
//引入Home组价
import Home from './component/Home';
import News from './component/News';

class App extends Component {
  render() {
    return (
        <div className="App">
          您好！ React 根组件
        <Home/>
        <News/>
        </div>

    );
  }
}

export default App;
