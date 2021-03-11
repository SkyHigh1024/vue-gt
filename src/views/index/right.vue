<template>
  <div id="right">
    <div id="relevance" class="module">
      <div class="title">
        <img :src="titleIMG" alt="">
        <span class="title-span title-5">{{ title5 }}</span>
      </div>

      <div id="relevance_echarts">
      </div>
    </div>
    <div id="ecological" class="module">
      <img :src="titleIMG" alt="">
      <span class="title-span title-6">{{ title6 }}</span>
      <div id="ecological_echarts"></div>

    </div>
    <div id="distribution" class="module">
      <img :src="titleIMG" alt="">
      <span class="title-span title-7">{{ title7 }}</span>
      <div id="distribution_echarts"></div>
    </div>

  </div>
</template>

<script>
import titleimg from "../../../static/img/bt_bg.png";
import $ from "_jquery@3.6.0@jquery";

const echarts = require('echarts');

export default {
  name: "right",
  data() {
    return {
      titleIMG: titleimg,
      title5: "关联分析业务",
      title6: "非生态业务",
      title7: "分布业务",
      ecological_data: {
        "trafficWay": [{
          name: '火车',
          value: 20
        }, {
          name: '飞机',
          value: 10
        }, {name: '客车', value: 30}, {
          name: '轮渡',
          value: 40
        }],
        "legend": ['火车', '飞机', '客车', '轮渡']

      },
    }

  },
  methods: {
    relevance_Charts() {
      let myChart = echarts.init(document.getElementById('relevance_echarts'));
      var option = ''
      myChart.setOption(option);
      $(window).on('resize', function () {
        myChart.resize();
      });
    },
    ecological_Charts(data) {
      let myChart = echarts.init(document.getElementById('ecological_echarts'));
      var trafficWay = data["trafficWay"]
      var _data = []
      var color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
      for (var i = 0; i < trafficWay.length; i++) {
        _data.push({
          value: trafficWay[i].value,
          name: trafficWay[i].name,
          itemStyle: {
            normal: {
              borderWidth: 5,
              shadowBlur: 20,
              borderColor: color[i],
              shadowColor: color[i]
            }
          }
        }, {
          value: 2,
          name: '',
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              color: 'rgba(0, 0, 0, 0)',
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 0
            }
          }
        });
      }
      var seriesOption = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [105, 109],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'outside',
              color: '#ddd',
              formatter: function (params) {
                var percent = 0;
                var total = 0;
                for (var i = 0; i < trafficWay.length; i++) {
                  total += trafficWay[i].value;
                }
                percent = ((params.value / total) * 100).toFixed(0);
                if (params.name !== '') {
                  return params.name + '\n' + '\n' + percent + '%';
                } else {
                  return '';
                }
              },
            },
            labelLine: {
              length: 20,
              show: false,
              color: '#00ffff'
            }
          }
        },
        data: _data
      }];
      var option = {
        color: color,
        title: {
          top: '48%',
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400'
          }
        },
        graphic: {
          elements: [{
            type: "image",
            z: 3,
            style: {
              width: 178,
              height: 178
            },
            left: 'center',
            top: 'center',
            position: [100, 100]
          }]
        },
        tooltip: {
          show: false
        },
        legend: {
          orient: "horizontal",
          textStyle: {
            fontSize: 14,
            color: '#FFFFFF',
          },
          y: 'right',    //延Y轴居中
          x: 'right',//居右显示
          data: data["legend"],
        },
        toolbox: {
          show: false
        },
        series: seriesOption
      }


      myChart.setOption(option);
      $(window).on('resize', function () {
        myChart.resize();
      });
    },
    distribution_Charts() {
      let myChart = echarts.init(document.getElementById('distribution_echarts'));
      var option = ''
      myChart.setOption(option);
      $(window).on('resize', function () {
        myChart.resize();
      });
    },
  },
  mounted() {
    this.ecological_Charts(this.ecological_data);
  }
}

</script>

<style scoped>
.title-span {

  position: absolute;
  font-size: 18px;
  color: #FFFFFF;
}

.title-5 {
  right: 355px;
  top: 8px;
}

.title-6 {
  right: 372px;
  top: 280px;
}

.title-7 {
  right: 390px;
  top: 555px;
}

#relevance_echarts, #ecological_echarts, #distribution_echarts {
  height: 230px;
}

</style>