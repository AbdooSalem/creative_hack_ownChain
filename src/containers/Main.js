import {Timeline} from 'antd';
import {Row, Col} from 'antd';
import {Component} from "react";
import React from "react";
import "./Main.css";
import waterfall from 'async-waterfall';
import {withWeb3} from 'react-web3-provider';
import { Tag } from 'antd';

const Tx = require('ethereumjs-tx');


const axios = require('axios');

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
        let v;
        let i = 0;
        let content = "";

        axios.get('https://ropsten.etherscan.io/token/generic-tokentxns2?contractAddress=0x39260c3ab5fe473461e01868fffc51d51f98cd5c&a=2')
            .then(function(res) {
                content = res.data;
                return res.data;
            })
            .then(function (res) {
                while (content.indexOf("_parent") !== -1) {
                    content = content.substr(content.indexOf("_parent") + 9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    let obj = {hash: v};

                    content = content.substr(content.indexOf("t' title='") + 10, content.length);
                    v = content.substr(0, content.indexOf("'"));
                    console.log(v);

                    obj = {...obj, created: v};

                    content = content.substr(content.indexOf("_parent") + 9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    obj = {...obj, from: v, fromName: mapToName(v)};

                    content = content.substr(content.indexOf("_parent") + 9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    obj = {...obj, to: v, toName: mapToName(v)};

                    content = content.substr(content.indexOf("_parent") + 9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    obj = {...obj, id: v};

                    vars.push(obj);

                    i++
                }


                console.log(vars);
                setState({data: [...vars]});
            }).catch(function (error) {
            console.log(error.message);
        });
    }


    mapToName = (hash) => {

        if(hash === "0xc7c2f5a4b74b5ac64af2d1987f724f0fe67dd460")
            return "Gucci Store Milano";
        else if (hash === "0xb9f31c423473a1ba4ba1d326a439902a4f8b02f7")
            return "Isa Usmanov";
        else if (hash === "0x0000000000000000000000000000000000000000")
            return "Gucci Manufacturer in Japan";
        else if (hash === "0x1f31fc451e98de8fe12a7969dad9d9f801165e3c")
            return "Fabian";
        else if (hash === "0x46B3D71512E11385f0f8C8e65b73eFff5615a003")
            return "Abdoo Said";
        else
            return hash
    }

    async sendToken() {
        const {web3} = this.props;

        var Tx = require('ethereumjs-tx');

        // Who holds the token now?
        var myAddress = "0xb9F31c423473A1bA4BA1D326A439902a4F8b02f7";

        // Who are we trying to send this token to?
        var destAddress = "0x1F31Fc451E98de8Fe12A7969DAd9D9F801165E3c";

        // Determine the nonce
        var count = await web3.eth.getTransactionCount(myAddress);
        console.log(`num transactions so far: ${count}`);

        // This file is just JSON stolen from the contract page on etherscan.io under "Contract ABI"
        var abiArray = (
            [
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_interfaceId",
                            "type": "bytes4"
                        }
                    ],
                    "name": "supportsInterface",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "name",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "getApproved",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "approve",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "newPrice",
                            "type": "uint256"
                        }
                    ],
                    "name": "setCurrentPrice",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "InterfaceId_ERC165",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bytes4"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "transferFrom",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "name": "_index",
                            "type": "uint256"
                        }
                    ],
                    "name": "tokenOfOwnerByIndex",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "kill",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "safeTransferFrom",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "exists",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_index",
                            "type": "uint256"
                        }
                    ],
                    "name": "tokenByIndex",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_type",
                            "type": "uint256"
                        },
                        {
                            "name": "_title",
                            "type": "string"
                        },
                        {
                            "name": "_description",
                            "type": "string"
                        }
                    ],
                    "name": "buyToken",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "ownerOf",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "renounceOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "viewToken",
                    "outputs": [
                        {
                            "name": "tokenType_",
                            "type": "uint256"
                        },
                        {
                            "name": "tokenTitle_",
                            "type": "string"
                        },
                        {
                            "name": "tokenDescription_",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "myTokens",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256[]"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "symbol",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_approved",
                            "type": "bool"
                        }
                    ],
                    "name": "setApprovalForAll",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        },
                        {
                            "name": "_data",
                            "type": "bytes"
                        }
                    ],
                    "name": "safeTransferFrom",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "tokenURI",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "name": "_operator",
                            "type": "address"
                        }
                    ],
                    "name": "isApprovedForAll",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "getCurrentPrice",
                    "outputs": [
                        {
                            "name": "price",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "buyer",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "BoughtToken",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "previousOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipRenounced",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_approved",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "Approval",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_operator",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "_approved",
                            "type": "bool"
                        }
                    ],
                    "name": "ApprovalForAll",
                    "type": "event"
                }
            ]
        );

        // This is the address of the contract which created the ERC20 token
        var contractAddress = "0x39260c3Ab5FE473461e01868FfFC51d51f98CD5c";
        var contract = new web3.eth.Contract(abiArray, contractAddress, {from: myAddress});

        // How many tokens do I have before sending?
        var balance = await contract.methods.balanceOf(myAddress).call();
        console.log(`Balance before send: ${balance}`);

        // I chose gas price and gas limit based on what ethereum wallet was recommending for a similar transaction. You may need to change the gas price!
        var rawTransaction = {
            "from": myAddress,
            "nonce": "0x" + count.toString(16),
            "gasPrice": "0x003B9ACA00",
            "gasLimit": "0x250CA",
            "to": contractAddress,
            "value": "0x0",
            "data": contract.methods.safeTransferFrom(myAddress, destAddress, "0x01").encodeABI(),
            "chainId": "0x03"
        };

        // The private key must be for myAddress
        var privKey = new Buffer("dda945b064c032285927995d653ec0190014affd83fac6f2503853fea6d1d7fc", 'hex');
        var tx = new Tx(rawTransaction);
        tx.sign(privKey);
        var serializedTx = tx.serialize();

        // Comment out these three lines if you don't really want to send the TX right now
        console.log(`Attempting to send signed tx:  ${serializedTx.toString('hex')}`);
        var receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
        console.log(`Receipt info:  ${JSON.stringify(receipt, null, '\t')}`);
    }

    sendEther(amount, to) {
        const {web3} = this.props;

        waterfall([
            (wcb) => {
                web3.eth.getAccounts().then((accounts) => {
                    if (accounts && accounts.length >= 1) {
                        wcb(null, accounts[0]);
                    } else {
                        wcb('Unknown account', null);
                    }
                });
            },
            (account, wcb) => {
                web3.eth.sendTransaction({
                    from: account,
                    to,
                    value: amount * 1000000000000000000,
                }, wcb);
            },
        ], console.log);
    }

    render() {

        const {web3} = this.props;

        web3.eth.getAccounts(console.log);

        return (
            <div className="main">

                <div>
                    <Row>
                        <Col span={16}>
                            <p className="title">GUCCI Handbag</p>
                            <Timeline>
                                {
                                    this.state.data.map((obj) => {
                                        return (
                                            <Timeline.Item>
                                                <p>
                                                    <Tag color="#108ee9">Created</Tag>
                                                    <span >{obj.created}</span></p>
                                                <p>
                                                    <Tag color="magenta">From</Tag>
                                                    <span class="names">{obj.fromName}</span> <span class="hash">{obj.from}</span></p>
                                                <p> <Tag color="cyan">To</Tag> <span class="names">{obj.toName}</span> <span class="hash">{obj.to}</span></p>
                                                <p><Tag color="volcano">Trans. hash</Tag> <span >{obj.hash}</span></p>
                                            </Timeline.Item>
                                        )
                                    })
                                }
                            </Timeline>
                        </Col>
                        <Col span={8}>
                            <img src={require('../assets/bag.jpg')} width="200px"/>
                        </Col>
                    </Row>
                </div>

                {/*<button onClick={() => this.sendEther(0.01, '0xb9f31c423473a1ba4ba1d326a439902a4f8b02f7')}>SEND ETHER</button>*/}
                {/*<button onClick={() => this.sendToken()}>SEND TOKEN</button>*/}
            </div>
        );
    }
}

export default withWeb3(Main);