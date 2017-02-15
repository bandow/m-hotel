// JavaScript Document

var mySwiper = new Swiper('.swiper-container',{
  loop : true,       //循环
  autoplay: 3000,    //可选选项，自动滑动
})

$(document).ready(function(){
	//点击全部展开
    $(".all-expansion").on("touchstart",function(){
		if($(this).hasClass("expansion-up")){
	      $(this).addClass("expansion-down");
		  $(this).removeClass("expansion-up");
		  $(this).find("p").text("展开全部")
		}else if($(this).hasClass("expansion-down")){
		  $(this).addClass("expansion-up");
		  $(this).removeClass("expansion-down");
		  $(this).find("p").text("收缩全部")
	    }else{
	      $(this).addClass("expansion-up"); 
		  $(this).find("p").text("收缩全部")
	    }
	    $(".item-bottom").slideToggle();
	});
	//点击房间列表
    $(".item-top .icon-r").on("touchstart",function(){
	  if($(this).parent().hasClass("item-up")){
	    $(this).parent().addClass("item-down");
		$(this).parent().removeClass("item-up");
	  }else if($(this).parent().hasClass("item-down")){
	    $(this).parent().addClass("item-up");
		$(this).parent().removeClass("item-down");
	  }else{
	    $(this).parent().addClass("item-up"); 
	  }
	  $(this).parent().parent().find(".item-bottom").slideToggle();
	});
	
	//点击查看酒店图
	$(".item-top .img").on("touchstart",function(){
		$(".see-hotel").slideDown(); 
		$(".see-hotel-center").slideDown();     
	});
	$(".see-hotel-center .t i,.see-hotel").on("touchstart",function(){
		$(".see-hotel").slideUp(); 
		$(".see-hotel-center").slideUp();     
	});	
	var H=$(window).height();
	var seeHotelH=$(".see-hotel-center").height();
	var topH=(H-seeHotelH)/2;
	$(".see-hotel-center").css("top",topH);
   
   //钟点房
   $(".hour-item-top").height()
   var textT=($(".hour-item-top").height()-$(".hour-item-top .text").height())/2;
   var moneyT=($(".hour-item-top").height()-$(".hour-item-top .money").height())/2;
   var bookT=($(".hour-item-top").height()-$(".hour-item-top .hour-booking").height())/2;
   $(".hour-item-top .text").css("paddingTop",textT)
   $(".hour-item-top .money").css("paddingTop",moneyT)
   $(".hour-item-top .hour-booking").css("paddingTop",bookT)

});