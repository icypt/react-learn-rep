import React from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import routes from './model/route';
import './assets/css/main.css';
import { Layout, Menu, Icon } from 'antd';
import { TreeSelect } from 'antd';
const { Header, Sider, Content } = Layout;
const TreeNode = TreeSelect.TreeNode;


/*
  1、antd官网：
	https://ant.design/docs/react/introduce-cn
  2、React中使用Antd
        1、安装antd   npm install antd --save    /   yarn add antd     /  cnpm install antd --save
        2、在您的react项目的css文件中引入 Antd的css
            @import '~antd/dist/antd.css';
        3、看文档使用：
		如使用Button：
			1、在对应的组件中引入Antd        import { Button } from 'antd';
            2、<Button type="primary">Primary</Button>
            3、React中使用Antd高级配置，按需引入css样式
我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 antd 组件的样式（对前端性能是个隐患）。
    	1、安装antd         npm install antd --save
        2、安装（react-app-rewired）一个对 create-react-app 进行自定义配置的社区解决方案
            yarn add react-app-rewired customize-cra    /  cnpm install  react-app-rewired customize-cra --save
        3、修改 package.json
            react-scripts 需改为react-app-rewired
            "scripts": {
                "start": "react-app-rewired start",
                    "build": "react-app-rewired build",
                    "test": "react-app-rewired test",
                    "eject": "react-app-rewired eject"
            }
        4、在项目根目录创建一个 config-overrides.js 用于修改默认配置
            module.exports = function override(config, env) {
                // do stuff with the webpack config...
                return config;
            };

        5、安装babel-plugin-import   babel-plugin-import是一个用于按需加载组件代码和样式的 babel 插件
            yarn add babel-plugin-import   /  cnpm install babel-plugin-import --save
        6、修改 config-overrides.js
            const { override, fixBabelImports } = require('customize-cra');
             module.exports = override(
                   fixBabelImports('import', {
                         libraryName: 'antd',
                     libraryDirectory: 'es',
                     style: 'css',
                   }),
             );
        7、然后移除前面在 src/App.css 里全量添加的 @import '~antd/dist/antd.css'; 直接引入组件使用就会有对应的css
            import { Button } from 'antd';
            <Button type="primary">Primary</Button>*/
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            value: undefined
        }
    }


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onChange = value => {
        console.log(value);
        this.setState({ value });
    };
    render() {
        return (
            <Router>
                <div className="app">
                    <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                    <Icon type="user" />
                                    <span> <Link to="/">首页</Link></span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="video-camera" />
                                    <span>nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="upload" />
                                    <span>nav 3</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Header>
                            <Content
                                style={{
                                    margin: '24px 16px',
                                    padding: 24,
                                    background: '#fff',
                                    minHeight: 280,
                                }}
                            >
                                {/*内容区*/}
                                {
                                    routes.map(function (route, key) {
                                        if(route.exact) {
                                            return <Route key={key} exact path={route.path}
                                                          render={props => (
                                                              // 传入嵌套路由
                                                              <route.component {...props} routes={route.routes} />
                                                          )}
                                            />;
                                        } else {
                                            return <Route key={key} path={route.path}
                                                          render={props => (
                                                              // 传入嵌套路由
                                                              <route.component {...props} routes={route.routes} />
                                                          )}
                                            />;
                                        }
                                    })
                                }
                                <div>
                                    <TreeSelect
                                        showSearch
                                        style={{ width: 300 }}
                                        value={this.state.value}
                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                        placeholder="Please select"
                                        allowClear
                                        treeDefaultExpandAll
                                        onChange={this.onChange}
                                    >
                                        <TreeNode value="parent 1" title="parent 1" key="0-1">
                                            <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                                                <TreeNode value="leaf1" title="my leaf" key="random" />
                                                <TreeNode value="leaf2" title="your leaf" key="random1" />
                                            </TreeNode>
                                            <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                                                <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                                            </TreeNode>
                                        </TreeNode>
                                    </TreeSelect>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </Router>
        );
    }
}
export default App;
