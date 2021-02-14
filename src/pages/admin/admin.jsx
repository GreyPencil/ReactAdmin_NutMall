import React, {Component} from 'react'
import memoryUtils from "../../utils/memoryUtils";
import {Redirect, Route, Switch} from 'react-router-dom'
import {Layout} from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import './admin.less'


import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const {Footer, Sider, Content} = Layout;
/*
后台管理的路由组件
 */
export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        if (!user || !user._id) {
            //自动跳转到登录(在render中)
            return <Redirect to='/login'/>
        }
        return (
            <Layout className="layout">
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout className="layout">
                    <Header>Header</Header>
                    <Content className="content" >
                        <Switch>
                            {/*<Redirect from='/' exact to='/home'/>*/}
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/user' component={User}/>
                            <Route path='/role' component={Role}/>
                            <Route path="/charts/bar" component={Bar}/>
                            <Route path="/charts/pie" component={Pie}/>
                            <Route path="/charts/line" component={Line}/>
                            <Redirect to='/home'/>
                            {/*<Route path="/order" component={Order}/>*/}
                            {/*<Route component={NotFound}/>*/}
                        </Switch>
                    </Content>
                    <Footer className="footer">Copyright©2021 SuzeKang All Rights Reserved</Footer>
                </Layout>
            </Layout>
        )
    }
}