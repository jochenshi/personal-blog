import  React, {Component} from 'react'

import './index.styl'

class PaperCard extends Component{
    constructor(props) {
        super(props);
    }

    handlePropClick = () => {
        const {onClick} = this.props;
        if(typeof onClick !== "function") {
            console.log('onClick prop is not exist');
        } else {
            onClick();
        }
    };

    render() {
        const {title, content} = this.props.data;
        return (
            <div
                className={"paper-card"}
                onClick={this.handlePropClick}
            >
                <h1 className={"paper-title"}>{title}</h1>
                <div className={"paper-content"}>{content || '暂无描述'}</div>
                <div className={"paper-time"}>Post on 2018.06.05 22:13</div>
            </div>
        )
    }
}

export default PaperCard