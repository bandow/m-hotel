//document load srart.....
$(document).ready(function(){
  //锚点滚动 
  var headerH=$("#header").height();
  var searchH=$(".search").height();
  var hsH=headerH+searchH;
  $(".hot h3 a").on("touchstart",function(){
		var href = $(this).attr("href");
		var pos = $(href).offset().top-hsH;
		$("html,body").animate({scrollTop: pos}, 1000);
		return false;
  });
  $(".hot ul li a").on("touchstart",function(){
		var href = $(this).attr("href");
		var pos = $(href).offset().top-hsH;
		$("html,body").animate({scrollTop: pos}, 1000);
		return false;
  });
  
  /*a-z的高度*/
   var hotH=$(window).height()-hsH;
   $(".hot").height(hotH);
   var hotLiH=(hotH-33)/24;   
   $(".hot ul li").css({
     "height":hotLiH
   });   
});
