<template>
  <div class="home">
    <Top/>
    <div class="banner"></div>
    <div class="box">
      <div class="title tteod">数据可信交易环境</div>
    </div>
    <div :class="{future: true, show: boxShow >= 1}">
      <div class="box">
        <div class="stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="main">
          <div class="tit">数据可信交易环境</div>
          <div class="i1">
            <div class="icon">
              <div>
                <img src="../../assets/data_icon1.png" alt="">
              </div>
            </div>
            <div class="info">
              <h2>数据三权分立</h2>
              <p>通过使用“安全多方加密运算”、沙箱化的数据传输等技术，能够实现数据所有权、数据使用权与数据执行权的明确区分。</p>
            </div>
          </div>
          <div class="i2">
            <div class="icon">
              <div>
                <img src="../../assets/data_icon2.png" alt="">
              </div>
            </div>
            <div class="info">
              <h2>数据不上链，链上只有数据目录</h2>
              <p>数据所有权归供应方所有，数据交换平台不存储供应方数据，而是将数据封装放入沙盒，只有持有沙盒秘钥的需求方才可查看数据。从而在</p>
            </div>
          </div>
          <div class="i3">
            <div class="icon">
              <div>
                <img src="../../assets/data_icon3.png" alt="">
              </div>
            </div>
            <div class="info">
              <h2>法律保障：GDPR</h2>
              <p>GDPR的通过意味着欧盟对个人信息保护及其监管达到了前所未有的高度，看成史上最严格的数据保护法案。</p>
              <p>世界上其他国家和地区政府积极配合，成为趋势。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail">
      <div>
        <h2></h2>
        <div :class="{icons: true, show: loadAnimate}"></div>
      </div>
    </div>
    <div class="box">
      <div class="title route_and_goal">路径和目标</div>
      <ul class="route" :class="{net: true, show: boxShow >= 2}">
        <li>
          <div class="icon1"></div>
          <p>从竞争格局出发，放弃互联网巨头的优势阵地，从商业银行古老的组织结构与技术路线上无法改变的环节入手。</p>
          <h5>重新建立交易场景的结构，改变银行-核心客户之间的关系格局。</h5>
        </li>
        <li>
          <div class="icon2"></div>
          <p>将银行的核心系统建立在客户系统中，放弃传统商业银行需要大力建设的资金、账户、数据的优势。</p>
          <h5>以金融科技产品、全球化的货币兑换服务以及人工智能应用形成新的利润点。</h5>
        </li>
        <li>
          <div class="icon3"></div>
          <p>在数字身份认证、数字货币的全球化流通、数据可信交换、金融人工智能等领域协同合作伙伴不断强化自身的竞争实力。 </p>
          <h5>建立更加广泛的开发者生态，为客户输出更有价值的应用服务。</h5>
        </li>
      </ul>
    </div>
    <div class="bg">
      <div class="box">
        <div class="title technical_system">技术体系</div>
        <div :class="{net: true, show: boxShow >= 3}">
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
    </div>
    <div class="application">
      <div class="box">
        <div class="title application_scenarios">应用场景</div>
        <div class="app_detail_cover" :class="{app_detail_cover: true, show: boxShow >= 4}">
          <img src="../../assets/application.png" alt="">
        </div>
        <div class="app_btn" :class="{app_detail_cover: true, show: boxShow >= 4}">
          <div>
            <router-link to="/applicationscenaios">了解更多</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="box">
        <div class="title core_team">核心团队</div>
        <ul :class="{show: boxShow >= 5}">
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
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/pc/Top.vue'
import FooterBox from '@/components/pc/Footer.vue'
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
      boxs: [0, 630, 2440, 3570, 4642, 5650],
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
      console.log('scroll', scroll);
      this.$data.boxShow = index;
      this.$data.loadAnimate = top < 0 ? true : false;
    }
  }
}
</script>

