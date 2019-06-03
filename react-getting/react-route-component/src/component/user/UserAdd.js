import React from 'react';

class UserAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是用户新增组件'
        }
    }

    render(){
        return (
            <div>
                <h2>{this.state.msg}</h2>
            </div>
        )
    }
}
export default UserAdd;