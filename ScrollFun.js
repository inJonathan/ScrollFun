var ScrollFun = function(option) {
	// 默认配置
	option.name ? option.name = option.name : option.name = "Jon";

	// 初始化函数
	ScrollFun.prototype.init = function() {
		
		$(option.elem).css('color', 'red');
		
		window.onscroll = function (){
			var s = document.documentElement.scrollTop || document.body.scrollTop; 
		    console.log(s);
		}
		
		
	}

}