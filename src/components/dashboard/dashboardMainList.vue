<template>
  <div class="contant-wrap">
    <div class="list-wrap">
      <div class="icon-wrap">
        <div class="profile icon"></div>
      </div>
      <div class="name">{{data[dataKey.name]}}</div>
      <div class="count">
        <span>{{data[dataKey.count]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboardMain",
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    dataKey: {
      type: Object,
      default: {}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contant-wrap {
  background-color: #fff;
  height: 100%;
  .list-wrap {
    height: 100%;
    display: flex;
    align-items: center;

    .icon-wrap {
      width: 30px;
      height: 20px;
      margin-left: 10px;
    }
    .count {
      width: 50px;
      height: 50px;
      border: 5px solid #b3b3b3;
      line-height: 50px;
      text-align: center;
      border-radius: 50%;
      margin-right: 10px;
      font-size: 30px;
      color: #b3b3b3;
    }
    .name {
      flex: 1;
    }
  }
  .profile.icon {
    color: #148d4c;
    position: absolute;
    margin-left: 3px;
    margin-top: 11px;
    width: 14px;
    height: 6px;
    border-left: solid 1px currentColor;
    border-right: solid 1px currentColor;
    border-top: solid 1px currentColor;
    border-bottom: solid 1px transparent;
    border-radius: 6px 6px 0 0;
  }
  .profile.icon:before {
    content: "";
    position: absolute;
    left: 2px;
    top: -10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: solid 1px currentColor;
  }
}
</style>
