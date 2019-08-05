<template>
    <div class="approval-list-container">
        <el-tabs v-model="activeName" >
            <el-tab-pane label="待我审批" name="first">
                <span slot="label">
                    我的行程
                    <span>(333)</span>
                </span>
              
            </el-tab-pane>
            <el-tab-pane label="我已审批" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="我发起的审批" name="third">角色管理</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name:'approvalListPage',
    components:{

    },
    data:function(){
        return {
            activeName: 'second'
        }
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="scss" scoped>
    .approval-list-container{
        height: 100%;
        background-color: #fff;
        .el-tabs__nav{
            color: red;
        }
    }
</style>
<style >
     .approval-list-container  .el-tabs__nav  {
            color: red !important;
        }
</style
