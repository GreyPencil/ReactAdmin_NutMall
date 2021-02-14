import React, {Component} from "react";
import {Modal} from 'antd';
import {withRouter} from "react-router-dom";

import './index.less';
import {formateDate} from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import {reqWeather} from "../../api";
import menuList from "../../config/menuConfig";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import LinkButton from "../link-button";


/*
head navigation
 */
class Header extends Component {

    state = {
        currentTime: formateDate(Date.now()),
        weather: '',
        temperature: '',
    }

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        }, 1000)
    }

    getWeather = async () => {
        //调用接口请求函数 异步获取数据
        const {weather, temperature} = await reqWeather('110101')
        this.setState({weather, temperature})
    }

    getTitle = () => {
        // 得到当前请求路径
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key === path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
                title = item.title
            } else if (item.children) {
                // 在所有子item中查找匹配的
                const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
                // 如果有值才说明有匹配的
                if (cItem) {
                    // 取出它的title
                    title = cItem.title
                }
            }
        })
        return title
    }

    logout = () => {
        //confirm model
        Modal.confirm({
            title: 'Do you want to sign out?',
            icon: <ExclamationCircleOutlined/>,
            onOk: () => {
                console.log('Yes', this);
                //this不是组件对象，所以需要箭头函数，修改onOk
                //删除保存的user数据
                storageUtils.deleteUser()
                memoryUtils.user = {}
                this.props.history.replace('/login')
            },
            onCancel() {
                console.log('No');
            },
        })
    }

    //异步操作启动时间
    //第一次render()之后执行一次， 一般在此执行异步操作：发ajax请求/启动定时器
    componentDidMount() {
        //获取当前时间
        this.getTime()
        this.getWeather()
    }

    /*
    当前组件卸载之前调用
    */
    componentWillUnmount() {
        //清除定时器
        clearInterval(this.intervalId)
    }

    render() {

        const {currentTime, weather, temperature} = this.state

        const username = memoryUtils.user.username

        const title = this.getTitle()


        return (
            <div className="header">
                <div className="header-top">
                    <span>Welcome, {username}</span>
                    <LinkButton onClick={this.logout}>Sign out</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        {title}
                    </div>
                    <div className="header-bottom-right">
                        <span>  {currentTime}  </span>
                        <span>  {weather}  </span>
                        {/*<img src="" alt="weather"/>*/}
                        <span>  {temperature}℃</span>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)