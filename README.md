#antd v4 login form

```
import React, {Component, useState, useEffect} from 'react'
import './login.less'
import logo from '../../assets/images/logo.png'
import {Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {reqLogin, reqAddUser} from '../../api'
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import {Redirect} from 'react-router-dom'

/*
登录的路由组件
 */

const onFinishFailed = (error) => {
    alert('Failed:', error);
};

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    onFinish = async (values) => {
        //进行表单验证，打印语句模仿表单验证
        console.log('Received values of form: ', values);

        //提交请求之后需要调用的函数
        const {username, password} = values
        const result = await reqLogin(username, password) // {status: 0, data: user}  {status: 1, msg: 'xxx'}
        // console.log('请求成功', result)

        if (result.status === 0) { // 登陆成功
            // 提示登陆成功
            message.success('Sign in succeed')

            // 保存user
            const user = result.data
            memoryUtils.user = user // 保存在内存中
            storageUtils.saveUser(user) // 保存到local中

            // 跳转到管理界面 (不需要再回退回到登陆)
            // const history = createBrowserHistory();

            this.props.history.replace('/')

        } else { // 登陆失败
            // 提示错误信息
            message.error(result.message)
        }
    };

    render() {

        const user = memoryUtils.user
        if(user && user._id){
            return <Redirect to='/'/>
        }

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>Backstage Management System</h1>
                </header>
                <section className="login-content">
                    <h2>Member login</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={onFinishFailed}
                        // form={form}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            /*set initial username*/
                            initialValue={'admin'}
                            rules={[
                                {
                                    required: true,
                                    whitespace: true,
                                    message: 'Please input your Username!',
                                },
                                {
                                    min: 4,
                                    message: 'Username must be between 4 and 15 characters!',
                                },
                                {
                                    max: 15,
                                    message: 'Username must be between 4 and 15 characters!',
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message: 'Username must contain only letters numbers and underscores',
                                },

                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                {
                                    min: 4,
                                    message: 'Password must be between 4 and 15 characters!',
                                },
                                {
                                    max: 15,
                                    message: 'Password must be between 4 and 15 characters!',
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message: 'Password must contain only letters numbers and underscores',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />

                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            {/*Or <a href="">register now!</a>*/}
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

export default Login;
————————————————
版权声明：本文为CSDN博主「GreyPencil」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/GreyPencil/article/details/113800464
```

# redux
![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

