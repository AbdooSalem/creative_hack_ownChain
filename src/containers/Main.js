import {Button, Timeline} from 'antd';
import {Component} from "react";
import React from "react";
import "./Main.css";

let content="\n" +
    "<html>\n" +
    "    <head>\n" +
    "        <meta charset=\"utf-8\">\n" +
    "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "        <meta name=\"format-detection\" content=\"telephone=no\">\n" +
    "        <script src=\"/cdn-cgi/apps/head/M2jbC5w-2kzKWSY9kfVDccG4Ox8.js\"></script>\n" +
    "        <script type=\"text/javascript\" src=\"/assets/plugins/jquery/jquery.min.js\"></script>\n" +
    "        <link rel='stylesheet' type='text/css' href='//fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=cyrillic,latin'>\n" +
    "        <link rel=\"stylesheet\" href=\"/assets/plugins/bootstrap/css/bootstrap.min.css\">\n" +
    "        <link rel=\"stylesheet\" href=\"/assets/plugins/font-awesome/css/font-awesome.min.css\">\n" +
    "        <link rel=\"stylesheet\" href=\"/assets/css/style-mod.css\">\n" +
    "        <link rel=\"stylesheet\" href=\"/assets/custom-head-foot-scroll-blue.css\">\n" +
    "        <style>\n" +
    "        html * {\n" +
    "            font-size: 13px !important;\n" +
    "        }\n" +
    "        .label {\n" +
    "            font-size:11px !important;\n" +
    "        }\n" +
    "        div.tooltip-inner {\n" +
    "            max-width: 300px !important;  \n" +
    "            font-size: 11px !important;\n" +
    "            white-space: pre-wrap; /* CSS3 */\n" +
    "            white-space: -moz-pre-wrap; /* Firefox */\n" +
    "            white-space: -o-pre-wrap; /* Opera 7 */\n" +
    "            word-wrap: break-word; /* IE */\n" +
    "        }\n" +
    "        div.tooltip.in{opacity:1;filter:alpha(opacity=100)}\n" +
    "    </style>\n" +
    "        <script>window.parent.document.getElementById('overlayMain').style.display = \"block\";</script>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "        <style>\n" +
    "        #overlay {\n" +
    "            /*background: #ffffff;*/\n" +
    "            background: rgba(255,255,255,.7);\n" +
    "            color: #666666;\n" +
    "            position: fixed;\n" +
    "            height: 100%;\n" +
    "            width: 100%;\n" +
    "            z-index: 5000;\n" +
    "            top: 0;\n" +
    "            left: 0;\n" +
    "            float: left;\n" +
    "            text-align: center;\n" +
    "            padding-top: 10%;\n" +
    "            display:none;\n" +
    "        }\n" +
    "    </style>\n" +
    "        <div id=\"overlay\">\n" +
    "            <img src=\"/images/ajax-loader2.gif\" alt=\"Loading\" style=\"margin-bottom:20px\">\n" +
    "            <br />\n" +
    "... loading, please wait ...\n" +
    "        </div>\n" +
    "        <div class=\"table-responsive\" style=\"border-color:white\">\n" +
    "            <div id=\"PagingPanel\" class=\"pull-right\" style=\"margin-bottom:20px\">\n" +
    "                <span style=\"white-space: nowrap; display: inline-block\">\n" +
    "                    <a Class=\"btn btn-primary btn-xs \" disabled=\"disabled \" href=\"#\">First</a>\n" +
    "                    <a Class=\"btn btn-primary btn-xs\" disabled=\"disabled \" href=\"#\">Prev</a>\n" +
    "                    <span style=\"padding: 2px 4px 4px 3px; border: 1px solid #D4D4D4; line-height: 30px; background-color: #EAEAEA; margin-top: 2px; height: 2px;\">Page \n" +
    "                        <b>1</b> of\n" +
    "                        <b>1</b>\n" +
    "                    </span>\n" +
    "                    <a Class=\"btn btn-default btn-xs disabled\" disabled=\"disabled \" href=\"#\">Next</a>\n" +
    "                    <a Class=\"btn btn-default btn-xs disabled\" disabled=\"disabled \" href=\"#\"> Last</a>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <span Class='hidden-xs'>&nbsp;\n" +
    "                <i Class='fa fa-sort-amount-desc' rel='tooltip' data-placement='bottom' title='Oldest First'></i>&nbsp;A Total Of 2 Txns found\n" +
    "            </span>\n" +
    "            <div id=\"maindiv\">\n" +
    "                <table class=\"table\">\n" +
    "                    <tr>\n" +
    "                        <th>TxHash</th>\n" +
    "                        <th>Age</th>\n" +
    "                        <th>From</th>\n" +
    "                        <th></th>\n" +
    "                        <th>To</th>\n" +
    "                        <th>\n" +
    "Token_id\n" +
    "</th>\n" +
    "                        <th></th>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>\n" +
    "                            <span class='address-tag'>\n" +
    "                                <a href='/tx/0x74879e55c5c4a23b0f6c872cb14f4f60e62cab8cdf0d44b9bbf00dc6068ae539' target='_parent'>0x74879e55c5c4a23b0f6c872cb14f4f60e62cab8cdf0d44b9bbf00dc6068ae539</a>\n" +
    "                            </span>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            <span rel='tooltip' data-placement='right' title='Nov-10-2018 03:44:53 PM' style='white-space:nowrap'>2 hrs 18 mins ago</span>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            <span class='address-tag'>\n" +
    "                                <a href='0x871d8379127c367e79f7893cb51e9695733957fd?a=0xc7c2f5a4b74b5ac64af2d1987f724f0fe67dd460' target='_parent'>0xc7c2f5a4b74b5ac64af2d1987f724f0fe67dd460</a>\n" +
    "                            </span>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            <img src='/images/green-arrow-right.png' style='margin-top:-5px; margin-bottom:-5px'>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            <span class='address-tag'>\n" +
    "                                <a href='0x871d8379127c367e79f7893cb51e9695733957fd?a=0xb9f31c423473a1ba4ba1d326a439902a4f8b02f7' target='_parent'>0xb9f31c423473a1ba4ba1d326a439902a4f8b02f7</a>\n" +
    "                            </span>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            <a href='/token/0x871d8379127c367e79f7893cb51e9695733957fd?a=1' target='_parent'>1\n" +
    "                            </td>\n" +
    "                            <td></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                <span class='address-tag'>\n" +
    "                                    <a href='/tx/0xad59679c840dd451df8d743a95ea3477cf48424f3d93c32426191d130da8bc33' target='_parent'>0xad59679c840dd451df8d743a95ea3477cf48424f3d93c32426191d130da8bc33</a>\n" +
    "                                </span>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <span rel='tooltip' data-placement='right' title='Nov-10-2018 03:40:22 PM' style='white-space:nowrap'>2 hrs 23 mins ago</span>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <span class='address-tag'>\n" +
    "                                    <a href='0x871d8379127c367e79f7893cb51e9695733957fd?a=0x0000000000000000000000000000000000000000' target='_parent'>0x0000000000000000000000000000000000000000</a>\n" +
    "                                </span>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <img src='/images/green-arrow-right.png' style='margin-top:-5px; margin-bottom:-5px'>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <span class='address-tag'>\n" +
    "                                    <a href='0x871d8379127c367e79f7893cb51e9695733957fd?a=0xc7c2f5a4b74b5ac64af2d1987f724f0fe67dd460' target='_parent'>0xc7c2f5a4b74b5ac64af2d1987f724f0fe67dd460</a>\n" +
    "                                </span>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <a href='/token/0x871d8379127c367e79f7893cb51e9695733957fd?a=1' target='_parent'>1\n" +
    "                                </td>\n" +
    "                                <td></td>\n" +
    "                            </tr>\n" +
    "                        </table>\n" +
    "                        <div id=\"Div1\" class=\"pull-right\" style=\"margin-bottom:20px\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <script type=\"text/javascript\" src=\"/assets/plugins/bootstrap/js/bootstrap.min.js\"></script>\n" +
    "            </body>\n" +
    "            <script>    \n" +
    "    jQuery(window).load(function () {\n" +
    "        jQuery('#overlay').fadeOut();                  \n" +
    "        window.parent.document.getElementById('loadingtxframe').style.display = \"none\";\n" +
    "    });\n" +
    "    $(document).ready(function () {\n" +
    "        $('.btn-xs').click(function () {\n" +
    "            window.parent.document.getElementById('overlayMain').style.display = 'block';\n" +
    "        });\n" +
    "    });\n" +
    "    var totaltxns = '2';\n" +
    "    if (totaltxns != null) {\n" +
    "        try {\n" +
    "            window.parent.document.getElementById('totaltxns').innerText = totaltxns; \n" +
    "        }\n" +
    "        catch (err) {}        \n" +
    "    }    \n" +
    "    $(function () {\n" +
    "        $(\"[rel='tooltip']\").tooltip({ html: true });\n" +
    "    });\n" +
    "    function move(strlink) {\n" +
    "        jQuery('#overlay').show();     \n" +
    "        jQuery('#overlay').fadeIn();     \n" +
    "        window.location = \"/token/\" + strlink;\n" +
    "    }  \n" +
    "    setTimeout(function () {\n" +
    "        window.parent.token_transactions_loaded = true;\n" +
    "        var obj = window.parent.document.getElementById('tokentxnsiframe');\n" +
    "        parent.resizeIframe(obj, 0);\n" +
    "        window.parent.isFrameLoading = false;\n" +
    "        window.parent.document.getElementById('overlayMain').style.display = 'none';\n" +
    "    }, 150);  \n" +
    "    //var d = new Date();    \n" +
    "    //console.log(d + \" - Loaded tokentxns..\");    \n" +
    "</script>\n" +
    "        </html>";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        let vars = [];
        let i = 0;
        let v;
        let content = "";

        fetch('https://ropsten.etherscan.io/token/generic-tokentxns2?contractAddress=0x871d8379127c367e79f7893cb51e9695733957fd&a=1')
            .then(function(res) {
                content = res;
                console.log(res);
                return res.json();
            })
            .then(function(res) {
                console.log(res);
                console.log("dfwetnbsfvdsa");
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

                    obj = {...obj, from: v, fromName: this.mapToName(v)};

                    content = content.substr(content.indexOf("_parent")+9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    obj = {...obj, to: v, toName: this.mapToName(v)};

                    content = content.substr(content.indexOf("_parent")+9, content.length);
                    v = content.substr(0, content.indexOf("<"));
                    console.log(v);

                    obj = {...obj, id: v};

                    vars.push(obj);

                    i++
                }


                console.log(vars);
                this.setState({data: [...vars]});
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
            <div id="main">
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


export default Main;