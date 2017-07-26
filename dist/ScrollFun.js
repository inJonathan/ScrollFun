/*ScrollFun v1.0 - 2017-7-26 - JonathanCho - https://github.com/inJonathan/ScrollFun*/
var ScrollFun = function(option) {
    // 默认配置
    option.offset ? option.offset = option.offset : option.offset = "0"; // 开始播放动画距离

    // 初始化函数
    ScrollFun.prototype.init = function() {
        $(option.elem).each(function(i, j) {
            $(j).css('visibility', 'hidden').addClass('animated');
        });

        // 首屏载入动画
        commonAnimate();

        // 监听滚动载入动画
        window.onscroll = function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            commonAnimate(scrollTop);
        }

        // 动画公用函数
        function commonAnimate(scrollTop) {
            var winHeigh = $(window).height();
            var offset = 0;

            if (scrollTop) {
                // 如果不是首屏
                scrollTop = scrollTop;
                offset = option.offset;
            } else {
                scrollTop = 0;
                offset = 0;
            }

            $(option.elem).each(function(i, j) {
                var elTop = $(j).offset().top;

                if(scrollTop + winHeigh - parseInt(offset) > elTop) {
                    var action = $(j).data('action');
                    var delay = $(j).data('delay');
                    action ? action = action : action = "zoomIn";
                    delay ? delay = delay : delay = "0";

                    setTimeout(function() {
                        $(j).css('visibility', 'visible').addClass(action);
                    }, parseInt(delay));
                }

            });
        }

    }

}