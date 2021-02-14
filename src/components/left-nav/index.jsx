import React, {Component} from 'react'
import './index.less'
import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig'
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'antd';

/*
left navigation
 */
const {SubMenu} = Menu;

class LeftNav extends Component {

    /*
    根据menu的数据数组生成对应的标签数组
    */
    getMenuNodes_map = (menuList) => {

        const path = this.props.location.pathname

        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            {/*<Icon type={item.icon}/>*/}
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {

                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem) {
                    this.openKey = item.key
                }

                return (
                    <SubMenu
                        key={item.key}
                        icon={item.icon}
                        title={
                            <span>
                                 {/*<Icon type={item.icon}/>*/}
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes_map(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    /*
根据menu的数据数组生成对应的标签数组
使用reduce() + 递归调用
*/

    /*getMenuNodes = (menuList) => {
        // 得到当前请求的路由路径
        const path = this.props.location.pathname

        return menuList.reduce((pre, item) => {

            // 如果当前用户有item对应的权限, 才需要显示对应的菜单项
            if (this.hasAuth(item)) {
                // 向pre添加<Menu.Item>
                if(!item.children) {
                    pre.push((
                        <Menu.Item key={item.key}>
                            <Link to={item.key}>
                                <Icon type={item.icon}/>
                                <span>{item.title}</span>
                            </Link>
                        </Menu.Item>
                    ))
                } else {

                    // 查找一个与当前请求路径匹配的子Item
                    const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
                    // 如果存在, 说明当前item的子列表需要打开
                    if (cItem) {
                        this.openKey = item.key
                    }


                    // 向pre添加<SubMenu>
                    pre.push((
                        <SubMenu
                            key={item.key}
                            title={
                                <span>
              <Icon type={item.icon}/>
              <span>{item.title}</span>
            </span>
                            }
                        >
                            {this.getMenuNodes(item.children)}
                        </SubMenu>
                    ))
                }
            }

            return pre
        }, [])
    }*/

    //第一次render钱执行一次，为第一个render准备数据（必须同步的）
    componentWillMount() {
        this.menuNodes = this.getMenuNodes_map(menuList)
    }

    render() {

        // const menuNodes = this.getMenuNodes_map(menuList)
        const path = this.props.location.pathname
        console.log('render()', path)

        const openKey = this.openKey

        return (

            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>Backstage Management</h1>
                </Link>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {/*<Menu.Item key="/home" >
                        <Link to='/home'>
                            {<PieChartOutlined/>}
                            <span>Home</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu key="sub1" icon={<MailOutlined/>}
                             title="All Products">
                        <Menu.Item key="/category">
                            <Link to='/category'>
                                {<MailOutlined/>}
                                <span>Category</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/product" >
                            <Link to='/product'>
                                {<MailOutlined/>}
                                <span>Department</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="/user" >
                        <Link to='/user'>
                            {<PieChartOutlined/>}
                            <span>User</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="/role" >
                        <Link to='/role'>
                            {<PieChartOutlined/>}
                            <span>Role</span>
                        </Link>
                    </Menu.Item>*/}
                    {
                        this.menuNodes
                    }


                </Menu>
            </div>
        )
    }
}

/*
withRouter高阶组件
包装非路由组件，返回一个新的组件
新的组件向非路由组件传递3个属性：history。Location ， match
 */

export default withRouter(LeftNav)