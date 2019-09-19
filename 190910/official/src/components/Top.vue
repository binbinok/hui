<template>
    <div :class="{'top': true, [footerClass]: !!footerClass}">
      <div class="box">
        <div class="nav">
            <span><router-link to="/">首页</router-link></span>
            <span><router-link to="/applicationscenaios">应用场景</router-link></span>
            <span><router-link to="/newsList">动态</router-link></span>
            <span><a href="http://52.77.230.193/LKBTWhitePaper.pdf" target="_blank">白皮书</a></span>
        </div>
        <a class="logo" data-observer-type="fixBottom" href="/"></a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'top',
  props: ["footerClass"]
}
</script>

<style lang="less">
.box{
  width: 1202px;
  margin: 0 auto;
}
.top {
  width: 100%;
  height: 90px;
  min-width: 1200px;
  line-height: 90px;
  left: 0;
  top: 0;
  background: #fff;
  position: fixed; 
  box-shadow:0px 2px 10px #919191;
  z-index: 10;
  .logo {
    width: 177px;
    height: 59px;
    margin-top: 14px;
    background: url('../assets/logo.png') no-repeat center;
    display: block;
    margin-left: 110px;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    float: left;
  }
  .nav {
    float: right;
    line-height: 48px;
    padding-top: 17px;
    font-size: 18px;
    span {
      display: inline-block;
      margin-right: 15px;
      font-weight: bold;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        width: 0%;
        height: 2px;
        line-height: 2px;
        background: #70cccc;
        transition: width .3s ease-out;
      }
      &:hover{
        &::after{
          width:100%;
        }
      }
    }
    a {
      padding: 0 12px;
      color: #000;
      &:hover{
        transition: color .3s ease-out;
        color: #70cccc;
      }
    }
  }
}
</style>
