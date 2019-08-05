<template>
    <div class="approval-list-row">
        <div class="icon-circle"></div>
        <div class="left">
            <span class="name">{{data.name}}</span>
            <span class="content">{{data.content}}</span>
        </div>
        <div class="date">{{data.date}}</div>
    </div>
</template>

<script>
export default {
    name: "todoRowComponent",
    components: {},
    props: {
        data: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    data: function() {
        return {};
    },
    created() {
        console.log(this.data);
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
@import "@/styles/mixin.scss";
.approval-list-row {
    height: 36px;
     @include flexFn(row, space-between, center, nowrap);
     .icon-circle{
         width: 6px;
         height: 6px;
         border-radius: 6px;
         background-color: #bbb;
         margin-right: 5px;
        margin-top: 2px
     }
    .left {
       flex: 3;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 20px;
    }
    .name {
        display: inline-block;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333333;
        padding-right: 10px;
        font-weight: 800;
    }
    .content {
        color: #2f71be;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        margin-right: 30px;
        // p {
        //     white-space: nowrap;
        //     overflow: hidden;
        //     text-overflow: ellipsis;
        // }
        // p:hover{
        //     cursor: pointer;
        // }
    }
    .content:hover{
        cursor: pointer;
    }
    .date {
        flex: 1;
        font-family: ArialMT;
        font-size: 12px;
        color: #666666;
        text-align: right;
    }
}
</style>
