/**
 * Created by majibiao on 2016/10/1.
 */
//�ֲ�Ч��
$(document).ready(function () {
    //alert($(window).width());
    var list;


    if(($(window).width())<=1366){
        list = [{
            imgUrl: 'img/0208.jpg',
            href: 'aboutEnterprise.html'
        },{
            imgUrl: 'img/0102.png',
            href: 'newsdetail.html?id=270'
        },{
            imgUrl: 'img/carclone021_1.jpg',
            href: 'newsdetail.html?id=91'
        }, {
            imgUrl: 'img/cnas.jpg',
            href: 'productMASD.html'
        }, {
           imgUrl: 'img/car05.png',
            href: 'newsdetail.html?id=6'
        },  {
            imgUrl: 'img/car06.jpg',
            href: 'newsdetail.html?id=5'
        }
        ];

        $('#box').fade({
            url: list,
            boxWid:1366,
            boxHei:396
        }).css({
            margin:'0 auto'
        })
    }else{
        list = [{
            imgUrl: 'img/0208-1.jpg',
            href: 'aboutEnterprise.html'
        }, {
            imgUrl: 'img/0102-1.jpg',
            href: 'newsdetail.html?id=270'
        }, {
            imgUrl: 'img/carclone021_1.jpg',
            href: 'newsdetail.html?id=91'
        }, {
            imgUrl: 'img/cnas.jpg',
            href: 'productMASD.html'
        }, {
            imgUrl: 'img/carclone05.png',
            href: 'newsdetail.html?id=6'
        }, {
            imgUrl: 'img/carclone06.png',
            href: 'newsdetail.html?id=5'
        }
        ];

        $('#box').fade({
            url: list,
            boxWid:'100%',
            boxHei:396
        }).css({
            margin:'0 auto'
        })
    }

})
$(window).scroll(function(){
    var mTop = $('.platform').offset().top;
    var dTop = $('.detection').offset().top;
    var ssTop = $('.support').offset().top;
    var sTop = $(window).scrollTop();
//  alert(sTop)
    //console.log(sTop);
    if((mTop-sTop>300)||(sTop-mTop>100)){
        $('.platform').addClass('flyright').removeClass('flyleft');
    }else{
        $('.platform').addClass('flyleft').removeClass('flyright');
    }
    if((dTop-sTop>300)||(sTop-dTop>100)){
        $('.detection').addClass('flyright').removeClass('flyleft');
    }else{
        $('.detection').addClass('flyleft').removeClass('flyright');
    }
    if((ssTop-sTop>300)||(sTop-ssTop>100)){
        $('.support').addClass('outleft').removeClass('outright');
    }else{
        $('.support').addClass('outright').removeClass('outleft');
    }
})