/*
应用的根组件
 */
import React, {Component} from 'react';
// import { Button, message} from 'antd';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
// import history from './history/History'

export default class App extends Component {

    // handleClick = () =>{
    //     message.success("handleclick success!")
    // }

    render() {
        // return <Button type="primary" onClick={this.handleClick}>Primary Button</Button>;
        return (
            <BrowserRouter>
                <Switch> {/*只匹配其中一个*/}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }

}