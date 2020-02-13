<template>
  <div class="applicationscenaios">
    <Top/>
    <div class="banner"><img src="../../assets/mobile/application/banner.jpg" alt=""></div>
    <div class="box">
      <div class="title what_is_leben">什么是LEBEN</div>
      <div class="what">
        <div class="left">
          <img src="../../assets/leben_img.jpg" alt="">
        </div>
        <div class="right">
          <p>LEBEN是一个以“医疗知识深度共享”与“医疗数据可信交换”为主要技术特点的，融合了人工智能技术与大数据的，面向全球的医疗产业智能合约协作平台。</p>
          <p>LEBEN的愿景为“全球医疗均质化”，此处“均质化”是指：在LEBEN平台的帮助下，让医疗条件并不发达地区的医疗水平，无限趋近于医疗条件发达的地区。</p>
          <p>LEBEN的可信计算技术，能够使交换过程中的数据不可复制、不可迁移、也不可见，以保证医疗数据可以进行跨机构、跨地区以及跨境的可信数据交换。</p>
        </div>
      </div>
    </div>
    <div class="future">
      <div class="box">
        <img src="../../assets/mobile/application/future.jpg" alt="">
      </div>
      <div class="app_btn">
        <div>
          <a href="https://leben.pro/" target="_blank">了解详情</a>
        </div>
      </div>
      <div class="box">
        <img src="../../assets/mobile/application/future_footer.jpg" alt="">
      </div>
    </div>
    <div class="detail">
      <div class="box"><img src="../../assets/mobile/application/tree.jpg" alt=""></div>
      <div>
        <h2>
          <p>LKBT将配合LEBEN的思维投影技术（Mind Project）将超级医生的知识变为可计算、可执行的临床决策路径，并实现远程投放。过程中应用链各方均会使用LKBT作为交易计算服务系统。随着LEBEN平台使用规模和需求的增加，LKBT价值也将持续升高。</p>
        </h2>
      </div>
    </div>
    <FooterBox footer-class="relative" />
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/mobile/Top.vue';
import FooterBox from '@/components/mobile/Footer.vue';
import observer from "@/utils/observer";

export default {
  name: 'applicationscenaios',
  components: {
    Top,
    FooterBox
  },
  mounted() {
    observer(this);
  },
  data() {
    return {
      netInfo: null,
      net: [
        {
          name: 'btn1',
          title: '安全机制',
          content: '区块链能构筑安全、可信的存储与交易网络的核心是其安全机制和密码算法，LKBT采用了可扩展哈希函数、可插拔公钥密码'
        },
        {
          name: 'btn2',
          title: '共识机制',
          content: 'LKBT采用LkbtBFT共识协议的BFT机制来实现所有验证者节点就将要执行的交易及其执行顺序达成一致。Lkbt'
        },
        {
          name: 'btn3',
          title: '目录索引链',
          content: '目录索引链，是数据、知识、算法资产化的可信存储媒介，是资产形式化后的可信流通渠道，是可交换资产价值发掘的可信交易'
        },
        {
          name: 'btn4',
          title: '安全机制',
          content: '区块链能构筑安全、可信的存储与交易网络的核心是其安全机制和密码算法，LKBT采用了可扩展哈希函数、可插拔公钥密码'
        },
        {
          name: 'btn5',
          title: '网关与稳定币',
          content: '一体化稳定币平台是LKBT构建互操作性经济生态系统的重要部分。将通过资产网关，对接已经存在的稳定币例如Libra'
        }
      ],
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
.title{
  font-size: 24px;
  padding-top: 50px;
  color: #43cfcd;
  text-align: center;
  margin: 50px 100px 0;
  
  &.future_data_assets{
    background: url('../../assets/future_data_assets.png') no-repeat center;
    background-size: contain;
  }
  &.technical_system{
    background: url('../../assets/technical_system.png') no-repeat center;
    background-size: contain;
  }
  &.application_scenarios{
    background: url('../../assets/application_scenarios.png') no-repeat center;
    background-size: contain;
  }
  &.what_is_leben{
    background: url('../../assets/what_is_leben.png') no-repeat center;
    background-size: contain;
  }
  &.core_team{
    margin-top: 0;
    color: #fff;
    background: url('../../assets/core_team.png') no-repeat center;
    background-size: contain;
  }
  
}
.applicationscenaios{
  position: relative;
  .banner{
    margin-top: 90px;
    img{
      width: 100%;
    }
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
  .what{
    .clear;
    .left{
      padding: 60px 0 40px;
      text-align: center;
      img{
        width: 490px;
      }
    }
    .right{
      margin: 0 20px;
      padding: 20px;
      background: #f6fcfc;
      border: 4px solid #edf7f8;/* no */
      border-radius: 20px;
      p{
        text-align: left;
        text-indent: 2em;
        line-height: 1.5em;
        font-size: 24px;
        color: #88cacb;
      }
    }
  }

  .future{
    background: #f5fcfc;
    text-align: center;
    margin-top: 40px;
    .box{
      img{
        width: 100%;
        display: block;
      }
      .clear;
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
            top: 404px;
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
    }
    .app_btn{
      .button_style;
      border-radius: 30px;
      margin: 40px 0;
      & > div {
        border-radius: 23px;
        background: linear-gradient(120deg, #81d5d3, #6acddb);
        width: 322px;
        height: 74px;
        line-height: 74px;
        color: #fff;
        font-size: 42px;
        font-weight: bold;
        a{
          text-align: center;
          color: #fff;
          display: block;
        }
      }
    }
    li{
      margin-right: 58px;
      float: left;
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
    padding: 52px 0;
    & > div{
      position: relative;
      &.box{
        img{
          width: 100%;
        }
      }
    }
    h2{
      p{
        padding: 20px;
        margin: 20px;
        font-size: 24px;
        line-height: 1.5em;
        color: #88cacb;
        font-weight: normal;
        text-indent: 2em;
        text-align: left;
        background: #f6fcfc;
        border: 4px solid #edf7f8;/* no */
        border-radius: 15px;
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
</style>
