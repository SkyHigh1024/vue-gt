import axios from 'axios'
import {
  Message
} from 'element-ui'
// 1.创建新的axios实例
const service = axios.create({
  // 公共接口
  baseURL: process.env.BASE_API,
  // 超时时间单位是ms
  timeout: 3 * 1000
})
// 2.请求拦截器
service.interceptors.request.use(config => {
  // 发请求前做一些处理，数据转化，配置请求头，设置token，设置loading等，根据需求添加
  config.data = JSON.stringify(config.data) // 数据转化，也可使用qs转换
  // 配置请求头
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  // 配置token
  const token = '' // 登录时获取的token
  if (token) {
    config.params = {
      'token': token
    } // 携带在参数中
    config.headers.token = token // 携带请求头中
  }
  return config
}, error => {
  Promise.reject(error)
})
// 3.响应拦截器
service.interceptors.response.use(response => {
  // 接收响应数据成功后的一些共有处理，如关闭loading等
  // "10000": "success",
  // "10001": "系统故障，请联系学部局！",
  // "10002": "参数错误",
  // "10003": "认证信息过期，请重新登陆！",
  // "10004": "数据不存在",
  // "10005": "参数不存在",
  // "10006": "参数错误",
  // "10007": "权限故障",
  // "10008": "帐号冻结",
  // "10009": "无效的操作",
  // "10010": "重复录入",
  // "20001": "需要验证码",
  // "40001": "权限无效"

  return response
}, error => {
  // 1.公共错误处理
  // 2.根据响应码具体处理
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '未授权，请重新登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        window.location.href = '/NotFound'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器端出错'
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    error.message('连接服务器失败')
  }
  Message.error(error.message)
  return Promise.resolve(error.response)
})
// 4.导入文件
export default service
