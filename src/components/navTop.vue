<template>
  <div class="nav">
    <div class="company-name">万郡绿建</div>
  </div>
</template>

<script>
export default {
  name: "dashboardMain",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  text-align: left;
  background-color: #ffffff;
  border-bottom: solid 1px #ccc;
  .company-name {
    font-family: PingFangSC-Semibold;
    font-size: 15px;
    color: #333333;
    font-weight: bold;
    vertical-align: top;
    margin-left: 5px;
  }
}
</style>
