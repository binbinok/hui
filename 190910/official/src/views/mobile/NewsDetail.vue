<template>
  <div class="news_detail">
    <Top />
    <div class="banner"><img src="../../assets/mobile/news/banner.jpg" alt=""></div>
    <div class="box">
      <div class="news">
        <div class="centent" v-if="news">
          <h1>{{ news.title.rendered }}</h1>
          <h5>{{ news.date }}</h5>
          <div v-html="news.content.rendered"></div>
        </div>
      </div>
    </div>
    <FooterBox footer-class="relative" />
  </div>
</template>

<script>
import Top from "@/components/mobile/Top.vue";
import FooterBox from "@/components/mobile/Footer.vue";
import { loadNews } from "@/utils/server";

export default {
  name: 'newsList',
  components: {
    Top,
    FooterBox
  },
  data() {
    return {
      news: null,
    }
  },
  created() {
    loadNews('http://api.lkbt.pro/wp-json/wp/v2/posts?categories=4&page=1').then(res => {
      this.news = res.data.find(n => n.id === +this.$route.query.newsId);
      console.log('---', this.news);
    }).catch(error => console.error(error));
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
.news_detail {
  .banner{
    margin-top: 90px;
    img{
      width: 100%;
      display: block;
    }
  }
  .news{
    padding: 66px 20px;
    .centent{
      color: #6c6c6c;
      h1{
        font-size: 36px;/* font */
        color: #70cccb;
        font-weight: bold;
        line-height: 40px;
        padding-bottom: 30px;
        text-align: center;
      }
      h5{
        font-size: 24px;/* font */
        padding-bottom: 15px;
        border-bottom: 1px solid #70cccc;/* no */
        font-weight: normal;
        text-align: center;
        margin-bottom: 60px;
      }
      h4{
        padding-top: 20px;
        text-align: left;
        font-size: 24px;
      }
      img{
        max-width: 100%;
      }
      p{
        padding: 10px 0;
        text-align: left;
        font-size: 24px;
        text-indent: 2em;
        line-height: 1.8em;
      }
      h6{
        font-size: 14px;
        
      }
      .img{
        width: 100%;
        display: block;
        margin: 20px 0;
      }
    }
  }
}
</style>