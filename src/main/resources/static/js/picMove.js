

(function ($) {
    if(($(window).width())<=500) {
        var nav = $('#mynav')
        //如果是移动端，将nav隐藏
        nav.hide();
    }
        $.fn.extend({
            fade: function (opt) {
                //设置默认值
                var settings = {
                    url: null,
                    boxWid: '100%',
                    boxHei: 396,
                    times: 2000
                };
                //合并参数
                var o = $.extend(settings, opt);
                //缓存容器对象
                var $box = this;
                var $oUl = $('<ul></ul>');
                var $prev = $('<h3>&lt;</h3>');
                var $next = $('<h3>&gt;</h3>');
                //创建图片元素
                $.each(o.url, function (index, items) {
                    $box.append('<div><a href=' + items.href + '><img src=' + items.imgUrl + ' /></a></div>');
                    $oUl.append('<li></li>');
                });
                $box.append($oUl, $prev, $next);
                /*****设置样式*****/
                //容器及图片样式
                $box.css({
                    width: o.boxWid,
                    height: o.boxHei,
                    position: 'relative'
                }).children('div').css({
                    width: o.boxWid,
                    height: o.boxHei,
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    display: 'none'
                }).eq(0).show().end().find('a,img').css({
                    display: 'block',
                    width: '100%',
                    height: '100%'
                });
                //焦点及左右按钮样式
                $oUl.css({
                    position: 'absolute',
                    bottom: 50,
                    right: 100,
                    overflow: 'hidden',
                    zIndex: 5,
                    listStyle: 'none'
                }).children('li').css({
                    float: 'left',
                    right:80,
                    bottom:50,
                    width: 50,
                    height: 3,
                    background: '#fff',
                    marginRight: 4
                }).eq(0).css({height: 5,backgroundColor: '#ff9600'});
                $box.children('h3').css({
                    position: 'absolute',
                    top: (o.boxHei - 70) / 2,
                    margin:'0 80px',
                    padding: '25px 15px',
                    fontSize: 40,
                    fontFamily: '黑体',
                    color: '#fff',
                    borderRadius:6,
                    background: 'rgba(0,0,0,0.4)',
                    cursor: 'pointer'
                }).hide().eq(-1).css('right', '0');
                //自动轮播
                var $timer = setTimeout(move, o.times);
                var $flag = true;
                var $index = 0;

                function move() {
                    $index++;
                    if ($index == o.url.length) {
                        $index = 0;
                    }
                    //图片切换
                    $box.children('div').eq($index).stop().fadeIn(300, function () {
                        if ($flag) {
                            clearTimeout($timer);
                            $timer = setTimeout(move, o.times);
                        }
                    }).siblings('div').stop().fadeOut(300);
                    //焦点切换
                    $oUl.children('li').eq($index).stop().css({height: 5,backgroundColor: '#ff9600'}).siblings('li').stop().css({height: 3,backgroundColor: '#fff'});
                }
                //焦点切换
                $oUl.children('li').click(function () {
                    $index = $(this).index();
                    $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                    $(this).stop().css({height: 5,backgroundColor: '#ff9600'}).siblings('li').stop().css({height: 3,backgroundColor: '#fff'});
                });
                //左右点击切换
                $box.hover(function () {
                    $flag = false;
                    clearTimeout($timer);
                    $(this).children('h3').stop().fadeIn(300);
                    $prev.off('click').click(function () {
                        $index--;
                        if ($index == -1) {
                            $index = o.url.length - 1;
                        }
                        $box.children('div').eq($index).stop().fadeIn(300).siblings('div').fadeOut(300);
                        $oUl.children('li').eq($index).stop().css({height: 5,backgroundColor: '#ff9600'}).siblings('li').stop().css({height: 3,backgroundColor: '#fff'});
                    }).next('h3').off('click').click(function () {
                        $index++;
                        if ($index == o.url.length) {
                            $index = 0;
                        }
                        $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                        $oUl.children('li').eq($index).stop().css({height: 5,backgroundColor: '#ff9600'}).siblings('li').stop().css({height: 3,backgroundColor: '#fff'});
                    })
                }, function () {
                    $flag = true;
                    $timer = setTimeout(move, o.times);
                    $(this).children('h3').stop().fadeOut(300)
                });
                //阻止文本被选中
                $box.children('h3').each(function(index,items){
                    items.onselectstart = items.onmousedown = items.onmouseup = function(){
                        return false;
                    }
                });
                //返回容器对象
                return this;
            }
        })
    // }

}(jQuery))
