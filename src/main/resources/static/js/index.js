/**
 * Created by qiufeng on 2017/6/2.
 */

$(document).ready(function(){
    // 案例分析 slider 初始化
    var caseSwiper = new Swiper('.swiper-container', {
        initialSlide: 2,
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });


})