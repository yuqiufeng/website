/**
 * Created by qiufeng on 2017/6/2.
 */

var channleSize = 39;

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



    //微信 微博 二维码  显示／关闭
    $(".social-logo").hover(
        function(){
            var QRcode = $(this).data("qrCode");
            $(this).parent().parent().find("img." + QRcode).show();
        },
        function(){
            var QRcode = $(this).data("qrCode");
            $(this).parent().parent().find("img." + QRcode).hide();
        }
    );

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
        moveY:'-800px'

    });
    $(".smoove-2").smoove({
        offset:0,
        moveX:'-800px'

    });
    $(".smoove-3").smoove({
        offset:0,
        moveX:'800px'

    });
    $(".smoove-4").smoove({
        offset:0,
        rotateY:'90deg'

    });
    $(".smoove-5").smoove({
        offset:0,
        moveZ:'-800px'

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

