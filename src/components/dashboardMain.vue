<template>
  <div class="dashboard-main-wrap">
    <div class="main-title">{{data.title}}</div>
    <div class="main-list">
        <div class="list-item" v-for="(item,index) in data.list" :key="index">
            <dashboardMainList :data='item' :dataKey='dataKey'></dashboardMainList>
        </div>
    </div>
  </div>
</template>

<script>
import dashboardMainList from '@/components/dashboard/dashboardMainList'
export default {
  name: "dashboardMain",
  components:{
      dashboardMainList
  },
  props: {
    data: {
        type:Object,
        default:function(){
            return {}
        }
    },
    dataKey:{
        type:Object,
        default:function(){
            return {}
        }
    }
  },
  created(){
      console.log(this.dataKey,'data')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard-main-wrap {
  margin: 30px 0 30px 20px;
  background-color: #f5f5f5;
  .main-title {
    background-color: #148d4c;
    color: #fff;
    font-size: 16px;
    height: 36px;
    line-height: 36px;
  }
  .main-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-left: 10px;
      padding-bottom: 10px;
      .list-item{
          width: 33.3%;
          background-color: transparent;
          min-width: 340px;
          height: 80px;
           padding:10px 10px 0 0;
           box-sizing: border-box;
      }
  }
}
</style>
