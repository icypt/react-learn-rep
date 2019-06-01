import React from 'react';
class News extends React.Component{
    constructor(props) {
        //用于父子附件传值
        super(props);
        this.state= {
            name: '李四'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <ul>
                    <li>列表一</li>
                    <li>列表二</li>
                    <li>列表三</li>
                    <li>列表四</li>
                </ul>
            </div>
        );
    }
}
export default News;