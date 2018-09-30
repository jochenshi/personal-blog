import React, {Component} from 'react'

import './index.styl'

class PersonalCard extends Component{
    constructor(props) {
        super(props);
        this.contactData = [
            {title: "GitHub", url: "#", icon: "icon-github"},
            {title: "简书", url: "#", icon: "icon-jianshu"},
            {title: "Weibo", url: "#", icon: "icon-weibo"},
            {title: "Twitter", url: "#", icon: "icon-twitter"}
        ];
    }

    render() {
        return (
            <div className={"personal-info"}>
                <div className={"avatar-area"} title={"Jochen Shi"}></div>
                <div className={"self-introduce"}>
                    self introduce area
                </div>
                <div className={"self-contact"}>
                    {this.contactData.length ?
                        <ul>{
                            this.contactData.map((val, index) => {
                                return <li title={val.title} key={"name" + index} className={"iconfont " + val.icon}></li>
                            })
                        }</ul> :
                        "no data"}
                </div>
                <div className={"user-mail"}>
                    <i className={"iconfont icon-mail"}></i>
                    <span>jochen.shi@qq.com</span>
                </div>
            </div>
        )
    }
}

export default PersonalCard