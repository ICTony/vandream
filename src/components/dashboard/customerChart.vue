<template>
  <div class="chart-container">
    <title-component :color="titleOption.color" :name="titleOption.title" :date="titleOption.date"></title-component>
    <div>
      <funnelChart :data="chairtData" :color="chartColor" chartId='customer-chart'></funnelChart>
    </div>
  </div>
</template>

<script>
import titleComponent from "@/components/common/titleComponent";
import funnelChart from "@/components/common/funnelChart";

export default {
  name: "chartContainer",
  components: {
    titleComponent,
    funnelChart
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
      chartColor:["#75DCA6", "#3DC980", "#21B065", "#118F4D",'green'],
      titleOption:{
        color:'#21B065',
        title:'需方',
        date:'2019年07月23日'
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
        potentialCustomCount: 1000,
        intentionCustomCount: 500,
        conversionCustomCount: 100,
        contractedCustomCount: 20,
        inviteCustomCount: 78,
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
              name: "潜在客户",
              value: data[dataKeyArr[i]],
              percentage: data["potentialInversionRate"]
            });
          }
          if (dataKeyArr[i] === "intentionCustomCount") {
            chartDataArr.push({
              name: "意向客户",
              value: data[dataKeyArr[i]],
              percentage: data["intentionInversionRate"]
            });
          }
          if (dataKeyArr[i] === "conversionCustomCount") {
            chartDataArr.push({
              name: "转化客户",
              value: data[dataKeyArr[i]],
              percentage: data["conversionInversionRate"]
            });
          }
          if (dataKeyArr[i] === "conversionCustomCount") {
            chartDataArr.push({
              name: "签约客户",
              value: data[dataKeyArr[i]],
              percentage: data["conversionInversionRate"]
            });
          }
          if (dataKeyArr[i] === "inviteCustomCount") {
            chartDataArr.push({
              name: "邀约客户",
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
      chartDataArr.sort(function(a,b){
          a.value - b.value >0
      })
      console.log(chartDataArr)
      this.chairtData = chartDataArr;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart-container {
  padding: 20px;
  height: 180px;
  background-color: #fff;
}
</style>
