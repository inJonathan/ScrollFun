var ScrollFun = function(option) {
    // 默认配置
    option.name ? option.name = option.name : option.name = "Jon";

    // 初始化函数
    ScrollFun.prototype.init = function() {
        $(option.elem).each(function(i, j) {
            $(j).css('visibility', 'hidden').addClass('animated');
        });

        // 首屏载入动画
        var winHeigh = $(window).height();
        $(option.elem).each(function(i, j) {
            var elTop = $(j).offset().top;

            if(winHeigh > elTop) {
                var action = $(j).data('action');
                action ? action = action : action = "zoomIn";
                
                setTimeout(function() {
                    $(j).css('visibility', 'visible').addClass(action);
                }, 0);
            }

        });
        
        // 监听滚动载入动画
        window.onscroll = function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var winHeigh = $(window).height();

            $(option.elem).each(function(i, j) {
                var elTop = $(j).offset().top;

                if(scrollTop + winHeigh > elTop) {
                    var action = $(j).data('action');
                    action ? action = action : action = "zoomIn";
                    
                    setTimeout(function() {
                        $(j).css('visibility', 'visible').addClass(action);
                    }, 0);
                }

            });

        }

    }

}