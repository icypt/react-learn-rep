import React from 'react';
/*
react获取服务器APi接口的数据：
    react中没有提供专门的请求数据的模块。但是我们可以使用任何第三方请求数据模块实现请求数据
    1、axios          https://github.com/axios/axios       axios的作者觉得jsonp不太友好，推荐用CORS方式更为干净（后端运行跨域）
          1、安装axios模块npm install axios  --save   /  npm install axios  --save
          2、在哪里使用就在哪里引入import axios from 'axios'
          3、看文档使用
            var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
            axios.get(api)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    2、fetch-jsonp    https://github.com/camsong/fetch-jsonp
            1、安装 npm install fetch-jsonp  --save
            2、import fetchJsonp from 'fetch-jsonp'
            3、看文档使用
            fetchJsonp('/users.jsonp')
            .then(function(response) {
              return response.json()
            }).then(function(json) {
              console.log('parsed json', json)
            }).catch(function(ex) {
              console.log('parsing failed', ex)
            })
    3、其他请求数据的方法也可以...自己封装模块用原生js实现数据请求也可以...
远程测试API接口：
get请求：
    http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20
jsonp请求地址:
    http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&callback=?
*/
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            msg: '我是Home组件的内容',
            title: 'Home组件'
        }

    }
    render() {
        return (
            <div>
                <br/>
                <hr/>
                {this.state.msg}
            </div>
        )
    }
}

export default Home;