<template>
    <div class="footer">
        <div class="share">
            <a href="#" class="weixin">&#xe893;</a>
            <a href="#" class="weibo">&#xe62a;</a>
            <a href="#" class="twitter">&#xe652;</a>
            <a href="#" class="medium">&#xeb7b;</a>
        </div>
        <h6>Copyright © 2019 the LKBT Team</h6>
    </div>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style lang="less">
.footer{
    width: 100%;
    min-width: 1202px;
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 80px;
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