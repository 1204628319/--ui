<template>
  <div class="headBox" style="text-align:center">
    <div class="headLeft" >
      <span>花呗支付</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    methods: {
      logout() {
        window.sessionStorage.removeItem('token')
        this.$router.push({ path: '/login' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .headBox {
    position: relative;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    text-align: left;
    background: linear-gradient(
        90deg,
        rgba(71, 184, 255, 1) 0%,
        rgba(42, 141, 255, 1) 100%
    );
    // border-bottom: 4px #fff solid;
  }
  .headLeft {
    margin-left: 4px;
    display: inline-flex;
    align-items: center;
    span {
      font-size: 24px;
      color: #fff;
      margin-left: 40px;
    }
  }
  .headRight {
    float: right;
    margin-top: 15px;
    .notice {
      margin: 4px 8px 0 0;
      float: left;
      cursor: pointer;
      i {
        font-size: 20px;
        color: #fff;
      }
    }
    .el-dropdown {
      cursor: pointer;
      height: 30px;
      line-height: 30px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 1px 1px 0px rgba(255, 255, 255, 0.2);
      border-radius: 26px;
      color: #fff;
      padding-right: 10px;
      margin-right: 18px;
      .pngIcon {
        width: 24px;
        height: 24px;
        background: #fff;
        border-radius: 50%;
        float: left;
        margin: 3px;
        text-align: center;
        img {
          width: 18px;
          height: 18px;
        }
      }
      .text {
        padding: 0 8px;
      }
    }
  }
</style>
