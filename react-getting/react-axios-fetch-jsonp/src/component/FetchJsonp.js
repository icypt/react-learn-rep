import React from 'react';
import fetchJsonp from 'fetch-jsonp';

class FetchJsonp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        }
    }

    getTaskList =()=> {
        var apiUrl = 'http://192.168.31.219:8081/SpringBoot/react/getTaskList';
        fetchJsonp(apiUrl)
            .then(function(response) {
                return response.json()
            }).then((json) => {
            console.log('parsed json', json)
            this.setState({
                taskList: json.data
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getTaskList}>Fetch-jsonp从服务端获取任务列表</button>
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

export default FetchJsonp;