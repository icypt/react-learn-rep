import React from 'react';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            hobby:'爱吃苹果'
        }
    }

    //dom获取input的值
    inputChange =(e)=> {
        let inputValue = this.refs.userName.value;
        this.setState({
            userName: inputValue
        });

    }

    //获取input输入的值
    getInput =()=> {
        alert(this.state.userName);
    }

    keyUp =(e)=> {
        if(e.keyCode == 13) {
            alert(e.target.value);
        }
    }

    keyDown =(e)=> {
        if(e.keyCode == 13) {
            alert(e.target.value);
        }
    }

    changeHobby =(e)=> {
        this.setState({
            hobby: e.target.value
        })
    }

    setHobby  =()=> {
        this.setState({
            hobby: '爱吃苹果'
        })
    }
    render() {
        return (
         <div>
             {/*通过ref获取input的值*/}
             <input ref="userName" onChange={this.inputChange}/>
             <button onClick={this.getInput}>获取input的值</button>
             <br/><br/><hr/>
             <h2>键盘事件</h2>
             <span>onKeyUp事件：</span><input onKeyUp={this.keyUp}/>
             <br/>
             <span>onKeyDown事件：</span><input onKeyDown={this.keyDown}/>
             <br/><br/><hr/>
             <h2>双向数据绑定</h2>
             <input value={this.state.hobby} onChange={this.changeHobby}/>
             <br/><br/>
             <span>爱好：{this.state.hobby}</span>
             <br/><br/>
             <button onClick={this.setHobby}>改变hobby的值</button>
         </div>
        )
    }

}

export default Data;