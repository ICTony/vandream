<template>
    <div class="approval-list-row">
        <div class="name"><p>{{data.name}}</p></div>
        <div class="content">
            <p>{{data.content}}</p>
        </div>
        <div class="date">{{data.date}}</div>
    </div>
</template>

<script>
export default {
    name: "approvalRowComponent",
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
    @include flexFn(row, left, center, nowrap);
    height: 36px;
    .name {
        flex: 0.9;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333333;
        width: 0;
         p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .content {
        width: 0;
        flex: 2.1;
        color: #2f71be;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        margin-right: 30px;
        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        p:hover{
            cursor: pointer;
        }
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
