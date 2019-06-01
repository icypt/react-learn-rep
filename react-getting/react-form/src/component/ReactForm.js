import React from 'react';

class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg : 'React表单',
            name:'',
            sex:'1',
            city:'深圳',
            citys:[

                '北京','上海','深圳'
            ],
            hobby:[
                {
                    'title':"睡觉",
                    'checked':true
                },
                {
                    'title':"吃饭",
                    'checked':false
                },
                {
                    'title':"敲代码",
                    'checked':true
                }
            ],
            info:''
        }
    }

    //绑定name
    handleName =(e)=> {
        this.setState({
           name: e.target.value
        });
    }

    //绑定性别
    handleSex =(e)=> {
        this.setState({
            sex: e.target.value
        })
    }

    //绑定城市
    handleCity =(e)=> {
        this.setState({
            city: e.target.value
        })
    }

    //绑定爱好
    handleHobby =(key)=>{
        var hobbys = this.state.hobby;
        hobbys[key].checked = !hobbys[key].checked;
        this.setState({
            hobby: hobbys
        })
    }
    //操作自我介绍
    handleInfo =(e)=> {
        this.setState({
            info: e.target.value
        })
    }

    //监听提交事件
    handleSubmit =(e)=> {
        //阻止单页面表单提交页面刷新
        e.preventDefault();
        console.log(this.state.name,this.state.sex, this.state.city, this.state.hobby, this.state.info)
    }


    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <form onSubmit={this.handleSubmit}>
                    姓名：<input value={this.state.name} onChange={this.handleName}/><br/><br/>
                    性别：<input type="radio" value="1" checked={this.state.sex == 1} onChange={this.handleSex}/>男 &nbsp;&nbsp;
                    <input type="radio" value="2" checked={this.state.sex == 2} onChange={this.handleSex}/>女 <br/><br/>
                    城市：<select value={this.state.city} onChange={this.handleCity}>
                            {
                                this.state.citys.map(function (value, key) {
                                    return <option key={key}>{value}</option>
                                })
                            }
                          </select>
                    <br/><br/>
                    爱好：
                    {
                        // 注意this指向
                        this.state.hobby.map( (value, key) => {
                            return (
                                <span key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handleHobby.bind(this,key)}/>{value.title}
                                </span>
                            )
                        })
                    }
                    <br/><br/>
                    备注：
                    <textarea value={this.state.info} onChange={this.handleInfo}/>
                    <br/><br/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

}

export default ReactForm;