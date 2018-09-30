import React, {Component} from 'react'
import './header.styl'

class TopHeader extends Component{
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div className={"top-header"}>
                <div className={"left-content"}>{this.props.left || "blog"}</div>
                <div className={"right-content"}>
                    <ul>
                        {this.props.headers.length ? this.props.headers.map((val, index) => {
                            return <li key={index}>{val.name}</li>
                        }) : ""}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopHeader