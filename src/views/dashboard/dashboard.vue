<template>
  <div class="home pl-20 pt-20 pr-20">
    <dashboardMain v-if="false" :data="approvalData" :dataKey="approvalKey"></dashboardMain>
    <dashboardMain v-if="false" :data="todoList" :dataKey="todoKey"></dashboardMain>
<span style="display:inline-block;margin-right:5px;border-radius:4px;width:6px;border:1px solid #63D599 height:6px;"></span> 
    <div class="suppliers mr-20">
      <supplierChart></supplierChart>
    </div>
    <div class="customers mr-20">
      <customerChart></customerChart>
    </div>
    <div class="commodity mr-20">
    <commodityChart></commodityChart>
    </div>
    <div class="order">
      <orderChart></orderChart>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import dashboardMain from "@/components/dashboardMain";
// import navTop from "@/components/navTop";
import supplierChart from "@/components/dashboard/supplierChart";
import customerChart from "@/components/dashboard/customerChart";
import commodityChart from "@/components/dashboard/commodityChart";
import orderChart from "@/components/dashboard/orderChart";


export default {
  name: "home",
  components: {
    supplierChart,
    customerChart,
    commodityChart,
    orderChart
  },
  data: function() {
    return {
      approvalKey: {
        code: "approveTypeCode",
        name: "approveTypeName",
        count: "pendingTaskCount",
        icon: "iconInfo"
      },
      todoKey: {
        code: "messageTypeCode",
        name: "messageTypeName",
        count: "messageTypeNoticeCount",
        form: "informationForm",
        icon: "iconInfo"
      },
      todoList: {
        title: "待办事项",
        list: []
      },
      approvalData: {
        title: "审批事项",
        list: []
      },
      supplierData: {
        color: "#FF5A10",
        title:'供方',
        date:'截止2019年1月',
        chart:{
            color: "#FF5A10",
             type: "suppslier",
             data:[]
        }
      }
    };
  },
  created() {
    console.log(44);
  }
};
</script>
<style lang="scss" scoped>
.home {
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  & > div {
    flex: 1;
    // border: 1px solid red;
  }
}
</style>

