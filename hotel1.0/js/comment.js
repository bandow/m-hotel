//document load srart.....
$(document).ready(function(){ 
    var wH=$(window).height();
	var wW=$(window).width();
    $(".wrapper-comment").css("minHeight",wH);
	
	//删除点评
	$(".bad-a1").on("click",function(){
       $(".return-layer").show();
	    var layerH=$(".return-layer-text").height();
		var layerW=$(".return-layer-text").width();
		var layerTop=(wH-layerH)/2;
		var layerLift=(wW-layerW)/2;
	    $(".return-layer-text").css({top:layerTop,left:layerLift});
	});
	//取消删除点评
	$(".return-layer .a-r").on("click",function(){
      $(".return-layer").hide();
	});

  //关闭积分送  
  $(".close-top i").on("touchstart",function(){
     $(".close-top").slideUp();
  });
  //评价切换
  $(".r-ul li").on("touchstart",function(){
     $(this).addClass("on").siblings().removeClass("on");
	 $(".all .r-all").eq($(this).index()).show().siblings().hide();
  });  
  
  //选择好中差评
  $(".edit-list li").on("click",function(){
	  if($(this).find("i").size()>=1){
		  return false;
	  }else{
	     $(this).append('<i class="iconfont">&#xe666;</i>').siblings().find("i").remove();
	  }
  });
  
  //点评分数
  var Pone=50;
  var Ptwo=90;
  var Pthree=67;
  var Pfour=96;
  $("#pace1").css("width",Pone+"%");
  $("#pace1").parent().parent().find("em").text(Pone);
  $("#pace2").css("width",Ptwo+"%");
  $("#pace2").parent().parent().find("em").text(Ptwo);
  $("#pace3").css("width",Pthree+"%");
  $("#pace3").parent().parent().find("em").text(Pthree);
  $("#pace4").css("width",Pfour+"%");
  $("#pace4").parent().parent().find("em").text(Pfour);

  //未评价统提示
	$(".edit-return").on("click",function(){
       $(".return-layer").show();
	    var layerH=$(".return-layer-text").height();
		var layerW=$(".return-layer-text").width();
		var layerTop=(wH-layerH)/2;
		var layerLift=(wW-layerW)/2;
	    $(".return-layer-text").css({top:layerTop,left:layerLift});
	});
   //点击评价提示取消与确定
	$(".return-layer .a-r").on("click",function(){
      $(".return-layer").hide();
	});
	$(".return-layer .a-l").on("click",function(){
        history.go(-1);
	});

   
   //每日签到送5积分
	$(".comment").on("touchstart",function(){
	   $(".check").fadeIn(); 
	   var cTop=(wH-($(".check-top").height()+$(".check-bottom").height()))/2;
	   $(".check").css("paddingTop",cTop);
	   $(".check-bottom a").on("touchstart",function(){
		   $(".check").fadeOut();  
	    });
	});
   
  
});