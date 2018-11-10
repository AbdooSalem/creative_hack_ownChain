import {Button, Timeline} from 'antd';
import { Row, Col } from 'antd';
import {Component} from "react";
import React from "react";
import "./Main.css";


const axios = require('axios');
// const Web3 = require('web3');
// const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/6ef2e161b20f493d9f2daf77efbbd8ed"));
// const keystore = `{"version":3,"id":"94b707d3-4ae9-4f9e-8657-c469973f789b","address":"b9f31c423473a1ba4ba1d326a439902a4f8b02f7","Crypto":{"ciphertext":"f429c19570226dd84bd152a80c75afc4a48f1c26ffd890ded0b7cddc4ff3d485","cipherparams":{"iv":"a7c118956ac8a5a96f46b86eab05fddc"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"17e89efc8eef5d20e5076cae9d58499c1668b9f6a02f5feed8578a823f7a92f8","n":8192,"r":8,"p":1},"mac":"15b76741d4abb1981b39309ac50a73ebf9652ad496da1f300a16c4f88e204f87"}}`;
// const decryptedAccount = web3.eth.accounts.decrypt(keystore, 'PASSWORD');

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.mapToName = this.mapToName.bind(this);
        this.setState = this.setState.bind(this);
    }


    componentDidMount() {
        let mapToName = this.mapToName;
        let setState = this.setState;
        let vars = [];
        let i = 0;
        let v;
        let content = "";

        axios.get('https://ropsten.etherscan.io/token/generic-tokentxns2?contractAddress=0x871d8379127c367e79f7893cb51e9695733957fd&a=1')
            .then(function(res) {
                content = res.data;
                return res.data;
            })
            .then(function(res) {
                while (content.indexOf("_parent") != -1) {
                    content = content.substr(content.indexOf("_parent")+9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    let obj = {hash: v};

                    content = content.substr(content.indexOf("t' title='")+10, content.length);
                    v = content.substr(0, content.indexOf("'"));
                    console.log(v);

                    obj = {...obj, created: v};

                    content = content.substr(content.indexOf("_parent")+9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    obj = {...obj, from: v, fromName: mapToName(v)};

                    content = content.substr(content.indexOf("_parent")+9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    obj = {...obj, to: v, toName: mapToName(v)};

                    content = content.substr(content.indexOf("_parent")+9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    obj = {...obj, id: v};

                    vars.push(obj);

                    i++
                }


                console.log(vars);
                setState({data: [...vars]});
            }).catch(function(error) {
                console.log(error.message);
            });
    }


    mapToName = (hash) => {
        if(hash == "0xc7c2f5a4b74b5ac64af2d1987f724f0fe67dd460")
            return "Isa";
        else if (hash == "0xb9f31c423473a1ba4ba1d326a439902a4f8b02f7")
            return "Fabian";
        else if (hash == "0x0000000000000000000000000000000000000000")
            return "Apple Munich";
        else
            return hash
    }

    render() {
        return (
            <div className="main">
                <div>
                    <Row>
                        <Col span={16}>
                            <p className="title">HERMÈS VINTAGE 'Kelly' Handtasche</p>
                            <Timeline>
                                {
                                    this.state.data.map((obj)=>{
                                        return (
                                            <Timeline.Item>
                                                <p><span class="bold">created</span> <span >{obj.created}</span></p>
                                                <p><span class="bold">from</span> <span class="names">{obj.fromName}</span> <span class="hash">{obj.from}</span></p>
                                                <p><span class="bold">to</span> <span class="names">{obj.toName}</span> <span class="hash">{obj.to}</span></p>
                                                <p><span class="bold">hash</span> <span >{obj.hash}</span></p>
                                            </Timeline.Item>
                                        )
                                    })
                                }
                            </Timeline>
                        </Col>
                        <Col span={8}>
                            <img src={require('../assets/bag.jpg')} width="200px" />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

}


export default Main;