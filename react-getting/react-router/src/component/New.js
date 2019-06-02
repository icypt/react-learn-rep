import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    nid:111,
                    title: '新闻111'
                },
                {
                    nid:222,
                    title: '新闻222'
                },
                {
                    nid:333,
                    title: '新闻333'
                },
                {
                    nid:444,
                    title: '新闻444'
                }
            ]
        }
    }


    render() {
        return (
            <div>
                <h2>新闻列表</h2>
                <ul>
                    {
                        this.state.list.map(function (value,key) {
                            return <li key={key}><Link to={`/content/${value.nid}`}>{value.title}</Link></li>;
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default News;

