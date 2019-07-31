<template>
  <div class="title-component">
    <div class="title">
      <div class="left"><span class="vertical-line" :style='"background-color:"+color'></span><span class="name">{{name}}</span></div>
      <div class="right">{{date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleComponent",
  props: {
    color: String,
    name: String,
    date: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/mixin.scss";
.title-component {
  font-family:  PingFangSC-Semibold;
  padding: 0;
}
.title {
    @include flexFn(row, space-between);
    height: 20px;
    .left{
        font-size: 14px;
        color: #333;
        font-weight: bold;
        & span.name{
            padding-left: 5px;
        }
    }
    .vertical-line{
        width:4px;
        height:14px;
        display: inline-block;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px
    }
    .right{
        font-size: 10px;
        color: #a5a5a5;
        line-height: 14px;
    }
}
</style>
