// JavaScript Document

$(document).ready(function(){
   //viewport-index页面最少一屏
   var wH=$(window).height();
   $(".viewport-member").css("minHeight",wH);
   
   //双数向上减一个像素
   $(".member-bottom ul li:odd").css("marginTop","-1px");
   $(".member-bottom ul .phone,.member-bottom ul .password").css("marginTop","-1px");
   $(".member-bottom ul .mailbox").css("marginTop",".5rem");
   
   //退出登录
   $(".quit").on("touchstart",function(){
     $(".member-leave-layer").slideDown();
	 var leaveTextTop=(wH-($(".leave-text").height()))/2;
	 $(".leave-text").css("top",leaveTextTop);
   });
   $(".member-leave-layer").on("touchstart",function(e){
      var target = $(e.target); 
	  if(!target.is('.leave-text *')){
	    if($('.leave-text').is(':visible')){
	      $('.member-leave-layer').slideUp();
	   }
	  }
   });
   $(".cancel").on("touchstart",function(e){
     $('.member-leave-layer').slideUp();
   }); 
     
   //身份证弹出框
   $(".sub-id-top").on("touchstart",function(){
      $('.member-pop').fadeIn(); 
	  var memberPopH=(wH-($(".member-pop-list").height()))/2;
      $(".member-pop-list").css("top",memberPopH);   
   });
   
   $(".member-pop").on("touchstart",function(e){   	  
	var target = $(e.target);    // 如果#btn下面还有子元素，可使用 !target.is('#btn *') && !target.is('#overlay *')  ????
    if(!target.is('.member-pop-list *')){
       if($('.member-pop-list').is(':visible')){
	      $('.member-pop').fadeOut();
	   }
    }  
   });
   
   $(".member-pop-list ul li").on("touchstart",function(){  
	  if($(this).find("i").size()>=1){
	      return false;
	   }else{
	     $(this).append("<i class='iconfont'>&#xe603;</i>").siblings().find("i").remove(); 
	   } 
	   $(this).addClass("on").siblings().removeClass("on");
	  if($(this).hasClass("on")){
	      $(".span-text").text($(this).find("span").text());
		  $('.member-pop').fadeOut();
	  }  
   });
   
  //付费升级切换积分升级
  $(".info-bottom ul li").on("touchstart",function(){
     $(this).addClass("on").siblings().removeClass("on");
	 $(".info-list-all .info-b-list").eq($(this).index()).show().siblings().hide();
  }); 
  $(".info-b-list p").on("touchstart",function(){
	  if($(this).find("i-start").size()>=1){
	     return false;
	  }else{
	     $(this).append("<i class='i-end iconfont'>&#xe603;</i>").siblings().find(".i-end").remove();
	  }
      $(this).addClass("on").siblings().removeClass("on");
  });
  
  //收藏酒店
  $(".edit").on("touchstart",function(){
      $(".collect").addClass("collect-show");
	  //点击dd列表
	  $(".collect-dl dd").on("touchstart",function(){
	      $(this).toggleClass("on");
		  //
          if($(this).parent(".collect-dl").find("dd").size()==$(this).parent(".collect-dl").find(".on").size()){
			$(this).parent(".collect-dl").addClass("num")
		  }else{
		    $(this).parent(".collect-dl").removeClass("num")
		  }
      });  
  });
  
  $(".collect-a").on("touchstart",function(){
	 $(".collect .on").remove(); 
	 $(".collect .num").remove(); 
	 //$(".collect").removeClass("collect-show");
  });	
  
  //点击确定显示提示框
  $(".e-mail-a").on("touchstart",function(){
     $(".prompt").addClass("prompt-on");
	 setTimeout(time,1500);	  	  
  });
  function time(){
	 if($(".prompt").hasClass("prompt-on")){
		$(".prompt").removeClass("prompt-on");
	 }
  }
	  

});