// JavaScript Document
$(function(){
	//viewport-index页面最少一屏
	var wH=$(window).height();
    $(".viewport-index").css("minHeight",wH);
	//top行高
	var indexImg=$(".top-img").height()+"px";
	$(".top a").css("lineHeight",indexImg);	
	//高度控制底部
    if(wH<=567){
       $(".viewport-index .foot").css("position","inherit" );
    }else{
	   $(".viewport-index .foot").css("position","absolute");
	}
	
});

window.onload=function(){
	//多少家酒店累加
	var numberText=document.getElementById("number");
    var i=0;
	function startNum(){
	  if(i>=1000){
	     numberText.innerHTML=i;
	   }else{
		 i = i + 10;
		 numberText.innerHTML=i;
	   }
	 }  
	setInterval(startNum,5);
	startNum();	
	
	//加载才添加动画class
	var containerTop=document.getElementById("container");
	containerTop.className='container';		
}
