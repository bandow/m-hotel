//document load srart.....
$(document).ready(function(){
   //筛选左边列表高度
   var allH=$(window).height();
   var topH=$("#header").height();
   var H=allH-topH;
   $(".screen-scroller .l").css("min-height",H);
   $(".screen-scroller .r").css("min-height",H);
   $(".screen-scroller").css("min-height",H);
   
   //触第一层发列表
   $(".screen-scroller .l ul li").on("touchstart",function(){
      $(this).addClass("on").siblings().removeClass("on");
	  $(".screen-scroller .r .list").eq($(this).index()).show().siblings().hide();
   });
   $(".activity li,.administration dl dd,.price li").on("touchstart",function(){
	   if($(this).find(".i-end").size()>=1){
	     return false;
	   }else{   
		$(this).append("<i class='i-end iconfont'>&#xe603;</i>").siblings().find(".i-end").remove();
	   }
   });
   //触发位置列表
   $(".list .position li p").on("touchstart",function(){
	  $(this).parents("li").toggleClass("on");
      $(this).parents("li").find(".administration").slideToggle(300);	  
   });  
});



