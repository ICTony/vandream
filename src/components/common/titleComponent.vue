<template>
    <div class="title-component" :style="'background-color:'+bgColor">
        <div class="title">
            <div class="left">
                <span class="vertical-line" :style="'background-color:'+color"></span>
                <span class="name">{{name}}</span>
            </div>
            <div class="right" :class="{'view-more':dateOption.route}" @click="goRoute">{{date}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "titleComponent",
    props: {
        color: String,
        name: String,
        date: String,
        bgColor: String,
        dateOption: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    methods:{
      goRoute(){
        if(this.dateOption.route){
            this.$router.push({
              name:this.dateOption.route
            })
        }
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/mixin.scss";
.title-component {
    font-family: PingFangSC-Semibold;
    padding: 0;
}
.title {
    @include flexFn(row, space-between);
    height: 20px;
    .left {
        font-size: 14px;
        color: #333;
        font-weight: bold;
        & span.name {
            padding-left: 5px;
        }
    }
    .vertical-line {
        width: 4px;
        height: 14px;
        display: inline-block;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
    }
    .right {
        line-height: 14px;
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #a5a5a5;
        text-align: center;
    }
    .view-more {
        cursor: pointer;
    }
}
</style>
