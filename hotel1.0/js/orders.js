// JavaScript Document
$(document).ready(function(){	
	var wH=$(window).height();
	var wW=$(window).width();
    $(".viewport-orders,.viewport-orders-success,.viewport-booking-success,.viewport-hour-date").css("minHeight",wH);
	
	//点击入住人
	$(".orders-i-01").on("touchstart",function(){
	    $(".check-layer").show();
	    var layerH=$(".check-layer-text").height();
		var layerW=$(".check-layer-text").width();
		var layerTop=(wH-layerH)/2;
		var layerLift=(wW-layerW)/2;
	    $(".check-layer-text").css({top:layerTop,left:layerLift});
	});
	//点击入住我知道了
	$(".check-layer a").on("touchstart",function(){
      $(".check-layer").hide();
	});
	//点击手机
	$(".orders-i-02").on("touchstart",function(){
	    $(".phone-layer").show();
	    var layerH=$(".phone-layer-text").height();
		var layerW=$(".phone-layer-text").width();
		var layerTop=(wH-layerH)/2;
		var layerLift=(wW-layerW)/2;
	    $(".phone-layer-text").css({top:layerTop,left:layerLift});
	});
	//选择境内境外手机
	$(".phone-layer ul li").on("touchstart",function(){
       if($(this).find("i").size()>=1){
	      return false;
	   }else{
	      $(this).append('<i class="iconfont">&#xe603;</i>').siblings().find("i").remove();
	   }
	   $(this).addClass("on").siblings().removeClass("on");
	   	   
	   if($(this).hasClass("on")){
	     $(".p-text").text($(".phone-layer ul .on span").text());
		 setTimeout(time,500);	
	   }
	   function time(){
	     $(".phone-layer").hide();
	   }
	});
	//点击房间数
	$(".orders-i-03").on("click",function(){
	    $(".room-layer").show();
	    var layerH=$(".room-layer-text").height();
		var layerW=$(".room-layer-text").width();
		var layerTop=(wH-layerH)/2;
		var layerLift=(wW-layerW)/2;
	    $(".room-layer-text").css({top:layerTop,left:layerLift});
	});
	//选择房间数
	$(".room-layer ul li").on("click",function(){
       if($(this).find("i").size()>=1){
	      return false;
	   }else{
	      $(this).append('<i class="iconfont">&#xe603;</i>').siblings().find("i").remove();
	   }
	   $(this).addClass("on").siblings().removeClass("on");
	   	   
	   if($(this).hasClass("on")){
	     $(".room-p-text").text($(".room-layer ul .on span").text());
		 setTimeout(time,500);	
	   }
	   function time(){
	     $(".room-layer").hide();
	   }
	});
	//点击优惠券类型
	$(".orders-i-04").on("touchstart",function(){
	    $(".coupon-layer").show();
	    var layerH=$(".coupon-layer-text").height();
		var layerW=$(".coupon-layer-text").width();
		var layerTop=(wH-layerH)/2;
		var layerLift=(wW-layerW)/2;
	    $(".coupon-layer-text").css({top:layerTop,left:layerLift});
	});
	//点击优惠券类型我知道了
	$(".coupon-layer a").on("touchstart",function(){
      $(".coupon-layer").hide();
	});
	//点击更多特权
	$(".orders-i-05").on("click",function(){
	    $(".more-layer").show();
	    var layerH=$(".more-layer-text").height();
		var layerW=$(".more-layer-text").width();
		var layerTop=(wH-layerH)/2;
		var layerLift=(wW-layerW)/2;
	    $(".more-layer-text").css({top:layerTop,left:layerLift});
	});
    //选择更多特权
	$(".more-layer ul li").on("click",function(){
       if($(this).find("i").size()>=1){
	      return false;
	   }else{
	      $(this).append('<i class="iconfont">&#xe603;</i>').siblings().find("i").remove();
	   }
	   $(this).addClass("on").siblings().removeClass("on");
	   	   
	   if($(this).hasClass("on")){
	     $(".more-p-text").text($(".more-layer ul .on span").text());
		 setTimeout(time,500);	
	   }
	   function time(){
	     $(".more-layer").hide();
	   }
	});
	//未提交订单系统提示
	$(".order-return,.booking-return").on("click",function(){
       $(".return-layer").show();
	    var layerH=$(".return-layer-text").height();
		var layerW=$(".return-layer-text").width();
		var layerTop=(wH-layerH)/2;
		var layerLift=(wW-layerW)/2;
	    $(".return-layer-text").css({top:layerTop,left:layerLift});
	});
   //点击未提交订单系统提示取消与确定
	$(".return-layer .a-r").on("click",function(){
      $(".return-layer").hide();
	});
	$(".return-layer .a-l").on("click",function(){
        history.go(-1);
	});
	
	//订单预定成功选择支付方式
	$(".c-pay li").on("touchstart",function(){
	  if($(this).find("i-start").size()>=1){
	     return false;
	  }else{
	     $(this).append("<i class='i-end iconfont'>&#xe603;</i>").siblings().find(".i-end").remove();
	  }
      $(this).addClass("on").siblings().removeClass("on");
   });
	
});