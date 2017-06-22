/**
 * Created by qiufeng on 2017/6/2.
 */

var channleSize = 39;

$(document).ready(function(){

    // 案例分析 slider 初始化
    var caseSwiper = new Swiper('.swiper-container', {
        initialSlide: 2,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        //pagination : '.swiper-pagination',
        autoplay: 2500,
        keyboardControl:true,
        noSwiping: true,
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        effect: "coverflow",
        coverflow: {
            rotate: 0,
            stretch:-75,
            depth: 500,
            modifier: 1,
            slideShadows: true
        },
        slidesPerView: 'auto',
        spaceBetween:20,
        onSlideChangeEnd:function (swiper) {
            var caseSlideChildren = $("#case-swiper-slide").children();
            caseSlideChildren.find("img.case-analysts-idx-show").hide();
            caseSlideChildren.find("img.case-analysts-bs").show();
            var idx = swiper.activeIndex;
            caseSlideChildren.eq(idx).find("img.case-analysts-bs").hide();
            caseSlideChildren.eq(idx).find("img.case-analysts-idx-show").show();
        },
        onClick:function (swiper) {
            return;
            var actIdx = swiper.activeIndex;
            var clickIdx = swiper.clickedIndex;
            if (actIdx == clickIdx) {
                $("#modal-info").modal("show");
            }
        }
    });
    //滚动 显示 效果
    $(".smoove-service").smoove({
        offset:0,
        moveZ:'-500px'
    })


    //合作品牌
    $("div.cooperation-brand img").smoove({
        offset:0,
        rotateY:'90deg'
    });

    $(".smoove-1").smoove({
        offset:0,
        moveY:'350px'

    });
    $(".smoove-2").smoove({
        offset:0,
        moveY:'350px'
    });
    $(".smoove-3").smoove({
        offset:0,
        moveY:'350px'
    });
    $(".smoove-4").smoove({
        offset:0,
        moveY:'350px'
    });
    $(".smoove-5").smoove({
        offset:0,
        moveY:'350px'
    });


    initPosition();
});

//位置地图
function initPosition() {
    var map = new AMap.Map('position',{
        zoom: 18,
        center: [120.178767,30.214251]
    });
    var marker = new AMap.Marker({
        position: [120.178767,30.214251],
        map:map,
        title: '杭州市上城区飞云江路9号赞成中心西楼807',
        clickable:true
    });
}

