<template>
  <div class="news_list">
    <Top />
    <div class="banner"></div>
    <div class="box">
      <ul class="list">
        <li v-for="(n, index) in list" :key="index">
          <div class="news">
            <div class="news_img"><img :src="n.better_featured_image.source_url" alt=""></div>
            <h2><router-link :to="{'name': 'newsDetail', query: {newsId: n.id}}">{{ n.title.rendered }}</router-link></h2>
            <p v-html="n.excerpt.rendered"></p>
            <h5>
              [{{ n.date }}]
              <router-link :to="{'name': 'newsDetail', query: {newsId: n.id}}">更多详情 >></router-link>
            </h5>
          </div>
        </li>
      </ul>
    </div>
    <FooterBox footer-class="relative" />
  </div>
</template>

<script>
import Top from "@/components/pc/Top.vue";
import FooterBox from "@/components/pc/Footer.vue";
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
  .box{
    width: 1202px;
    margin: 0 auto;
  }
  .banner {
    height: 355px;
    margin-top: 90px;
    background: url(../../assets/news/banner.png) no-repeat center;
  }
  .list{
    padding: 130px 0;
    li{
      padding: 14px 0;
      border-bottom: 1px solid #f7f7f7;
      clear: both;
      &:last-child{border: none}
      .news{
        .clear;
        padding: 38px 30px;
        text-align: left;
        .news_img{
          width: 223px;
          height: 143px;
          margin-right: 40px;
          float: left;
          img{
            width: 223px;
            height: 143px;
          }
        }
        h2{
          font-size: 24px;
          a{
            color: #5c5b5b;
          }
        }
        & > p{
          padding-top: 20px;
          line-height: 30px;
          font-size: 18px;
          height: 60px;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #929292;
        }
        h5{
          padding-top: 16px;
          font-size: 14px;
          color: #929292;
          a{
            float: right;
            font-size: 18px;
            color: #929292;
            :hover{
              color: #43cfcd;
            }
          }
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