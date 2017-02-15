// JavaScript Document
var mySwiper = new Swiper('.swiper-container',{
  loop : true,       //循环
  autoplay: 3000,    //可选选项，自动滑动
})

$(document).ready(function(){
   //viewport-index页面最少一屏
   var wH=$(window).height();
   var wW=$(window).width();
   $(".viewport-hotel").css("minHeight",wH);
   
   //行高
   for(var i=0; i<$(".hotel-search ul li").length; i++){
      var hotelSeachH=$(".hotel-search ul li").eq(i).height()+"px";
	  $(".hotel-search ul li .i-l").eq(i).css("lineHeight",hotelSeachH);
   }
   
  //高度控制底部
  if(wH<=567){
      $(".viewport-hotel .foot").css("position","inherit");
  }else{
	  $(".viewport-hotel .foot").css("position","absolute");
  }

  //点击全日房钟点房
  $(".switch-list li").on("click",function(){
     $(".switch-text .hotel-search").eq($(this).index()).show().siblings().hide();
  });
  $(".switch-list li:odd").on("click",function(){
    $(".tabview-panels").css("left","50%");
  });
  $(".switch-list li:even").on("click",function(){
    $(".tabview-panels").css("left","0");
  });
  
  ///定位失败提示
   $(".ddd").on("click",function(){
	layerAll();
   });
 

});