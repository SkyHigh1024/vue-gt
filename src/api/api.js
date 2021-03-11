import http from '../utils/http'
const hosts = '/api'
// 首页
export function fetchHomeLoad (params) {
  return http.post(`${hosts}/home/home_load`, params)
}
