# ScrollFun.js - 让页面滚动更有趣
ScrollFun.js可以让你的页面在滚动时播放动画，使页面更有趣  
  
1、引入文件  
```<script src="ScrollFun.min.js" type="text/javascript" charset="utf-8"></script>```  
  
2、HTML  
```<div class="myfun data-action="fadeInLeft"></div>```  
  
也可以添加动画播放的延迟时间，加入data-delay属性，这里演示延迟1.5秒  
```<div class="myfun data-action="fadeInLeft" data-delay="1500"></div>```  
  
3、JavaScript  
```
var sfun = new ScrollFun({  
    elem: ".myfun", // 定义元素名  
    offset: "40" // 距离底部多少开始播放动画，默认0  
});  
sfun.init(); // 初始化ScrollFun  
```  
