<template>
  <div class="home">
    <Top/>
    <div class="banner"></div>
    <div class="box">
      <div class="title future_data_assets">未来数据资产</div>
    </div>
    <div :class="{future: true, show: boxShow >= 1}">
      <div class="box">
        <div class="stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
        <div :class="{icons: true, show: loadAnimate}"></div>
      </div>
    </div>
    <div class="box">
      <div class="title technical_system">技术体系</div>
      <div :class="{net: true, show: boxShow >= 2}">
        <div class="left">
          <div v-for="(n, index) in net" :class="{'btn'
          : true, [n.name]: true, on: netInfo && n.name == netInfo.name}" :key="index" @click="onChangeNet(index)">
            <div><i></i></div>
          </div>
        </div>
        <div class="right" v-show="netInfo">
          <h3><span>{{ netInfo && netInfo.title }}</span></h3>
          <p>{{ netInfo && netInfo.content }}</p>
        </div>
      </div>
    </div>
    <div class="application">
      <div class="box">
        <div class="title application_scenarios">应用场景</div>
        <div class="app_detail_cover" :class="{app_detail_cover: true, show: boxShow >= 3}">
          <img src="../assets/application.png" alt="">
        </div>
        <div class="app_detail" :class="{app_detail: true, show: boxShow >= 3}">
          <p>LKBT首选的合作伙伴是以“全球医疗均质化”为核心愿景的医疗智能合约协作平台——LEBEN（同医）,LEBEN的可信计算技术，能够使交换过程中的数据不可复制、不可迁移、也不可见，以保证医疗数据可以进行跨机构、跨地区以及跨境的可信数据交换。LEBEN（同医）目前已与安贞医院等重点医疗机构合作开发了“CHDr.（先心安）”、“外科大数据辅助（暂定名）”、“脑卒中项目（暂定名）”等多项医疗场景应用。</p>
          <p>LKBT将独家为 LEBEN平台打造数据资产交易金融基础设施，全面为LEBEN平台参与方提供底层交易计算服务。</p>
        </div>
        <div class="app_btn">
          <div>
            <a href="#">了解更多</a>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="box">
        <div class="title core_team">核心团队</div>
        <ul :class="{show: boxShow >= 4}">
          <li>
            <div>
              <div class="img lang"></div>
              <h2>Amos Lang</h2>
              <h3>LKBT创始人</h3>
            </div>
          </li>
          <li>
            <div>
              <div class="img justin"></div>
              <h2>Dr justin</h2>
              <h3>LKBT首席科学家</h3>
            </div>
          </li>
          <li>
            <div>
              <div class="img evan"></div>
              <h2>Evan</h2>
              <h3>LKBT首席营销官</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <FooterBox />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import FooterBox from '@/components/Footer.vue'
import observer from "@/utils/observer";

export default {
  name: 'home',
  components: {
    Top,
    FooterBox
  },
  mounted() {
    let detail = document.querySelector('.detail');
    this.$data.offset = detail.offsetTop;
    observer(this);
    this.onChangeNet(0);
    window.addEventListener('scroll', this.onScroll);
  },
  data() {
    return {
      netInfo: null,
      scroll: 0,
      boxShow: 0,
      offset: 0,
      boxs: [0, 470, 2440, 3312, 4642],
      loadAnimate: false,
      net: [
        {
          name: 'btn1',
          title: '安全机制',
          content: '区块链能构筑安全、可信的存储与交易网络的核心是其安全机制和密码算法，LKBT采用了可扩展哈希函数、可插拔公钥密码技术及环签名等智能合约隐私保护技术，从而提供一个；安全高效的交易网络。'
        },
        {
          name: 'btn2',
          title: '共识机制',
          content: 'LKBT采用LkbtBFT共识协议的BFT机制来实现所有验证者节点就将要执行的交易及其执行顺序达成一致。LkbtBFT共识协议能在高交易处理量、低延迟和更高效之间达成一个平衡。'
        },
        {
          name: 'btn3',
          title: '目录索引链',
          content: '目录索引链，是数据、知识、算法资产化的可信存储媒介，是资产形式化后的可信流通渠道，是可交换资产价值发掘的可信交易链条，通过区块链技术真正实现数据资产化，从而为主体之间实现资产确权、完成资产的有效流转。'
        },
        {
          name: 'btn4',
          title: '智能合约',
          content: 'LKBT区块链兼容Solidity智能合约，并在此基础上加以扩展，支持私有智能合约。私有合约定义联盟，只在联盟内可见，合约数据只保存在私有DB上，不会把隐私数据全网分发。实现公开交易全网一致共识，私有交易局部共识，隐私数据得已保护。'
        },
        {
          name: 'btn5',
          title: '网关与稳定币',
          content: '一体化稳定币平台是LKBT构建互操作性经济生态系统的重要部分。将通过资产网关，对接已经存在的稳定币例如Libra、USDT、TUDS、Dai等，通过LKBT区块链来映射资产，与之共享数字经济成果。'
        }
      ],
    }
  },
  methods: {
    onChangeNet(i){
      this.$data.netInfo = this.$data.net[i];
    },
    onScroll() {
      let top, index = 0;
      let boxs = this.boxs;
      let scroll = this.$data.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      top = this.offset - this.scroll + 100;
      for (let i = 0; i < boxs.length; i++) {
        if (boxs[i] > scroll) {
          break
        } else {
          index = i;
        }
      }
      this.$data.boxShow = index;
      this.$data.loadAnimate = top < 0 ? true : false;
    }
  }
}
</script>

