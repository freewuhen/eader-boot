/**
 * Created by majibiao on 2017/2/7.
 */
$('.nav>ol>li>p').bind('mouseenter',
    function(){
        $(this).next('div').stop().slideDown();
        $(this).find('b').addClass('bb');
        $(this).addClass('aa');
    }
);
$('.nav>ol>li').bind('mouseleave',
    function(){
        $(this).children('div').stop().slideUp();
        $(this).find('b').removeClass('bb');
        $(this).find('p').removeClass('aa');
    }
);
$('.nav>ol>li>p').click(function(){
    $(this).addClass('cc')
        .parent().siblings('li').find('p').removeClass('cc');
})
//����Ч��
$('#sideout div').mouseenter(function(){
    $(this).children('a').css('left','-140px');
});
$('#sideout div').mouseleave(function(){
    $(this).children('a').css('left','60px');
});
$('#sideout .totop').click(function(){
    $("html,body").animate({scrollTop:0}, 500);
});

//导航吸顶
$(window).scroll(function(){
	var toTop=$(window).scrollTop();
	if(toTop<90){
		$('header').css({'position':'relative','z-index':99,'background':'#fff','top':0,'margin-top':0});
	}
	else{
		$('header').css({'position':'fixed','z-index':99,'background':'#fff','top':0,'margin-top':0});
	}
});
//	6大类class切换
$('.dmise_product>ul>li').click(function(){
	$('.dmise_product>ul>li>a').removeClass();
	$(this).find('a').addClass('dmisec_hover');
	$('.dimec_mobile>ol').hide().eq($(this).index()).show();
})

