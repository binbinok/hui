<template>
  <div class="home">
    <Top msg="Welcome to Your Vue.js App"/>
    <div class="banner"></div>
    <div class="box">
      <div class="title future_data_assets">未来数据资产</div>
    </div>
    <div class="future">
      <div class="box">
        <ul>
          <li>
            <div>
              <div class="icon">
                <div><img src="../assets/icon1_1.png" alt=""></div>
              </div>
              <h2>知识</h2>
              <p>符合文明方向的人类对物质世界及精神世界探索的结果总和</p>
            </div>
          </li>
          <li>
            <div>
              <div class="icon">
                <div><img src="../assets/icon1_2.png" alt=""></div>
              </div>
              <h2>算法</h2>
              <p>解决方案的准确完整描述和一系列解决问题的清晰指令</p>
            </div>
          </li>
          <li>
            <div>
              <div class="icon">
                <div><img src="../assets/icon1_3.png" alt=""></div>
              </div>
              <h2>算力</h2>
              <p>分布在不同地方的存储资源和计算资源</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="detail">
      <div>
        <h2>
          <p>LKBT是为数据资产交易平台服务的金融基础设施，实现数据资产的可信交易和记账服务，可与各类知识计算化操作系统和数据资产交易系统无缝连接。</p>
        </h2>
        <div class="icons"></div>
      </div>
    </div>
    <div class="box">
      <div class="title technical_system">技术体系</div>
      <div class="net">
        <div class="left">
          <div class="btn btn1">
            <div><i></i></div>  
          </div>
          <div class="btn btn2">
            <div><i></i></div>  
          </div>
          <div class="btn btn3">
            <div><i></i></div>  
          </div>
          <div class="btn btn4">
            <div><i></i></div>  
          </div>
          <div class="btn btn5">
            <div><i></i></div>
          </div>
        </div>
        <div class="right">
          <h3><span>共识机制</span></h3>
          <p>LKBT采用LkbtBFT共识协议的BFT机制来实现所有验证者节点就将要执行的交易及其执行顺序达成一致。LkbtBFT共识协议能在高交易处理量、低延迟和更高能效之间达成一个平衡。</p>
        </div>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import observer from "@/utils/observer";

export default {
  name: 'home',
  components: {
    Top
  },
  mounted() {
    observer(this);
  },
  data() {
    return {
      net: {
        i1: {
          title: '安全机制',
          content: '区块链能构筑安全、可信的存储与交易网络的核心是其安全机制和密码算法，LKBT采用了可扩展哈希函数、可插拔公钥密码'
        },
        i2: {
          title: '共识机制',
          content: 'LKBT采用LkbtBFT共识协议的BFT机制来实现所有验证者节点就将要执行的交易及其执行顺序达成一致。Lkbt'
        },
        i3: {
          title: '目录索引链',
          content: '目录索引链，是数据、知识、算法资产化的可信存储媒介，是资产形式化后的可信流通渠道，是可交换资产价值发掘的可信交易'
        },
        i4: {
          title: '安全机制',
          content: '区块链能构筑安全、可信的存储与交易网络的核心是其安全机制和密码算法，LKBT采用了可扩展哈希函数、可插拔公钥密码'
        },
        i5: {
          title: '网关与稳定币',
          content: '一体化稳定币平台是LKBT构建互操作性经济生态系统的重要部分。将通过资产网关，对接已经存在的稳定币例如Libra'
        },
      }
    }
  }
}
</script>