<style lang="less">
.clear{
  &::after{
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
}
.onShow{
  opacity: 0;
  transform: translateY(50%);
  transition: all .5s ease-out;
  &.show{
    opacity: 1;
    transform: translateY(0%);
  }
}
.home{
  position: relative;
  .box{
    width: 1202px;
    margin: 0 auto;
  }
  .banner{
    margin-top: 90px;
    height: 751px;
    background: url(../assets/banner.jpg) no-repeat center;
  }
  .transition{transition: all .3s ease-out}
  
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
    .onShow;
    .stars{
      position: relative;
      span{
        position: absolute;
        z-index: 2;
        background: #43cfcd;
        border-radius: 100%;
        line-height: 0;
        font-size: 0;
        width: 24px;
        height: 24px;
        opacity: .16;
        animation: star 1s ease-out infinite alternate;
        &:nth-child(1){
          top: 76px;
          left: 132px;
          animation-duration: 2.5ds;
        }
        &:nth-child(2){
          top: 544px;
          left: 474px;
          animation-duration: 1.5s;
        }
        &:nth-child(3){
          top: -8px;
          left: 850px;
          animation-duration: 5s;
        }
        &:nth-child(4){
          top: 226px;
          left: -200px;
          animation-duration: 4.5s;
        }
        &:nth-child(5){
          top: 264px;
          right: -58px;
          animation-duration: 2s;
        }
      }
    }
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
      transform: translateY(100%);
      opacity: 0;
      transition: all 1s ease-out;
      &.show{
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  .net{
    .clear;
    .onShow;
    padding-top: 90px;
    margin-bottom: 105px;
    .left {
      width: 600px;
      height: 585px;
      position: relative;
      background: url(../assets/net.png) no-repeat 0 0;
      float: left;
      .btn{
        .button_style;
        transition: transform .15s ease-out;
        border-radius: 100%;
        position: absolute;
        animation: show 1s ease-out infinite alternate;
        &.btn01{
          animation-duration: 1s;
        }
        &.btn02{
          animation-duration: .8s;
        }
        &.btn03{
          animation-duration: .2s;
        }
        &.btn04{
          animation-duration: .9s;
        }
        &.btn05{
          animation-duration: .5s;
        }
        &.on{
          animation: none;
          transform: scale(1.5);
          div{
            i{
              opacity: 1;
            }
          }
        }
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
              background-image: url(../assets/icon2_2.png);
              background-position: center 40%;
            }
          }
        }
        &.btn2{
          top: 218px;
          left: 180px;
          & > div {
            i{
              background-image: url(../assets/icon2_1.png);
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
  .application{
    padding-top: 40px;
    padding-bottom: 150px;
    background: #f4fcfc url(../assets/bg2_top.png) no-repeat center top;
    .app_detail_cover{
      .onShow;
      margin-top: 94px;
      padding: 96px 65px;
      background: #e9fbfb;
      border-radius: 10px;
    }
    .app_detail{
      .onShow;
      padding-top: 70px;
      p{
        text-indent: 2em;
        text-align: left;
        line-height: 1.5em;
        color: #70cccc;
        font-size: 24px;
      }
    }
    .app_btn{
      .button_style;
      border-radius: 45px;
      margin-top: 106px;
      &:hover{
        transform: scale(1.05);
        transition: transform .15s ease-out;
      }
      & > div {
        border-radius: 35px;
        background: linear-gradient(120deg, #81d5d3, #6acddb);
        width: 504px;
        height: 114px;
        line-height: 114px;
        color: #fff;
        font-size: 42px;
        font-weight: bold;
        a{
          color: #fff;
          display: block;
        }
      }
    }
  }
  .team{
    
      background: url(../assets/team.jpg) no-repeat center top;
      box-sizing: border-box;
      padding-bottom: 300px;
      padding-top: 150px;
      .clear;
      ul{
        .onShow;
        .clear;
        padding-bottom: 200px;
        li{
          .button_style;
          display: block;
          float: left;
          margin-right: 60px;
          transition: transform .15s ease-out;
          &:last-child{
            margin-right: 0;
          }
          &:hover{
            transform: scale(1.05);
          }
          & > div {
            width: 330px;
            height: 358px;
            background: #43cfcd;
            .img{
              width: 100%;
              height: 258px;
              background: #fff no-repeat center;
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
              &.lang{
                background-image: url(../assets/lang.png)
              }
              &.justin{
                background-image: url(../assets/justin.png)
              }
              &.evan{
                background-image: url(../assets/evan.png)
              }
            }
            h2{
              text-align: center;
              color: #fff;
              font-size: 25px;
              line-height: 2em;
              padding-top: 10px;
            }
            h3{
              text-align: center;
              color: #fff;
              font-size: 20px;
            }
          }
        }
      }
    }
}

@keyframes star {
  from{
    opacity: .3;
  }
  to{
    opacity: 0.05;
  }
}

@keyframes show {
  from{
    opacity: .8;
    transform: scale(1);
  }
  to{
    opacity: 1;
    transform: scale(1.05);
  }
}
</style>
