import React from 'react';
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是用户列表组件'
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
export default UserList;