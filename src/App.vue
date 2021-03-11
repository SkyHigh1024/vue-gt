<template>
  <div id="app">
    <router-view/>
    <FooterBar v-if="isShow"></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@/components/common/FooterBar'
export default {
  name: 'App',
  components: {
    FooterBar
  },
  data () {
    return {}
  },
  computed: {

  },
  watch: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
