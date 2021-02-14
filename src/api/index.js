/*
要求：能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise
* */
import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from "antd";

// const BASE = 'http://localhost:5000'
const BASE = ''

//login api
/*
export function reqLogin(username, password){
    return ajax('/login', {username, password}, 'POST')
}*/

export const reqLogin = (username, password) => ajax(BASE+'/login', {username, password}, 'POST');
export const reqAddUser = (user) => ajax(BASE+'/manage/user/add', user, 'POST');

/*
json请求的接口请求参数
* */
export const reqWeather = (city) => {

    return new Promise((resolve,reject) => {
    //注意这里的url后面不是单引号，是间隔号
    const url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=2bd7a5b01b29656810d1aec1179f81dd`
    jsonp(url, {}, (err, data) =>{
        // console.log(url)
        console.log('jsonp()', err, data)
        if(!err && data.status === '1'){
            const {temperature, weather} = data.lives[0]
            resolve({temperature, weather})
        }else{
            message.error('Failed to get weather info')
        }
    })

    })

}
// reqWeather('110101')
