<template>
    <div class="top">
        <div class="nav">
            <span><a href="/curriculum">核桃的课程</a></span>
            <span><a href="/teachers">核桃的老师</a></span>
            <!-- <span><a href="#">小核桃作品</a></span> -->
            <span><a href="/news">核桃大事记</a></span>
            <span><a href="https://d.hetao101.com" target="_blank">下载客户端</a></span>
            
            <a :href="getEnrolUrl" target="_blank" class="btn">报名课程</a>
        </div>
        <a class="logo" data-observer-type="fixBottom" href="/"></a>
    </div>
</template>

<style lang="less">
.top {
  width: 100%;
  height: 90px;
  min-width: 1200px;
  position: absolute;
  z-index: 100;
  padding: 0 60px;
  top: 0;
  left: 0;
  line-height: 48px;

  .logo {
    width: 140px;
    height: 129px;
    padding: 16px 32px 22px;
    background: #ff8d1a url('/official/logo_2x.png') no-repeat center;
    background-size: 77px auto;
    display: block;
    margin-left: 110px;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    float: left;
    img{
      width: 77px;
    }
    &:hover{
      background-color:#FC9329;
    }
  }
  .nav {
    float: right;
    line-height: 48px;
    padding-top: 17px;
    font-size: 20px;
    span {
      display: inline-block;
      margin-right: 43px;
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
        background: #fff;
        transition: width .3s ease-out;
      }
      &:hover{
        &::after{
          width:100%;
        }
      }
    }
    a.btn {
      border: 2px solid #fff;
      width: 170px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      display: inline-block;
      border-radius: 5px;
      &:hover{
        transition: all .3s ease;
        border-color:#FF8D1A;
        background:#FF8D1A;
        color:#fff;
      }
    }
    a {
      color: #fff;
    }
  }
  &.black{
    background:#fff;
    @black: #696D6F;
    span{
      &::after{background-color: @black}
    }
    a.btn{
      color:#FF8D1A;
      border-color: #FF8D1A;
    }
    a{
      color: @black
    }
  }
}
</style>
