import React from 'react';

import storage from '../model/storge';

import '../assets/css/todolist.css';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [
            ]
        }

    }

    //增加待办事项
    addTodoTask =(e)=> {
        if(e.keyCode == 13) {
            var title = e.target.value;
            if(title) {
                var todoList = this.state.todoList;
                todoList.push({title: title, status: 0});
                this.setState({
                    todoList: todoList
                });
                storage.set('todoList', todoList);
            }
            e.target.value = '';
        }
    }

    //改变任务状态
    changeStatus(key) {
        var todoList = this.state.todoList;
        if(todoList[key].status == 0) {
            todoList[key].status = 1;
        } else {
            todoList[key].status = 0;
        }
        this.setState({
            todoList: todoList
        });
        storage.set('todoList', todoList);

    }

    //删除任务
    removeTask(key) {
        var todoList = this.state.todoList;
        todoList.splice(key,1);
        this.setState({
            todoList: todoList
        });
        storage.set('todoList', todoList);
    }

    //生命周期函数，页面加载就会触发
    componentDidMount() {
        var todoList = storage.get("todoList");
        if(todoList) {
            this.setState({
                todoList: todoList
            })
        }
    }


    render() {
        return (
            <div className="content">
                <input className="inputTask" onKeyUp={this.addTodoTask} placeholder="请输入待办事项,enter保存"/>
                <span className="title">待办事项列表</span>
                <ul className="list">
                    {
                        this.state.todoList.map( (value, key) => {
                          if(value.status == 0) {
                              return (
                                  <li key={key}>
                                      <input type="checkbox"  checked={value.status == 1} onChange={this.changeStatus.bind(this,key)}/><span>{value.title}</span><button className="remove" onClick={this.removeTask.bind(this,key)}>删除-</button>
                                  </li>
                              )
                          }
                        })
                    }
                </ul>
                <span className="title">已办事项列表</span>
                <ul className="list">
                    {
                        this.state.todoList.map( (value, key) => {
                            if(value.status == 1) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox"    checked={value.status == 1} onChange={this.changeStatus.bind(this,key)}/><span>{value.title}</span><button className="remove" onClick={this.removeTask.bind(this,key)}>删除-</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

            </div>
        );
    }


}

export default TodoList;