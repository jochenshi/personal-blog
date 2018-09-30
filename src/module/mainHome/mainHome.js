import React, {Component} from "react";
import axios from 'axios';
import {Spin} from 'antd';

import "./mainHome.styl";

import TopHeader from "../header/header"
import BriefCard from "../briefCard/briefCard"
import PersonalCard from '../personalCard/index'
import HotTag from '../hotTag/index'
import PaperCard from '../paperCard/index'

class MainHome extends Component{
    constructor(props) {
        super(props);
        this.headers = [
            {name: "Home", url: ""},
            {name: "About", url: ""}
        ];
        this.papers = [1,2,3,4,5,6,7,8];
        this.state = {
            'paperList': [],
            'pageNum': 1,
            'pageSize': 20,
            'listLoading': true
        };
    }

    componentDidMount() {
        this.handleGetFirstList();
    }

    /*
    *  获取首页的文章的列表
    * */
    handleGetFirstList() {
        let {pageNum, pageSize} = this.state;
        axios({
            'method': 'GET',
            'url': '/api/v1/papers/',
            'params': {
                'pageNum': pageNum,
                'pageSize': pageSize
            }
        })
            .then(response => {
            console.log(response);
            const {data = []} = response || {};
            if(data.length) {
                setTimeout(() => {
                    this.setState({
                        'paperList': data,
                        'pageNum': ++pageNum,
                        'listLoading': false
                    });
                }, 3000)
            }
        })
            .catch(err => {
                this.setState({
                    'listLoading': false
                });
            })
    }

    /*
    *  点击卡片跳转到详细页面的操作
    * */
    handleCardDetail = (e) => {
        console.log('this', this.props);
        window.open(`${this.props.match.path}/asd`);
    };

    render() {
        const {paperList = [], listLoading} = this.state;
        return (
            <div className={"main-home"}>
                <TopHeader headers={this.headers} left={"Jochen"}/>
                <div className={"main-content"}>
                    <div className={"main-left"}>
                        <div className={"left-top"}></div>
                        <div className={"left-content"}>
                            <h1 className={"title"}>最新文章</h1>
                            <div className={"paper-content"}>
                                {
                                    listLoading ?
                                        <Spin size={'large'} tip={'加载中...'}>
                                            <div className={'loading-text'}>加载中</div>
                                        </Spin> :
                                    paperList.length ?
                                        paperList.map((val, index) => {
                                            return <PaperCard onClick={this.handleCardDetail} key={"paper" + index} data={val}/>
                                        }):
                                        <div className={'no-data-tip'}>暂无最新文章</div>
                                }
                                {
                                    listLoading ? '' : <div className={'click-more'}>点击加载更多</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"main-right"}>
                        <PersonalCard/>
                        <HotTag/>
                    </div>
                </div>
                <div className={"bottom-area"}>
                    All rights reserved by jochen.shi@qq.com
                </div>
            </div>
        )
    }
}

export default MainHome