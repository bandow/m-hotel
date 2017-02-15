// JavaScript Document
var mySwiper = new Swiper('.swiper-container',{
	pagination : '.swiper-pagination',
    loop : true,       //循环
    autoplay: 3000,    //可选选项，自动滑动
	paginationClickable :true  //点击小圆按钮
});

var mySwiper = new Swiper('.swiper-container-one',{
    loop : true,       //循环
    autoplay: 2000,    //可选选项，自动滑动
	effect : 'coverflow',
	slidesPerView:2,
	centeredSlides: true,
	coverflow: {
            rotate: 0,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
     }
});

//document load srart.....
$(document).ready(function(){
	//最小高度
	var wH=$(window).height();
	var wW=$(window).width();
    $("#integral,.viewport-address").css('min-height',wH);
	
    //置顶
    $(window).scroll(function(){       
        if($(window).scrollTop() >= 100){
            $('.scroll-top').fadeIn(300); 
        }else{    
            $('.scroll-top').fadeOut(300);    
        }  
    });
    $('.scroll-top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
	
	//使幻灯片的高度和里面的图片一样高
	var imgH=$(".swiper-container img").height();
	$(".swiper-container").css('height',imgH);
	
	//每日签到送5积分
	$(".receive-points").on("touchstart",function(){
	   $(".check").fadeIn(); 
	   $(".check").addClass("no-check");
	   var cTop=(windowH-($(".check-top").height()+$(".check-bottom").height()))/2;
	   $(".check").css("paddingTop",cTop);
	   $(".check-bottom a").on("touchstart",function(){
		   $(".check").fadeOut();  
	    });
	});
	//多少家酒店累加
	function times(){
		var numberText=document.getElementById("num");
	    var i=200;
		function startNum(){
		  if(i>=205){
		     numberText.innerHTML=i;
		   }else{
			 i++;
			 numberText.innerHTML=i;
		   }
		 }  
		setInterval(startNum,500);
		startNum();	
	}
	 times();
	
	//地址的删除编辑的padding
	for(var i=0; $(".address-consignee li").length>i; i++){
		var addLIH=$(".address-consignee li").eq(i).height();
		var addoneH=$(".address-bg1").eq(i).height();
		var bgOne=(addLIH-addoneH)/2;
		$(".address-bg1").eq(i).css({
			paddingTop:bgOne,
			paddingBottom:bgOne
		 });
		 $(".address-bg2").eq(i).css({
			paddingTop:bgOne,
			paddingBottom:bgOne
		 });
	}
	
	

	 
	 $(".address-bg1").on("click",function(){
	   $(".return-layer").show();
		var layerH=$(".return-layer-text").height();
		var layerW=$(".return-layer-text").width();
		var layerTop=(wH-layerH)/2;
		var layerLift=(wW-layerW)/2;
		$(".return-layer-text").css({top:layerTop,left:layerLift});
		$(".return-layer .a-l").on("click",function(){
           $(".return-layer").hide();
	    });
	 });
	
	//购买数量
	var inputText=$(".btn").val();
	var numL=$(".number-l").text();
	var numR=$(".number-r").text();
	$(".add-i").on("touchstart",function(){
	   if(inputText>=5){
	     $(".btn").val(5); 
	   }else{
	     inputText++;
		 $(".btn").val(inputText);
		 $(".number-l").text(numL*inputText); 
	     $(".number-r").text(numR*inputText); 
	   }
	});
	$(".noadd-i").on("touchstart",function(){
	   if(inputText<=1){
	     $(".btn").val(1); 
	   }else{
	     inputText--;
		 $(".btn").val(inputText);
		 $(".number-l").text(numL*inputText); 
	     $(".number-r").text(numR*inputText); 
	   }
	});
	
	//兑换须知配送须知
	$(".product-notice li").on("touchstart",function(){
	   $(".product-text-all .product-text").eq($(this).index()).show().siblings().hide();
	});
	$(".product-notice .notice-list1").on("touchstart",function(){
	   $(".notice-un").css('left',0);
	});
	$(".product-notice .notice-list2").on("touchstart",function(){
	   $(".notice-un").css('left','33.33333333%');
	});
	$(".product-notice .notice-list3").on("touchstart",function(){
	   $(".notice-un").css('left','66.6666666%');
	});
	
	//商品详情页面笼罩层
	var ppH=$(".product-pop").height();
	var ppTop=(windowH-ppH)/2;
	$(".product-pop").css("top",ppTop);
	
	$(".p-b .pp-a").on("touchstart",function(){
	   $(".p-shrouded,.product-pop").fadeOut(500);
	});
	
	//兑换记录
	//无订单查询
	var windowH=$(window).height();
	var cartH=$(".record").height();
	var cartMarginTop=(windowH-cartH)/2;
	$(".record").css("marginTop",cartMarginTop);
	
	//有订单查询
	var rpH=$(".record-pop").height();
	var rpTop=(windowH-rpH)/2;
	$(".record-pop").css("top",rpTop);
	
	$(".click-and-touchstart").on("touchstart",function(){
	   $(".r-shrouded,.record-pop").fadeIn();
	});
	
	$(".p-b .r,.r-shrouded").on("touchstart",function(){
	   $(".r-shrouded,.record-pop").fadeOut();
	});
	
	//address
	$(".address li").on("touchstart",function(){
	   $(this).addClass("on").siblings().removeClass("on");
	});
	
	for(var i=0;i<$(".address li").length;i++){
	    var addIl=$(".address li").eq(i).height();
		var addI=$(".address-r i").eq(i).height();
		var addPt=(addIl-addI)/2;
		$(".address-r i").eq(i).css("padding-top",addPt);
	}
	
	//选择城市
	$(".province ul li p").on("click",function(){
		$(this).parent().addClass("on").siblings().removeClass("on");
		$(this).parent().show().siblings().hide();
	});
	$(".city dl dd p").on("click",function(){
		$(this).parent().addClass("num").siblings().removeClass("num");
		$(this).parent().show().siblings().hide();
	});
	$(".area p").on("click",function(){
	   $(this).addClass("nu");		
	   $(".province").hide();
	   $(".address-form").show();
	   $(".address-footer").show();  
	   var pText=$(".province ul .on .p1").text();
	   var cText=$(".city dl .num .p2").text();
	   var aText=$(".area .nu").text();	
	   $(".city-details").val(pText+cText+aText);
	});
	
	

	
	
	//shopping  积分商城购物车页面
	var sTop=($(".shopping-top").height()-$(".shopping-top i").height())/2;
	$(".shopping-top i").css("padding-top",sTop);
	
	var shoppTop=(windowH-$(".shopping-pop").height())/2;
	$(".shopping-pop").css("top",shoppTop);
	
	$(".a-cart").on("touchstart",function(){
	   $(".shopping-shrouded,.shopping-pop").fadeIn();
	});
	$(".p-b .r,.shopping-shrouded").on("touchstart",function(){
	   $(".shopping-shrouded,.shopping-pop").fadeOut();
	});
	
	$(".integral-shopping .add-shopping").on("touchstart",function(){
	   $(this).parent().parent().find(".p-cart-red").fadeIn().text("最多只能兑换1个。");
	});
	$(".integral-shopping .noadd-shopping").on("touchstart",function(){
	   $(this).parent().parent().find(".p-cart-red").fadeIn().text("不能小于1个。");
	});
	
	/**************************/
	/**************************/
	/**************************/
	
	var startInAll = 0;
	var startMoAll = 0;
	$(".shopping-record .integral-list").each(function(index,element){
	    startInAll+=parseInt($(element).text());
	});
	$(".shopping-record .money-list").each(function(index,element){
	    startMoAll+=parseInt($(element).text());
	});
	
	$(".integral-all").text(startInAll);
    $(".money-all").text(startMoAll);

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	$(".money-shopping .add-shopping").on("touchstart",function(){	
		//求的积分总和
		 var ISAll = 0;
	     $(".integral-shopping .integral-list").each(function(index,element){
	        ISAll+=parseInt($(element).text());
	     });
        //
		 var btnA=parseInt($(this).parents(".money-shopping").find(".btn").val());
		 btnA++;
		 $(this).parents(".money-shopping").find(".btn").val(btnA);

	    //求积分的总和和价格的总和
		var MSintegralAll = 0;
		var MSmoneyAll = 0;
		$(".money-shopping .integral-list").each(function(index,element){   //循环所有的class		    
			MSintegralAll += parseInt($(element).text()*$(this).parents(".money-shopping").find(".btn").val());    //积分*个数的总和					
		});
		$(".money-list").each(function(index,element){
		    MSmoneyAll += $(element).text()*$(this).parents(".money-shopping").find(".btn").val();  //价格*个数的总和
		});
		
		$(".integral-all").text(MSintegralAll+ISAll);
        $(".money-all").text(MSmoneyAll);
	});

	
   //--------------------------------------------------------------------------------------
	$(".money-shopping .noadd-shopping").on("touchstart",function(){
	   //求的积分总和
		 var ISAll = 0;
	     $(".integral-shopping .integral-list").each(function(index,element){
	        ISAll+=parseInt($(element).text());
	     });
        //
		 var btnA=parseInt($(this).parents(".money-shopping").find(".btn").val());
		 btnA--;
		 if(btnA>0){
		   $(this).parents(".money-shopping").find(".btn").val(btnA);
		 }else{
		   $(this).parents(".money-shopping").find(".btn").val(1);
		 }		 
	    //求积分的总和和价格的总和
		var MSintegralAll = 0;
		var MSmoneyAll = 0;
		$(".money-shopping .integral-list").each(function(index,element){   //循环所有的class		    
			MSintegralAll += parseInt($(element).text()*$(this).parents(".money-shopping").find(".btn").val());    //积分*个数的总和					
		});
		$(".money-list").each(function(index,element){
		    MSmoneyAll += $(element).text()*$(this).parents(".money-shopping").find(".btn").val();  //价格*个数的总和
		});
		
		$(".integral-all").text(MSintegralAll+ISAll);
        $(".money-all").text(MSmoneyAll);
	});
	
	//支付方式切换
	$(".pay-ul li").on("touchstart",function(){ 
	   $(this).addClass("on").siblings().removeClass("on");
	});
	
});
