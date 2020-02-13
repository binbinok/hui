<template>
    <div :class="{'top': true, [footerClass]: !!footerClass}">
      <div class="menu" @click="isNavShow = !isNavShow">
        <img src="../../assets/mobile/menu.gif" alt="" v-show="!isNavShow">
        <span v-show="isNavShow">&times;</span>
      </div>
      <div class="nav" v-show="isNavShow">
          <span><router-link to="/">首页</router-link></span>
          <span><router-link to="/applicationscenaios">应用场景</router-link></span>
          <span><router-link to="/newsList">动态</router-link></span>
          <span><a href="http://52.77.230.193/LKBTWhitePaper.pdf" target="_blank">白皮书</a></span>
      </div>
      <a class="logo" data-observer-type="fixBottom" href="/"></a>
    </div>
</template>

<script>
export default {
  name: 'top',
  props: ["footerClass"],
  data() {
    return {
      isNavShow: false
    }
  }
}
</script>

<style lang="less">
.top {
  width: 100%;
  height: 90px;
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
    background: url('../../assets/logo.png') no-repeat center;
    background-size: contain;
    display: block;
    margin-left: 20px;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    float: left;
  }
  .menu{
    width: 50px;
    padding: 22px;
    float: right;
    line-height: 30px;
    text-align: right;
    span{
      color: #70cccc;
      font-size: 80px;
    }
    img{
      display: block;
      width: 100%;
    }
  }
  .nav {
    position: absolute;
    width: 100vw;
    height: 100vh;
    line-height: 48px;
    font-size: 18px;
    left: 0;
    top: 90px;
    background: #fff;
    border-top: 1px solid #70cccc;/* no */
    span {
      display: block;
      font-weight: bold;
      position: relative;
      text-align: right;
      line-height: 3em;
      font-size: 30px;/* font */
      padding-right: 22px;
      color: #70cccc;
      a{
        color: #70cccc;
        display: block;
      }
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
