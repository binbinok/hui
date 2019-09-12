<template>
    <div class="top">
        <div class="nav">
            <span><a href="/curriculum">首页</a></span>
            <span><a href="/teachers">应用场景</a></span>
            <span><a href="/news">白皮书</a></span>
        </div>
        <a class="logo" data-observer-type="fixBottom" href="/"></a>
    </div>
</template>

<style lang="less">
.top {
  width: 100%;
  height: 90px;
  min-width: 1200px;
  line-height: 90px;

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
    width: 1202px;
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
