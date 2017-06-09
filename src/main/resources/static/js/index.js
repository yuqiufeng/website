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

});

//合作渠道 列表
function listChannel() {
    var swiperCount = Math.ceil(channleSize / 25);

    var iEle = '';
    for (var i = 1; i <= swiperCount; i++) {
        var iHtml = '<div class="container cooperation-brand item">';
        if (i == 1) {
            iHtml = '<div class="container cooperation-brand item active">';
        }

        var j1 = (i - 1) * 5 + 1;
        var j2 = j1 + 4;
        var jEle = '';
        for (var j = j1; j <= j2; j++) {
            var jHtml = '<div class="row">';

            var k1 = (j - 1) * 5 + 1;
            var k2 = k1 + 4;

            var kEle = '';
            for (var k = k1; k <= channleSize && k <= k2; k++) {
                var kHtml = '<div class="col-md-2">';
                if (k == k1) {
                    kHtml = '<div class="col-md-2 col-md-offset-1">';
                }
                kHtml += '<img src="images/c-' + k + '.png" /></div>';
                kEle += kHtml;
            }
            jHtml += kEle;
            jHtml += '</div>';
            jEle + jHtml;
        }
        iHtml += jEle;
        iHtml += '</div>';
    }
    iEle += iHtml;
    console.log(iEle);
    $("#channel-list").empty().append(iEle);


}