import Swiper from "swiper";

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    on:{
        touchEnd: event => {
            console.log('---', event);
        }
    }
});

console.log(mySwiper);