<template>
    <div class="home pl-20 pt-20 pr-20">
        <div class="home-chart">
            <dashboardMain v-if="false" :data="approvalData" :dataKey="approvalKey"></dashboardMain>
            <dashboardMain v-if="false" :data="todoList" :dataKey="todoKey"></dashboardMain>
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
        <div class="home-list">
            <div class="approval-list mr-20">
                <approvalContainerComponent></approvalContainerComponent>
            </div>
            <div class="todo-list">
                <todoContainerComponent></todoContainerComponent>
            </div>
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
import approvalContainerComponent from "@/components/dashboard/approvalContainerComponent";
import todoContainerComponent from "@/components/dashboard/todoContainerComponent";

export default {
    name: "home",
    components: {
        supplierChart,
        customerChart,
        commodityChart,
        orderChart,
        approvalContainerComponent,
        todoContainerComponent
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
                title: "供方",
                date: "截止2019年1月",
                chart: {
                    color: "#FF5A10",
                    type: "suppslier",
                    data: []
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
@import "@/styles/mixin.scss";

.home {
    background-color: #f3f3f3;
    justify-content: space-between;
    & .home-chart {
         display: flex;
        &  > div {
            flex: 1;
        }
    }
    .home-list{
         @include flexFn(row, space-between);
         &  > div {
            flex: 1;
            height: 350px;
            background-color: #fff;
            background: transparent;
        }
    }
}
</style>

