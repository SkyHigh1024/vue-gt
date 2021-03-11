const state = {
  collects: [] // 初始化一个collects数组
}
const getters = {
  // 承载变化的collects
  renderCollects (state) {
    return state.collects
  }
}
const mutations = {
  // 如何变化collects,插入items
  pushCollects (state, items) {
    state.collects.push(items)
  }
}
const actions = {
  // 触发mutaions里面的pushCollects,传入item,到对应的items
  invokePushItems (context, item) {
    context.commit('pushCollects', item)
  }
}
export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
