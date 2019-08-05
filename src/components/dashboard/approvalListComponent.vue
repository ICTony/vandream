<template>
    <div class="approval-list">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="待我审批" name="first">
                <span slot="label">
                    我的行程
                    <span>(333)</span>
                </span>
                <div v-for="(item,index) in approvalData.data " :key = 'index'> <approvalRowComponent :data ='item'></approvalRowComponent></div>
            </el-tab-pane>
            <el-tab-pane label="我已审批" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="我发起的审批" name="third">角色管理</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import approvalRowComponent from "@/components/dashboard/approvalRowComponent";
export default {
    name: "approvalListComponent",
    components: {
        approvalRowComponent
    },
    props: {},
    data: function() {
        return {
            activeName: "first",
            approvalData:{
                data:[]
            }
        };
    },
    created() {
        this.approvalData.data = [{name:'商品下架申请',content:'尼尔森圆柱头焊钉尼尔森圆柱头焊钉尼尔森圆',date:'2018/10/22 16:44:50'},{name:'商品下架申请',content:'尼尔森圆柱头焊钉尼尔森圆柱头焊钉尼尔森圆',date:'2018/10/22 16:44:50'},{name:'商品下架申请',content:'尼尔森圆柱头焊钉尼尔森圆柱头焊钉尼尔森圆',date:'2018/10/22 16:44:50'}]
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.approval-list {
    padding-left: 20px;
    padding-right: 20px;
}
</style>
