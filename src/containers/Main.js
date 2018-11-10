import {Button, Timeline} from 'antd';
import {Component} from "react";
import React from "react";
import "./Main.css";
import { withWeb3 } from 'react-web3-provider';
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

        const { web3 } = this.props;

        web3.eth.getAccounts(console.log);

        return (
            <div id="main">

                /* look at this: https://www.npmjs.com/package/react-web3-provider */

                Web3 version: {web3.version}
                {/*<Button type="dashed">Create token</Button>*/}
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

            </div>
        );
    }

}

export default withWeb3(Main);