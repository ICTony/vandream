<template>
  <div class="chart-container">
    <title-component :color="titleOption.color" :name="titleOption.title" :date="titleOption.date"></title-component>
    <div>
      <doughnutChart :data="chairtData" :color="chartColor" chartId="commodity-chart"></doughnutChart>
    </div>
    <div class="data-total">
      <div class="title">商品总量</div>
      <div class="num">232333</div>
    </div>
  </div>
</template>

<script>
import titleComponent from "@/components/common/titleComponent";
import doughnutChart from "@/components/common/doughnutChart";

export default {
  name: "chartContainer",
  components: {
    titleComponent,
    doughnutChart
  },
  props: {
    initialData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      chairtData: [],
      chartColor:["#ff9484", "#fab586", "#51ce8c", "#66bce7",'#aa90e9'],
      titleOption: {
        color: "#BC86FF",
        title: "商品",
        date: "2019年07月23日"
      }
    };
  },
  created() {
    this.supplierData = {
      flag: false,
      status: true,
      tipsCode: "",
      msg: "",
      date: {
        censusId: "000193801249ddbc5a5ddaeb1ca00d94",
        potentialCustomCount: 5941,
        intentionCustomCount: 3797,
        conversionCustomCount: 1662,
        contractedCustomCount: 3858,
        inviteCustomCount: 9,
        potentialInversionRate: 20.333,
        inviteInversionRate: 19.285,
        contractedInversionRate: 23,
        intentionInversionRate: 16.785,
        conversionInversionRate: 18.014,
        createDate: 1564538988000
      },
      pkId: "000193801249ddbc5a5ddaeb1ca00d94",
      duplicated: 0
    };
    this.formateRes(this.supplierData.date);
  },
  methods: {
    formateRes(data) {
      var chartDataArr = [];
      var rateArr = [];
      var dataKeyArr = Object.keys(data);
      if (dataKeyArr && dataKeyArr.length) {
        for (var i = 0; i < dataKeyArr.length; i++) {
          if (dataKeyArr[i] === "potentialCustomCount") {
            chartDataArr.push({
              name: "潜在客是户",
              value: data[dataKeyArr[i]],
              percentage: data["potentialInversionRate"]
            });
          }
          if (dataKeyArr[i] === "intentionCustomCount") {
            chartDataArr.push({
              name: "意向都客户",
              value: data[dataKeyArr[i]],
              percentage: data["intentionInversionRate"]
            });
          }
          if (dataKeyArr[i] === "conversionCustomCount") {
            chartDataArr.push({
              name: "转化客都户",
              value: data[dataKeyArr[i]],
              percentage: data["conversionInversionRate"]
            });
          }
          if (dataKeyArr[i] === "conversionCustomCount") {
            chartDataArr.push({
              name: "签约客都户",
              value: data[dataKeyArr[i]],
              percentage: data["conversionInversionRate"]
            });
          }
          if (dataKeyArr[i] === "inviteCustomCount") {
            chartDataArr.push({
              name: "邀约客对户",
              value: data[dataKeyArr[i]],
              percentage: data["inviteInversionRate"]
            });
          }
          // if(dataKeyArr[i].indexOf('Rate') != -1){
          //     customerCountArr.push(data[dataKeyArr[i]])
          // }else{
          //     rateArr.push(data[dataKeyArr[i]])
          // }
        }
      }
      chartDataArr.sort(function(a, b) {
        a.value - b.value > 0;
      });
      console.log(chartDataArr);
      this.chairtData = chartDataArr;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart-container {
  position: relative;
  padding: 20px;
  height: 220px;
  background-color: #fff;
  .data-total {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top:32px;
    .title {
      font-family: PingFangSC-Regular;
      font-size: 10px;
      color: #333333;
           margin-bottom: 5px;
    }
    .num {
      font-family: DINPro-Bold;
      font-size: 13px;
      color: #333333;
      text-align: center;
 
      font-weight: 800;
    }
  }
}
</style>
