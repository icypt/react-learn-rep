/**
 * React是React的核心库
 * ReactDOM  是提供与Dom相关的功能
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; css可以删掉

//引入App.js组件
import App from './App';
//不用管 加快React运行速度的一个组件
import * as serviceWorker from './serviceWorker';

//把App组件挂载到根节点
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
