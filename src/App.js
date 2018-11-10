import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Web3Provider } from 'react-web3';
import './App.css';
import Main from "./containers/Main";

class App extends Component {
  render() {
    return (
          <div className="App">
              <Row type="flex" justify="center">
                  <Main/>
              </Row>
          </div>
    );
  }
}

export default App;
