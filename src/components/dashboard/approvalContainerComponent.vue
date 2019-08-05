<template>
    <div class="approval-container">
        <div class="approval-container-title">
            <titleComponent
                :color="titleOption.color"
                :name="titleOption.title"
                :date="titleOption.date"
                :bgColor="titleOption.bgColor"
                :dateOption='titleOption.dateOption'
            ></titleComponent>
        </div>
        <div class="approval-container-table">
            <approvalListComponent></approvalListComponent>
        </div>
    </div>
</template>

<script>
import titleComponent from "@/components/common/titleComponent";
import approvalListComponent from "@/components/dashboard/approvalListComponent";

export default {
    name: "approvalContainerComponent",
    components: {
        titleComponent,
        approvalListComponent
    },
    props: {},
    data: function() {
        return {
            titleOption: {
                color: "#21B065",
                title: "审批事项",
                date: "查看全部",
                bgColor: "transparent",
                dateOption:{
                    route:'approvalList'
                }
            }
        };
    },
    created() {
        console.log()
    },
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.approval-container {
    .approval-container-title {
        padding: 15px 0 15px 0;
    }
    .approval-container-table {
        height: 350px;
        background-color: #fff;
    }
}
</style>
