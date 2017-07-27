# ScrollFun.js - 让页面滚动更有趣
ScrollFun.js可以让你的页面在滚动时播放动画，使页面更有趣   *[在线DEMO](http://scrollfun.cc)

1、引入[animate.css](https://github.com/daneden/animate.css)  
```<link rel="stylesheet" type="text/css" href="animate.min.css" />```  

2、引入文件（支持jquery和zepto）  
  
```
<script src="zepto.min.js" type="text/javascript" charset="utf-8"></script>
<script src="ScrollFun.min.js" type="text/javascript" charset="utf-8"></script>
```  
  
3、HTML  
  
```<div class="myfun" data-action="fadeInLeft"></div>```  
  
可以添加动画播放的延迟时间，加入data-delay属性，这里演示延迟1.5秒  
  
```<div class="myfun data-action="fadeInLeft" data-delay="1.5s"></div>```  
  
也可以设置动画的持续时间，加入data-duration属性，这里演示持续2秒  
  
```<div class="myfun data-action="fadeInLeft" data-duration="2s"></div>```  
  
4、JavaScript  
```
var sfun = new ScrollFun({  
    elem: ".myfun", // 定义元素名  
    offset: "40" // 距离底部多少开始播放动画，默认0  
});  
sfun.init(); // 初始化ScrollFun  
```