<style lang="less">
.home{
  .box{
    width: 1202px;
    margin: 0 auto;
  }
  .banner{
    height: 751px;
    background: url(../assets/banner.jpg) no-repeat center;
  }
  .transition{transition: all .3s ease-out}
  .title{
    font-size: 24px;
    padding-top: 50px;
    color: #43cfcd;
    text-align: center;
    margin-top: 140px;
    &.future_data_assets{
      background: url(../assets/future_data_assets.png) no-repeat center;
    }
    &.technical_system{
      background: url(../assets/technical_system.png) no-repeat center;
    }
    &.application_scenarios{
      background: url(../assets/application_scenarios.png) no-repeat center;
    }
  }
  .button_style{
    padding: 8px;
    border-radius: 20px;
    background: rgba(122, 204, 204, .3);
    display: inline-block;
    vertical-align: middle;
    & > div {
      border-radius: 15px;
    }
  }
  .future{
    height: 612px;
    background: url(../assets/data_bg.png) no-repeat center;
    li{
      .button_style;
      margin-right: 58px;
      &:last-child{
        margin-right: 0;
      }
      &:nth-child(1){
        margin-top: 152px;
      }
      &:nth-child(3){
        margin-top: 96px;
      }
      & > div{
        width: 332px;
        height: 408px;
        background: linear-gradient(120deg, #fff, #f4fcfc);

        &:hover{
          background: linear-gradient(120deg, #81d5d3, #6acddb);
          .icon{
            background: rgba(255, 213, 89, .8);
            & > div {
              background: linear-gradient(120deg, #fac73f, #f7d344);
            }
          }
          h2{
            color: #f8d143;
          }
          p{
            color: #fff;
          }
        }

        .icon{
          .button_style;
          background: rgba(186, 288, 234, .3);
          border-radius: 100%;
          margin-top: 40px;
          & > div{
            width: 162px;
            height: 162px;
            line-height: 152px;
            border-radius: 100%;
            background: linear-gradient(120deg, #81d5d3, #6acddb);
            img{
              vertical-align: middle;
              display: inline;
            }
          }
        }
        h2{
          font-size: 26px;
          color: #70cccc;
          padding-top: 24px;
        }
        p{
          padding: 15px 60px;
          font-size: 20px;
          color: #737373;
          line-height: 1.5em;
        }
      }
    }
  }
  .detail{
    padding-top: 172px;
    padding-bottom: 458px;
    background: url(../assets/bg_top.png) no-repeat top center, url(../assets/bg_bottom.png) no-repeat center bottom;
    background-color: #f4fcfc;
    & > div{
      .box;
      position: relative;
    }
    h2{
      height: 444px;
      background: url(../assets/logo2.png) no-repeat 30px top;
      padding-left: 600px;
      p{
        padding: 150px 10px 0 140px;
        font-size: 24px;
        line-height: 1.5em;
        color: #70cccc;
        font-weight: normal;
        text-indent: 2em;
        text-align: left;
      }
    }
    .icons{
      width: 662px;
      height: 421px;
      background: url(../assets/icons.png) no-repeat;
      position: absolute;
      top: 398px;
      left: 444px;
      z-index: 2;
    }
  }
  .net{
    padding-top: 90px;
    .left {
      width: 600px;
      height: 585px;
      position: relative;
      background: url(../assets/net.png) no-repeat 0 0;
      float: left;
      .btn{
        .button_style;
        border-radius: 100%;
        position: absolute;
        & > div{
          width: 84px;
          height: 84px;
          background-color: #78d2d6;
          padding: 0;
          border-radius: 100%;
          i {
            display: block;
            width: 84px;
            height: 84px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 60% auto;
            opacity: .5;
          }
        }
        &.btn1{
          top: 20px;
          left: 204px;
          & > div {
            i{
              background-image: url(../assets/icon2_1.png);
              background-position: center 40%;
            }
          }
        }
        &.btn2{
          top: 218px;
          left: 180px;
          & > div {
            i{
              background-image: url(../assets/icon2_2.png);
            }
          }
        }
        &.btn3{
          top: 190px;
          left: 390px;
          & > div {
            i{
              background-image: url(../assets/icon2_3.png);
              background-position: 65% center;
            }
          }
        }
        &.btn4{
          top: 415px;
          left: 124px;
          & > div {
            i{
              background-image: url(../assets/icon2_4.png);
            }
          }
        }
        &.btn5{
          top: 434px;
          left: 434px;
          & > div {
            i{
              background-image: url(../assets/icon2_5.png);
            }
          }
        }
      }
    }
    .right{
      padding-left: 62px;
      padding-top: 160px;
      width: 528px;
      float: left;
      h3{
        height: 26px;
        text-align: center;
        font-size: 24px;
        line-height: 26px;
        font-weight: bold;
        color: #70cccc;
        background: #ecfafa;
        span{
          padding: 0 25px;
          background: #fff;
          line-height: 26px;
        }
      }
      p{
        padding-top: 50px;
        font-size: 24px;
        color: #737373;
        line-height: 1.5em;
        text-indent: 2em;
        text-align: left;
      }
    }
  }
}
</style>
