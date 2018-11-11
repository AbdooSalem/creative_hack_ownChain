import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import './App.css';
import Main from "./containers/Main";
import { withWeb3 } from 'react-web3-provider';

const { Header, Content, Footer } = Layout;

class App extends Component {

render() {
    const { web3 } = this.props;

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Own Chain</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Own Chain</Breadcrumb.Item>
                    <Breadcrumb.Item>Items</Breadcrumb.Item>
                    <Breadcrumb.Item>HERMÈS VINTAGE 'Kelly' Handtasche</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Main/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <p>Own Chain ©2018 Created @ HACKATHON 2018</p>
                <p>Using Web3 version: {web3.version}</p>
                <p>{web3.accounts}</p>

            </Footer>
        </Layout>

    );
  }
}

export default withWeb3(App);
