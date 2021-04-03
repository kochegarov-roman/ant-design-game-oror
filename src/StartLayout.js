import React from "react";
import {Button, Col, Input, Layout, Menu, Row} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined, SearchOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './layout.css';
import {info} from "./constants";
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import {About} from "./About";
import {SelectFeatures} from "./SelectFeature";
import {EnterResult} from "./EnterResult";
const {Header, Sider, Content} = Layout;

export class StartLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                {/*<Sider breakpoint="lg" trigger={null} collapsible collapsed={this.state.collapsed}>*/}
                {/*    <div className="logo"/>*/}
                {/*    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>*/}
                {/*        <Menu.Item key="1" icon={<UserOutlined/>}>*/}
                {/*            <Link to={'/select-features'}>Выбрать характеристики</Link>*/}
                {/*        </Menu.Item>*/}
                {/*        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>*/}
                {/*            <Link to={'/enter-result'}>Ввод результатов</Link>*/}
                {/*        </Menu.Item>*/}
                {/*        <Menu.Item key="3" icon={<UploadOutlined/>}>*/}
                {/*            <Link to={'/about'}>Об игре</Link>*/}
                {/*        </Menu.Item>*/}
                {/*    </Menu>*/}
                {/*</Sider>*/}

                <Layout className="site-layout">
                    <Header>
                        <div className="logo" placeholder={'Menu'}/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            {/*<Menu.Item key="1">*/}
                            {/*    <Link to={'/select-features'}>Выбрать характеристики</Link>*/}
                            {/*</Menu.Item>*/}
                            <Menu.Item key="2">
                                <Link to={'/enter-result'}>Ввод результатов</Link>
                            </Menu.Item>
                            {/*<Menu.Item key="3">*/}
                            {/*    <Link to={'/about'}>Об игре</Link>*/}
                            {/*</Menu.Item>*/}
                        </Menu>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <div className="ant">
                            <Switch>
                                <Route path="/about" exact component={About}  />
                                <Route path="/select-features" exact component={SelectFeatures}  />
                                <Route path="/enter-result" exact component={EnterResult}  />
                                <Route path="/" exact component={EnterResult}  />
                            </Switch>


                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
