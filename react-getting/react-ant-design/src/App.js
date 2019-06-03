import React from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import routes from './model/route';
import './assets/css/main.css';
import { Layout, Menu, Icon } from 'antd';
import { TreeSelect } from 'antd';
const { Header, Sider, Content } = Layout;
const TreeNode = TreeSelect.TreeNode;


/**
 * 路由配置：https://reacttraining.com/react-router/web/example/route-config
 */
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
