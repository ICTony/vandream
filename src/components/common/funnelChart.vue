<template>
  <div class="funnel-chart">
    <div :id="chartId" class="chart-style"></div>
    <div class="data-container">
      <div v-for="(item,index) in data" :key='index' class="data-container-item">
        <div class="border-line" :class="{'line-first':index==0,'line-last':index==data.length-1}"></div>
        <div class="chart-data">{{item.value}}</div>
        <div class="chart-percent">{{item.percentage}}%</div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "funnelChart",
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    color:{
      type:Array,
      default:function(){
        return []
      }
    },
    chartId:{
      default:String
    }
  },
  created() {},
  mounted() {
    var myChart = echarts.init(document.getElementById(this.chartId));
    var option = {
      title: {
        // text: "漏斗图(对比)",
        // subtext: "纯属虚构",
        // left: "left",
        // top: "bottom"
      },
      // tooltip: {
      //   trigger: "item",
      //   formatter: "{a} <br/>{b} : {c}%"
      // },
      // toolbox: {
      //     show: true,
      //     orient: "vertical",
      //     top: "center",
      //     feature: {
      //         dataView: { readOnly: true },
      //         restore: {},
      //         saveAsImage: {}
      //     }
      // },
      // legend: {
      //     // orient: "vertical",
      //     // left: "left",
      //     // data: ["产品A", "产品B", "产品C", "产品D", "产品E"]
      // },
      // calculable: true,
      series: [
        {
          name: "供方",
          type: "funnel",
          width: "40%",
          height: "90%",
          left: "10px",
          top: "10%",
          funnelAlign: "right",
          label: {
            show: true,
            position: "outside",
            fontSize: 10,
            color: "#333",
            fontFamily: "PingFangSC-Regular"
            // formatter:'{d}  {b} \n {c}%'
          },
          labelLine: {
            show: false,
            length: 90,
            lineStyle: {
              color: "rgba(0, 0, 0, 0.5)",
              width: 40
            }
          },
          itemStyle: {
            emphasis: {
              opacity: 0.9,
              label: {
                show: true,
                color: "#ff7120"
              }
            }
          },
          // center: ["5%", "25%"], // for pie
            data: this.data,
          // data:[
          //   { value: 60, name: "邀约客户" },
          //   { value: 30, name: "意向客户" },
          //   { value: 10, name: "转化客户" },
          //   { value: 80, name: "签约客户" },
          //   { value: 45, name: "潜在客户" }
          // ]
        }
      ],
      color: this.color
      // color: ["red", "blue", "green", "yellow",'black']
    };
    myChart.setOption(option);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.funnel-chart {
  height: 160px;
  background-color: #fff;
  position: relative;
  .chart-style {
    width: 100%;
    height: 160px;
  }
  .data-container {
    position: absolute;
    top: 10%;
    left: 48%;
  }
  .data-container {
    .data-container-item{
      position: relative;
    }
    .chart-data {
      font-family: DINPro-Bold;
      font-size: 11px;
      color: #333;
      line-height: 18px;
      font-weight: 800;
      margin-left: 10px;
    }
    .chart-percent {
      font-family: ArialMT;
      font-size: 10px;
      margin-left: 10px;
      color: #bbbbbb;
    }
    .border-line{
      border-left: 1px solid #eee;
      position: absolute;
      left: 0;
      height: 30px;
    }
    .line-first{
      height: 20px;
      top: 10px;
    }
    .line-last{
      height: 15px;
      top: -5px;
    }
    .border-line::before{
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      left: -4px;
      top: 5px;
    }
    .line-first::before{
      top: -5px;
    }
    .line-last::before{
      top: 10px;
    }
  }
}
</style>
