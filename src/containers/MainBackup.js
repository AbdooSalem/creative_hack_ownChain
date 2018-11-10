import { Button } from 'antd';
import {Component} from "react";
import React from "react";
import "./Main.css";
import ItemHistory from "../components/ItemHistory";
import Web3 from 'web3';
import Eth from 'ethjs';

console.log(Eth);

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
web3.eth.getAccounts().then(console.log);

const abi = [{
    "constant": true,
    "inputs": [{"name": "_interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_tokenId", "type": "uint256"}],
    "name": "getApproved",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_to", "type": "address"}, {"name": "_tokenId", "type": "uint256"}],
    "name": "approve",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "newPrice", "type": "uint256"}],
    "name": "setCurrentPrice",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "InterfaceId_ERC165",
    "outputs": [{"name": "", "type": "bytes4"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
        "name": "_tokenId",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}, {"name": "_index", "type": "uint256"}],
    "name": "tokenOfOwnerByIndex",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
        "name": "_tokenId",
        "type": "uint256"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_tokenId", "type": "uint256"}],
    "name": "exists",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_index", "type": "uint256"}],
    "name": "tokenByIndex",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_type", "type": "uint256"}, {"name": "_title", "type": "string"}, {
        "name": "_description",
        "type": "string"
    }],
    "name": "buyToken",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_tokenId", "type": "uint256"}],
    "name": "ownerOf",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_tokenId", "type": "uint256"}],
    "name": "viewToken",
    "outputs": [{"name": "tokenType_", "type": "uint256"}, {
        "name": "tokenTitle_",
        "type": "string"
    }, {"name": "tokenDescription_", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "myTokens",
    "outputs": [{"name": "", "type": "uint256[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_to", "type": "address"}, {"name": "_approved", "type": "bool"}],
    "name": "setApprovalForAll",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
        "name": "_tokenId",
        "type": "uint256"
    }, {"name": "_data", "type": "bytes"}],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_tokenId", "type": "uint256"}],
    "name": "tokenURI",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}, {"name": "_operator", "type": "address"}],
    "name": "isApprovedForAll",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getCurrentPrice",
    "outputs": [{"name": "price", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "buyer", "type": "address"}, {
        "indexed": false,
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "BoughtToken",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "previousOwner", "type": "address"}],
    "name": "OwnershipRenounced",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "previousOwner", "type": "address"}, {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {
        "indexed": true,
        "name": "_to",
        "type": "address"
    }, {"indexed": true, "name": "_tokenId", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "_owner", "type": "address"}, {
        "indexed": true,
        "name": "_approved",
        "type": "address"
    }, {"indexed": true, "name": "_tokenId", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "_owner", "type": "address"}, {
        "indexed": true,
        "name": "_operator",
        "type": "address"
    }, {"indexed": false, "name": "_approved", "type": "bool"}],
    "name": "ApprovalForAll",
    "type": "event"
}]
const contract_address = '0x862Adb061A28dF5b314Bd7753E5caCa27De94509'
const etherValue = web3.utils.toWei("10", 'ether');
console.log(etherValue);
let token;


class Main extends Component {

    constructor() {
        super();
        this.startApp(web3);

    }

    startApp = (web3) => {
        const eth = new Eth(web3.currentProvider)
        token = eth.contract(abi).at(contract_address);
        this.listenForClicks(token, web3)
    }

    listenForClicks = (token, web3) => {
        web3.eth.getAccounts(function (err, accounts) {
            console.log(accounts);
            let address = accounts.toString();
        })

        // button.addEventListener('click', function () {
        //     token.buyToken(documentType, documentTitle, documentDescription, {from: address})
        //         .then(function (txHash) {
        //             console.log('Transaction sent')
        //             console.dir(txHash)
        //             console.log('Title', documentTitle)
        //             console.log('Description', documentDescription)
        //             alert('Transaction ' + txHash + ' sent succesfully!');
        //         })
        //         .catch(console.error)
        // })
    }

    render() {
        return (
            <div id="main">
                <Button type="dashed">Create token</Button>
                <ItemHistory/>
            </div>
        );
    }

    btnHandler = () => {
        token.buyToken("typeZero", "titleZero", "document00", {from: address})
            .then(function (txHash) {
                console.log('Transaction sent')
                console.dir(txHash)
                console.log('Title', documentTitle)
                console.log('Description', documentDescription)
                alert('Transaction ' + txHash + ' sent succesfully!');
            })
            .catch(console.error)
    }

    startApp = (web3) => {
        const eth = new Eth(web3.currentProvider);
        const token = eth.contract(abi).at(contract_address);
    }
}

export default Main;