<template>
  <div class="hello">
  登录页
  <ul>
    {{arrList}}
    <li v-for="(val,index) in arrList" :key="index">
      <h5>{{val.productName}}</h5>
      <p>{{val.price}}</p>
    </li>
  </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  computed: {
    ...mapState({
      arrList: state => state.collection.collects
    })
    // ...mapGetter('collects', {
    //   arrList: 'renderCollects'
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
