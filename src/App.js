import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';
import {message} from 'antd';

import './App.styl'

import MainHome from './module/mainHome/mainHome'
//import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types';
import DetailPage from "./module/detailPage";


const initAxios = () => {
    axios.interceptors.response.use((response) => {
        return response.data;
    }, (error) => {
        console.log(error);
        if(error.response.status === 404){
            message.error('请求不存在');
        }else if(error.response.data.message){
            message.error(error.response.data.message);
        }
        return Promise.reject(error.response.data);
    })
};

/*const initAxios = () => {
    axios.interceptors.response.use(function (response) {  
        console.log(JSON.stringify(response));
        if(response.config.method!=='get'){
            message.success(response.data.msg);
        }
        return response.data;  
    }, function (error) {  
        // Do something with response error
        console.log('get error',error);
        //error.response.data['error'] && message.error(error.response.data['error']);
        // token 已过期，重定向到登录页面
        if (error.response.data.code === 10007){
            message.error(error.response.data['error']);
            setTimeout(() => {
                window.location.href = '/login';
            }, 500)
        } else if ((error.message === 'Request failed with status code 404')) {
            message.error('服务连接中断，请稍后重试')
        } else if (error.response.data['error']) {
            message.error(error.response.data['error']);
        } else {
            message.error('系统连接出错')
        }
        return Promise.reject(error.response.data)  
    }) 
};

const mapState = (state) => {
    return {
        loginState: state.userLoginState.isLogin,
        authority: state.authArray.authority
    }
};*/

class App extends Component {
    constructor (props) {
        super(props);
        initAxios();
    }
    render() {
        console.log('app props', this.props);
        console.log(this.context);
        return (
            <Router>
                <Switch>
                    <Route path={"/main"} component={MainHome}/>
                    <Route path={"/paper"} component={DetailPage} />
                    <Redirect to='/main'/>
                    {/*<Route path='/auth/main' component={MainHome}/>
                    <Route path="/login" component={Login} />
                    <Redirect to='/auth/main'/>*/}
                </Switch>
            </Router>
        )
    }
}

export default App