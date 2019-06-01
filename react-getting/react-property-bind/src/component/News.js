import React from 'react';
import mm from '../assets/images/timg.jpg';
/**
 *引入本地图片的两种方式：
 * 第一种：import mm from '../assets/images/timg.jpg'  <img src={mm}/>
 * 第二种：<img src={require('../assets/images/timg.jpg')}/>
 */
class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg : "新闻组件",
            list: [111111111,222222222,3333333333],
            listHtml: [<h3 key="1">第一个h3</h3>,<h3 key = '2'>第二个h3</h3>,<h3 key= '3'>第三个h3</h3>],
            listNews: [
                {
                    title: "新闻标题1",
                    msg: "新闻内容1"
                },
                {
                    title: "新闻标题2",
                    msg: "新闻内容2"
                },
                {
                    title: "新闻标题3",
                    msg: "新闻内容3"
                }
            ]
        }
    }

    render() {
        let listResult = this.state.list.map(function (value,key) {
           return <li key={key}>{value}</li> ;
        });
        return (
            <div className="news">
                <h2>{this.state.msg}</h2>
                <hr/>
                <div className="box">
                    <div>
                        <span className="title">以组件的方式引入图片</span>
                        <img src={mm}/>
                    </div>
                    <div>
                        <span className="title">es5语法引入图片</span>
                        <img src={require('../assets/images/timg.jpg')}/>
                    </div>

                    <div>
                        <span className="title">引入远程图片</span>
                        <img src='https://www.baidu.com/img/dong_28db0e2033ff1faf14771bc40ad0a9cd.gif'/>
                    </div>
                </div>
                <div className="box">
                    <span className="title">循环普通数组</span>
                    <p>{this.state.list}</p>
                </div>
                <div className="box">
                    <span className="title">循环HTML数组</span>
                    <span>{this.state.listHtml}</span>
                </div>
                <div className="box">
                    <span className="title">循环普通数组加入HTML元素</span>
                    <ul>{listResult}</ul>
                </div>
                <div className="box">
                    <span className="title">模板内循环</span>
                    <ul>
                        {
                            this.state.listNews.map(function (value, key) {
                                return <li key={key} title={value.title}>{value.msg}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default News;