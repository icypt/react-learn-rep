import React from 'react';

import axios from 'axios';

class Axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        }
    }
    getTaskList =()=> {
        var apiUrl = '/SpringBoot/react/getTaskList';
        axios.get(apiUrl)
            .then((response) =>{
              console.log(response.data.data)
                this.setState({
                    taskList: response.data.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }
    render() {
        return (
            <div>
                <button onClick={this.getTaskList}>Axios从服务端获取任务列表</button>
                <ul>
                    {
                        this.state.taskList.map( (value, key) => {
                            return <li key={key} title={value.title}>{value.content}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

}
export default Axios;