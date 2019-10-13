import { loadNews } from "./server";

let news = [];

export function getNews(id) {
  return new Promise((resolve, reject) => {
    var back = function () {
      resolve(id ? news.filter(n => n.id === id) : news);
    }
    if (news.join('')) {
      back();
    } else {
      loadNews('http://api.lkbt.pro/wp-json/wp/v2/posts?categories=4&page=1').then(res => {
        news = res.data;
        console.log('loaded')
        back();
      }).catch(error => console.error(error))
    }
  })
}