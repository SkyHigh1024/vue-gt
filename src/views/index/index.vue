<template>

  <div  id="home">
    <div id="head">
      <el-row>
        <el-col :span="24">
          <img src="src/assets/img/banner.png" alt="" width="100%">
        </el-col>
      </el-row>
    </div>

    <div id="main">
      <el-row>
        <el-col :span="6">
          <left />
        </el-col>
        <el-col :span="12">
          <div id="centre">
            <div id="robot">
              <!--              //小精灵-->
            </div>
            <div id="cycle">
              <div class="title">
                <div></div>
                <img  alt="">
                <span class="title-4 title-span">{{title4}}</span>
              </div>
              <div id="cycle_echarts">
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>

import Left from "@/components/home/left.vue"

export default {
  components: {Left},
  data () {
    return {
    }
  },

  computed: {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
}

</style>