<style lang="less">
@import url('./common.less');
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
    background: url(../../assets/banner.jpg) no-repeat center;
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
    height: 700px;
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
    .main{
      position: relative;
      .tit{
        width: 120px;
        top:296px;
        left: 530px;
        position: absolute;
        color: #70cccc;
        font-size: 26px;
        font-weight: bold;
      }
      .i_common{
        position: absolute;
        background: url(../../assets/data_icon_bg.png) no-repeat;
        h2{
          color: #70cccc;
          font-size: 26px;
          font-weight: bold;
          line-height: 44px;
        }
        p{
          font-size: 20px;
          color: #737373;
          line-height: 1.5em;
          &::before{
            display: inline-block;
            width: 32px;
            content: '•';
          }
        }
        .info{
          text-align: left;
        }
        &:hover{
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
            &::before{
              color: #f8d143;
            }
          }
        }
      }
      .i1{
        .i_common;
        width: 702px;
        height:216px;
        z-index: 2;
        top: 48px;
        left: 354px;
        background-position: 188px 139px;
        .icon{
          float: left;
        }
        .info{
          padding-left: 230px;
        }
      }
      .i2{
        .i_common;
        width: 476px;
        height:396px;
        padding-left: 150px;
        z-index: 3;
        top: 241px;
        left: 575px;
        background-position: 0px -792px;
        .info{
          padding-left: 16px;
        }
      }
      .i3{
        .i_common;
        width: 578px;
        height: 386px;
        z-index: 4;
        top: 241px;
        left: 0px;
        background-position: 440px -1889px;
        .icon{
          position: absolute;
          right: 0;
          bottom: 0;
        }
        .info{
          padding-top: 55px;
          padding-right: 174px;
        }
      }
      .icon{
        .button_style;
        background: rgba(186, 288, 234, .3);
        border-radius: 100%;
        display: table;
        & > div{
          display: table-cell;
          vertical-align: middle;
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
  .bg1{
    padding-top: 172px;
    padding-bottom: 458px;
    background: url(../../assets/bg_top.png) no-repeat top center, url(../../assets/bg_bottom.png) no-repeat center bottom;
    background-color: #f4fcfc;
  }
  .detail{
    padding-top: 172px;
    padding-bottom: 458px;
    background: url(../../assets/bg_top.png) no-repeat top center, url(../../assets/bg_bottom.png) no-repeat center bottom;
    background-color: #f4fcfc;
    & > div{
      .box;
      position: relative;
    }
    h2{
      height: 444px;
      background: url(../../assets/lkbt.png) no-repeat center;
    }
    .icons{
      width: 100%;
      height: 430px;
      background: url(../../assets/icons.png) no-repeat center;
      position: absolute;
      top: 398px;
      left: 0;
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
  .route{
    padding-top: 78px;
    padding-bottom: 50px;
    .icon{
      width: 296px;
      height: 296px;
      background: url(../../assets/route_goal.png) no-repeat
    }
    &::after{
      content: '';
      display: block;
      height: 0;
      line-height: 0;
      font-size: 0;
      clear: both;
    }
    li{
      padding-left: 24px;
      padding-right: 120px;
      width: 296px;
      float: left;
      text-align: left;
      background:url('../../assets/li_bor.png') no-repeat right center;
      &:last-child{
        padding-right: 0;
        background: none;
      }
      .icon1{
        .icon;
        background-position: 0 0;
      }
      .icon2{
        .icon;
        background-position: 0 -600px;
      }
      .icon3{
        .icon;
        background-position: 0 -1200px;
      }
      p{
        padding-top: 24px;
        font-size: 20px;
        color: #737373;
        line-height: 1.5em;
      }
      h5{
        color: #82d2d2;
        font-size: 20px;
        padding-top: 10px;
      }
      &:hover{
        .icon1{
          background-position: 0 -300px;
        }
        .icon2{
          background-position: 0 -900px;
        }
        .icon3{
          background-position: 0 -1500px;
        }
        h5{
          color: #f8d143;
        }
      }
    }
  }
  .net{
    .clear;
    .onShow;
    padding-top: 90px;
    margin-bottom: 10px;
    .left {
      width: 600px;
      height: 585px;
      position: relative;
      background: url(../../assets/net.png) no-repeat 0 0;
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
              background-image: url(../../assets/icon2_2.png);
              background-position: center 40%;
            }
          }
        }
        &.btn2{
          top: 218px;
          left: 180px;
          & > div {
            i{
              background-image: url(../../assets/icon2_1.png);
            }
          }
        }
        &.btn3{
          top: 190px;
          left: 390px;
          & > div {
            i{
              background-image: url(../../assets/icon2_3.png);
              background-position: 65% center;
            }
          }
        }
        &.btn4{
          top: 415px;
          left: 124px;
          & > div {
            i{
              background-image: url(../../assets/icon2_4.png);
            }
          }
        }
        &.btn5{
          top: 434px;
          left: 434px;
          & > div {
            i{
              background-image: url(../../assets/icon2_5.png);
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
          background: #f4fcfc;
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
  .bg{
    padding-top: 40px;
    padding-bottom: 130px;
    background: url(../../assets/bg2_top.png) no-repeat center top, url(../../assets/bg2_bottom.png) no-repeat center bottom;
    background-color: #f4fcfc;
  }
  .application{
    padding-top: 40px;
    padding-bottom: 150px;
    .app_detail_cover{
      .onShow;
      margin-top: 94px;
      padding: 96px 65px;
      background: #f4fcfc;
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
      background: url(../../assets/team2.jpg) no-repeat center top;
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
                background-image: url(../../assets/lang.png)
              }
              &.justin{
                background-image: url(../../assets/justin.png)
              }
              &.evan{
                background-image: url(../../assets/evan.png)
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
