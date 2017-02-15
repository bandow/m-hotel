//window load start.....
window.onload=function(){
	loaded ();
};
//hotel list start.....
var myScroll;
function loaded () {
	myScroll = new IScroll('.wrapper', { 
	mouseWheel: true ,
	preventDefault: false,//（把这句加上去哦）
    preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ },  //（这个后面加|A,因为iscroll阻止了A的默认事件）
});
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

//document load srart.....
$(document).ready(function(){
	
   //酒店列表背景色
   $(".scroller-hotel-list ul li:odd").css("background","#f0f0f0"); 
   
   //触发排序、品牌显示笼罩层start
   $(".brand-click,.sort-click").on("touchstart",function(){
      $(".pop").show();
   });
   
   //触发笼罩层start
   $(".pop").on("touchstart",function(){
      $(this).hide();
	  $(".brand-list").removeClass("brand-list-up");
	  $(".brand-list").addClass("brand-list-down");
	  $(".sort-list").removeClass("sort-list-up");
	  $(".sort-list").addClass("sort-list-down");
   });
     
   //品牌start
   $(".brand-click").on("touchstart",function(){
	    if($(".brand-list").hasClass("brand-list-up")){
           $(".brand-list").removeClass("brand-list-up");
           $(".brand-list").addClass("brand-list-down");
       }else if($(".brand-list").hasClass("brand-list-down")){
           $(".brand-list").removeClass("brand-list-down");
           $(".brand-list").addClass("brand-list-up");
       }else{
           $(".brand-list").addClass("brand-list-up");
       };
   });
   
   $(".brand-list a").on("touchstart",function(){
	  $(".pop").hide();
      $(".brand-list").removeClass("brand-list-up");
	  $(".brand-list").addClass("brand-list-down");
   });
   
   $(".brand-list ul li").on("touchstart",function(){
      $(this).addClass("on").siblings().removeClass("on");  
      if($(this).find("i").size()>=1){
	      return false;
	   }else{
	     $(this).append("<i class='iconfont'>&#xe611;</i>").siblings().find("i").remove(); 
	 }
   });
   
   //排序start
   $(".sort-click").on("touchstart",function(){
	    if($(".sort-list").hasClass("sort-list-up")){
           $(".sort-list").removeClass("sort-list-up");
           $(".sort-list").addClass("sort-list-down");
       }else if($(".sort-list").hasClass("sort-list-down")){
           $(".sort-list").removeClass("sort-list-down");
           $(".sort-list").addClass("sort-list-up");
       }else{
           $(".sort-list").addClass("sort-list-up");
       };
   });
   
    $(".sort-list a").on("touchstart",function(){
	  $(".pop").hide();
      $(".sort-list").removeClass("sort-list-up");
	  $(".sort-list").addClass("sort-list-down");
   });
   
   $(".sort-list ul li").on("touchstart",function(){	  
	   if($(this).find("i").size()>=1){
	      return false;
	   }else{
	     $(this).append("<i class='iconfont'>&#xe603;</i>").siblings().find("i").remove(); 
	   } 
   });
   
   
});