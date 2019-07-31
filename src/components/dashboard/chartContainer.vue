<template>
  <div class="chart-container">
     <title-component :color='initialData.color' :name='initialData.title' :date='initialData.date'></title-component>
    <div class="">
        <funnelChart :data='initialData.chart'></funnelChart>
    </div>
  </div>
</template>

<script>
import titleComponent from "@/components/common/titleComponent"
import funnelChart from "@/components/common/funnelChart"

export default {
  name: "chartContainer",
  components:{
      titleComponent,
      funnelChart
  },
  props: {
    initialData: {
        type:Object,
        default:function(){
            return {}
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart-container{
    padding:20px;
    height: 180px;
    background-color: #fff;
}

</style>
