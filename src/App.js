import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { List, Avatar } from 'antd';



import './App.css';
import Main from "./containers/Main";
import { withWeb3 } from 'react-web3-provider';

const data = [
    {
        title: 'Gucci bag',
    },
];
let shown = true;

const { Header, Content, Footer } = Layout;

const Items = () =>
    <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src="bag.jpg" />}
                    title={<Link to="/gucci">{item.title}</Link>}
                    description="Gucci"
                />
            </List.Item>
        )}
    />;

const land = () =>
        <img src="https://image.ibb.co/hPh5LA/Own-Chain-Logo.png" alt=""/>
    ;

class App extends Component {

    clicked = () => {
        shown = !shown;
    }

render() {
    const { web3 } = this.props;

    return (
        <Router>
            <Layout className="layout">
                <Header>
                    {/*<div className="logo" />*/}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Own Chain</Menu.Item>
                    </Menu>
                </Header>
                {shown}
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Own Chain</Breadcrumb.Item>
                        <Link to="/items" exact component={Items} data={data}><Breadcrumb.Item>Items</Breadcrumb.Item></Link>
                    </Breadcrumb>

                    <div style={{ background: '#fff', padding: 24, minHeight: 800 }}>
                        <Route path="/items" exact component={Items} />
                        <Route path="/gucci" exact component={Main} />
                        <Route path="/" exact component={land} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <p>Own Chain ©2018 Created @ HACKATHON 2018</p>
                    {/*<p>Using Web3 version: {web3.version}</p>*/}
                    {/*<p>{web3.accounts}</p>*/}
                </Footer>
            </Layout>
        </Router>

    );
  }
}

export default withWeb3(App);
