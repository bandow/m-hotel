// JavaScript Document
$(document).ready(function(){
   //viewport-index页面最少一屏
   var wH=$(window).height();
   $(".viewport-coupons").css("minHeight",wH);
   
   //clr-b的padding-top
   for(var i=0;i<$(".coupons-list-t .clr-b").length;i++){
	   var tH=$(".clr-t").eq(i).height();
	   var bH=$(".clr-b").eq(i).height();
	   var bhTop=(tH-bH)/2;
	   $(".coupons-list-t .clr-b").eq(i).css("padding-top",bhTop);
   }
   
   //选择卡劵
   $(".choice").on("click",function(){
      $(this).addClass("choice-on").siblings().removeClass("choice-on");
   });
});

//Javascript window
window.onload=function(){
  var couponsTopH=$(".coupons-top").height();
  var headerH=$("#header").height();
  var hh=couponsTopH+headerH;
  $(".wrapper-coupons").css("paddingTop",hh);
}