import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Modal} from 'antd'
import {connect} from "react-redux";

import LinkButton from '../link-button'
import {reqWeather} from '../../api'
import menuList from '../../config/menuConfig'
import {formateDate} from '../../utils/dateUtils'
// import memoryUtils from '../../utils/memoryUtils'
// import storageUtils from '../../utils/storageUtils'
import './index.less'
import {logout} from '../../redux/actions'

/*
左侧导航的组件
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
      if (item.key===path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
        title = item.title
      } else if (item.children) {
        // 在所有子item中查找匹配的
        const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
        // 如果有值才说明有匹配的
        if(cItem) {
          // 取出它的title
          title = cItem.title
        }
      }
    })
    return title
  }

  /*
  退出登陆
   */
  logout = () => {
    // 显示确认框
    Modal.confirm({
      content: 'Are you sure you want to sign out?',
      onOk: () => {
        console.log('OK', this)
        // // 删除保存的user数据
        // storageUtils.removeUser()
        // memoryUtils.user = {}
        // 跳转到login
        // this.props.history.replace('/login')
        this.props.logout()
      }
    })
  }

  /*
  第一次render()之后执行一次
  一般在此执行异步操作: 发ajax请求/启动定时器
   */
  componentDidMount () {
    // 获取当前的时间
    this.getTime()
    // 获取当前天气
    this.getWeather()
  }
  /*
  // 不能这么做: 不会更新显示
  componentWillMount () {
    this.title = this.getTitle()
  }*/

  /*
  当前组件卸载之前调用
   */
  componentWillUnmount () {
    // 清除定时器
    clearInterval(this.intervalId)
  }


  render() {

    const {currentTime, weather, temperature} = this.state

    const username = this.props.user.username

    // const title = this.getTitle()
const title = this.props.headTitle

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

export default connect(
    state => ({headTitle: state.headTitle, user: state.user}),
    {logout}
)(withRouter(Header))