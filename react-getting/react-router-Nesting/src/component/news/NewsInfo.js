import React from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import NewsAdd from "./NewsAdd";
import NewsList from "./NewsList";
class NewsInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            msg: '我是新闻列表组件'
        }
    }



    render(){
        return (
            <div>
                <div className="content">
                    <div className="left">
                        <ul className="menu">
                            <li>
                                <Link to="/newsInfo">新闻列表</Link>
                            </li>
                            <li>
                                <Link to="/newsInfo/newsAdd/">新闻新增</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <Route exact  path={`${this.props.match.url}/`} component={NewsList} />
                        <Route path={`${this.props.match.url}/newsAdd/`} component={NewsAdd} />
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsInfo;