<template>
  <div class="news_list">
    <Top />
    <div class="banner"><img src="../../assets/mobile/news/banner.jpg" alt=""></div>
    <div class="box">
      <ul class="list">
        <li v-for="(n, index) in list" :key="index">
          <div class="news">
            <router-link :to="{'name': 'newsDetail', query: {newsId: n.id}}">
            <div class="news_img"><img :src="n.better_featured_image.source_url" alt=""></div>
            <h5>{{ n.date }}</h5>
            <h2>{{ n.title.rendered }}</h2>
            <p v-html="n.excerpt.rendered"></p>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <FooterBox footer-class="relative" />
  </div>
</template>

<script>
import Top from '@/components/mobile/Top.vue';
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
      list: []
    }
  },
  created() {
    loadNews('http://api.lkbt.pro/wp-json/wp/v2/posts?categories=4&page=1').then(res => {
      this.list = res.data;
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
.news_list {
  .banner{
    margin-top: 90px;
    img{
      width: 100%;
      display: block;
    }
  }
  .list{
    padding: 15px 0;
    li{
      border-bottom: 1px solid #a0dddd;
      clear: both;
      &:last-child{border: none}
      .news{
        .clear;
        padding: 38px 30px;
        text-align: left;
        a{
          color: #5c5b5b;
          h2{
            color: #70cccc;
          }
        }
        .news_img{
          padding-bottom: 25px;
          img{
            width: 100%;
            display: block;
          }
        }
        h2{
          font-size: 30px;/* font */
          padding-bottom: 20px;
        }
        p{
          line-height: 40px;
          font-size: 26px;/* font */
          height: 120px;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          color: #929292;
        }
        h5{
          padding-bottom: 16px;
          font-size: 24px;/* font */
          color: #6c6c6c;
        }
        &:hover{
          background: #f4fcfc;
          a{
            color: #43cfcd;
          }
        }
      }
    }
  }
}
</style>