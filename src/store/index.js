import Vue from 'vue' // 引入vue
import Vuex from 'vuex' // 引入vuex
import footerStatus from './modules/footerStatus'
import collection from './modules/collection'
// 使用vuex
Vue.use(Vuex)
// // 要设置的全局访问的state对象
// const state = {
//   showFooter: true,
//   changableNum: 0
// }
// // 实时监听state值的变化（最新状态）
// const getters = {
//   isShow (state) {
//     return state.showFooter
//   },
//   getChangeNum () {
//     return state.changableNum
//   }
// }
// // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象)
// const mutations = {
//   show (state) {
//     state.showFooter = true
//   },
//   hide (state) {
//     state.showFooter = false
//   },
//   newNum (state, sum) {
//     state.changableNum += sum
//   }
// }
// // 自定义触发mutations里函数的方法，context与store实例具有相同方法和属性
// const actions = {
//   hideFooter (context) {
//     context.commit('hide')
//   },
//   showFooter (context) {
//     context.commit('show')
//   },
//   getNewNum (context, num) {
//     context.commit('newNum', num)
//   }
// }
// 创建Vuex实例
const store = new Vuex.Store({
  // state,
  // getters,
  // mutations,
  // actions,
  modules: {
    footerStatus,
    collection
  }
})

export default store // 导出store文件
