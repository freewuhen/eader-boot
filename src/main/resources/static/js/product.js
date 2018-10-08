/**
 * Created by majibiao on 2016/10/10.
 */
$(window).scroll(function(){
    var cpjjTop = $('.cpjjff').offset().top;
    var cpysTop = $('.cpysff').offset().top;
    var sTop = $(window).scrollTop();
    if((cpjjTop-sTop>400)||(sTop-cpjjTop>100)){
        $('.cpjjff').addClass('flyright').removeClass('flyleft');
    }else{
        $('.cpjjff').addClass('flyleft').removeClass('flyright');
    }
    if((cpysTop-sTop>300)||(sTop-cpysTop>100)){
        $('.cpysff').addClass('outleft').removeClass('outright');
    }else{
        $('.cpysff').addClass('outright').removeClass('outleft');
    }
    if(sTop<1700){
    	$('.chapyfcontainer div').fadeOut();
    }else{
    	$('.chapyfcontainer div').fadeIn();
    }
});