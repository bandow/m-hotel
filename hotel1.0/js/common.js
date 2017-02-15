/*  -----------------------------
 *  作者：Dabin
 *  联系：sycbbb@sina.com
/*----------------------------------------------------------------------------------------------
 * 东呈集团酒店公用移动端js开始*
----------------------------------------------------------------------------------------------*/

$(document).ready(function(e){
    /*设置字体响应式*/
    var size=$(window).width()/18;
    $("html").css('font-size',size);
	if($(window).width>=640){
	   $("html").css('font-size','24px');
	}
	
	//alert(size);
	
	//loading
	var wH=$(window).height();
    var wW=$(window).width();
	var loadingH=$(".loading").height();
	var loadingW=$(".loading").width();
	var loadingTop=((wH-loadingH)/2)-20;
	var loadingLift=(wW-loadingW)/2;
	var pTop=(wH/2)+(loadingH/2)-20;
	$(".loading").css({
	  top:loadingTop,
	 // left:loadingLift
	});
	$(".load-layer p").css("top",pTop);
	
	

	
});

//弹出框
function layerAll(){
	$(".return-layer").show();
	var wH=$(window).height();
    var wW=$(window).width();
    var layerH=$(".return-layer-text").height();
    var layerW=$(".return-layer-text").width();
    var layerTop=(wH-layerH)/2;
    var layerLift=(wW-layerW)/2;
    $(".return-layer-text").css({top:layerTop,left:layerLift});
    $(".return-layer .a-l").on("click",function(){
        $(".return-layer").hide();
    });
}



/*----------------------------------------------------------------------------------------------
 * 东呈集团酒店公用移动端js结束*
----------------------------------------------------------------------------------------------*/
