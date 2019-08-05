<template>
    <div class="todo-container">
        <div class="todo-container-title">
            <titleComponent
                :color="titleOption.color"
                :name="titleOption.title"
                :date="titleOption.date"
                :bgColor="titleOption.bgColor"
                :dateOption='titleOption.dateOption'
            ></titleComponent>
        </div>
        <div class="todo-container-table">
            <div v-for="(item,index) in todoData.data " :key = 'index'> <todoRowComponent :data ='item'></todoRowComponent></div>
        </div>
    </div>
</template>

<script>
import titleComponent from "@/components/common/titleComponent";
import todoRowComponent from "@/components/dashboard/todoRowComponent";
export default {
    name: "todoContainerComponent",
    components: {
        titleComponent,
        todoRowComponent
    },
    props: {},
    data: function() {
        return {
            titleOption: {
                color: "#21B065",
                title: "待办事项",
                date: "查看全部",
                bgColor: "transparent",
                dateOption:{
                    route:'todoList'
                }
            },
            todoData:{
                data:[]
            }
        };
    },
    created() {
        this.todoData.data =  [{name:'商品下架申请',content:'尼尔森圆柱头焊钉尼尔森圆柱头焊钉尼尔森圆',date:'2018/10/22 16:44:50'},{name:'商品下架申请',content:'尼尔森圆柱头焊钉尼尔森圆柱头焊钉尼尔森圆',date:'2018/10/22 16:44:50'},{name:'商品下架申请',content:'尼尔森圆柱头焊钉尼尔森圆柱头焊钉尼尔森圆',date:'2018/10/22 16:44:50'}]
    },
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-container {

    .todo-container-title {
        padding: 15px 0 15px 0;
    }
    .todo-container-table {
        box-sizing: border-box;
        height: 350px;
        background-color: #fff;
        padding: 20px;
    }
}
</style>
