// JavaScript Document
$(document).ready(function(){
   //viewport-index页面最少一屏
   var wH=$(window).height();
   $(".viewport-join").css("minHeight",wH);

   //品牌资讯
   $(".information ul li:odd").css("background-color","#fff");
   $(".information ul li:even").css("background-color","#f9eae4");
   
   //精途
   var Jimg=$(".jingtu-t img").height()+'px';
   $(".jingtu-t span").css("lineHeight",Jimg);
   
   //怡程
   var Yspan=$(".yicheng-t span").height();
   var Yimg=$(".yicheng-t img").height();
   var YimgT=(Yspan-Yimg)/2+'px';
   $(".yicheng-t img").css("paddingTop",YimgT);

});