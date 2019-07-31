<template>
  <div class="home pl-20 pt-20 pr-20">
    <dashboardMain v-if="false" :data="approvalData" :dataKey="approvalKey"></dashboardMain>
    <dashboardMain v-if="false" :data="todoList" :dataKey="todoKey"></dashboardMain>

    <div class="suppliers mr-20">
      <chartContainer :initialData="supplierData"></chartContainer>
    </div>
    <div class="customers mr-20">customers</div>
    <div class="commodity mr-20">commodity</div>
    <div class="order">order</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import dashboardMain from "@/components/dashboardMain";
// import navTop from "@/components/navTop";
import chartContainer from "@/components/dashboard/chartContainer";

export default {
  name: "home",
  components: {
    chartContainer
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
    border: 1px solid red;
  }
}
</style>

