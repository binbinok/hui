<template>
  <div :class="{'footer_box': true, [footerClass]: !!footerClass}">
    <div class="share">
      <a
        href="https://mp.weixin.qq.com/s?__biz=Mzg2NTE3MzM3Nw==&mid=100000009&idx=1&sn=79505ff590a72f705d12d9ec834c2508&chksm="
        target="_blank"
        class="weixin"
      >&#xe893;</a>
      <a
        href="https://weibo.com/5953111811/profile?topnav=1&wvr=6"
        target="_blank"
        class="weibo"
      >&#xe62a;</a>
      <a href="https://twitter.com/LKBT__" target="_blank" class="twitter">&#xe652;</a>
      <a href="https://medium.com/@lkbt2019" target="_blank" class="medium">&#xeb7b;</a>
    </div>
    <h6>Copyright © 2019 the LKBT Team</h6>
  </div>
</template>

<script>
export default {
  name: "footer_box",
  props: ["footerClass"]
};
</script>

<style lang="less">
.footer_box{
    width: 100%;
    min-width: 1202px;
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 80px;
    &.relative{
        position: relative;
        height: 420px;
        box-sizing: border-box;
        padding-top: 120px;
        background: url(../assets/footer_bg.jpg) no-repeat center;
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .share{
        .iconfont;
        padding-bottom: 28px;
        a{
            display: inline-block;
            width: 80px;
            height: 80px;
            border-radius: 100%;
            border:1px solid #fff;
            color: #fff;
            font-size: 46px;
            text-align: center;
            margin: 0 35px;
            line-height: 80px;
            transition: all .5s ease-out;
            &:hover{
                color: #43cfcd;
                background: #fff;

            }
        }
    }
    h6{
        font-size: 20px;
        color:#fff;
        text-align: center;
        padding: 32px 0;
        border-top: 1px solid #fff;
    }
}
@font-face {
  font-family: 'iconfont';
  src: url('../assets/font/iconfont.eot');
  src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../assets/font/iconfont.woff2') format('woff2'),
      url('../assets/font/iconfont.woff') format('woff'),
      url('../assets/font/iconfont.ttf') format('truetype'),
      url('../assets/font/iconfont.svg#iconfont') format('svg');
}
</style>