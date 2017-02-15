// JavaScript Document
$(document).ready(function(){
   //viewport-index页面最少一屏
   var wH=$(window).height();
   $(".viewport-login").css("minHeight",wH);
   $(".viewport-register").css("minHeight",wH);
   $(".viewport-register-success").css("minHeight",wH);
   $(".viewport-login-success").css("minHeight",wH);
   
   
   
    var wW=$(window).width();
    var promptH=$(".prompt").outerHeight();
	var promptW=$(".prompt").outerWidth();
	var promptTop=(wH-promptH)/2;
	var promptLeft=(wW-promptW)/2;
	$(".prompt").css({
	     "top" : promptTop,
		 "left" : promptLeft
	});
   
   //点击确定显示提示框
  $(".btns").on("touchstart",function(){
     $(".prompt").addClass("prompt-on");
	 setTimeout(time,1500);	  	  
  });
  function time(){
	 if($(".prompt").hasClass("prompt-on")){
		$(".prompt").removeClass("prompt-on");
	 }
  };
  
  //完善信息 - 身份证弹出框
   $(".sub-id-top").on("touchstart",function(){
      $('.id-pop').fadeIn(); 
	  var memberPopH=(wH-($(".id-pop-list").height()))/2;
      $(".id-pop-list").css("top",memberPopH);   
   });
   
   $(".id-pop").on("touchstart",function(e){   	  
	var target = $(e.target);    // 如果#btn下面还有子元素，可使用 !target.is('#btn *') && !target.is('#overlay *')  ????
    if(!target.is('.id-pop-list *')){
       if($('.id-pop-list').is(':visible')){
	      $('.id-pop').fadeOut();
	   }
    }  
   });
   
   $(".id-pop-list ul li").on("touchstart",function(){  
	  if($(this).find("i").size()>=1){
	      return false;
	   }else{
	     $(this).append("<i class='iconfont'>&#xe603;</i>").siblings().find("i").remove(); 
	   } 
	   $(this).addClass("on").siblings().removeClass("on");
	  if($(this).hasClass("on")){
	      $(".span-text").text($(this).find("span").text());
		  $('.id-pop').fadeOut();
	  }  
   });
  
     
});