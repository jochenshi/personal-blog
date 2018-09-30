import React, {Component} from 'react'

import './index.styl'

class HotTag extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"tag-card"}>
                <h1>标签</h1>
            </div>
        )
    }
}

export default HotTag