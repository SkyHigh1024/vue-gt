<template>
  <div class="hello">
    页脚部分
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background:red;
  width:100%;
  position:fixed;
  bottom:0;
}
</style>
