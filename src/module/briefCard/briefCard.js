import React, {Component} from 'react'

class BriefCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"brief-card"}>
                <h1 className={"card-title"}>title</h1>
                <div className={"card-info"}>message</div>
            </div>
        )
    }
}

export default BriefCard