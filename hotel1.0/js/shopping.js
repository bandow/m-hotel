//JavaScript window

// JavaScript Document
$(document).ready(function(e){
   //列表背景色
   $(".shopping-list ul li:odd").css("backgroundColor","#f0f0f0"); 
   //点击系列特效
   // $(".shopping dd").on("click",function(event){  
   //      event.preventDefault(); 
   //     //$(this).find(".shopping-list").slideToggle();
       

   //     //$(this).find(".shopping-list").slideDown().siblings().slideUp();

	  //  if($(".shopping-text i").hasClass("on-down")){
		 // $(this).find("i").addClass("on-up");
	  //    $(this).find("i").removeClass("on-down");
	  //  }else if($(".shopping-text i").hasClass("on-up")){
	  //    $(this).find("i").addClass("on-down");
		 // $(this).find("i").removeClass("on-up");
	  //  }else{
   //        $(this).find("i").addClass("on-up");
	  //  };

	  //  $(this).addClass("on").siblings().removeClass("on");
   // });


//点击系列特效

	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.shopping-text');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('on');

		if (!e.data.multiple) {
			$el.find('.shopping-list').not($next).slideUp().parent().removeClass('on');
		};
	}	

	var accordion = new Accordion($('.shopping'), false);



   //+ -    
   $(".add").on("touchstart",function(){
	    $(this).parent().parent().parent().find(".add-em").show();
		var addEn=parseInt($(this).parent().parent().parent().find(".add-em").text());
		addEn++;
	    $(this).parent().parent().parent().find(".add-em").text(addEn);		
	    //求份数的总和和价格的总和
		var total = 0;
		var moneyAll = 0;
		$(".add-em").each(function(index,element){   //循环所有的class		    
			total += parseInt($(element).text());    //所有的class总和					
		});
		$(".money").each(function(index,element){
		    moneyAll += parseInt($(element).text()*$(this).parent().parent().parent().find(".add-em").text());  //价格*个数的总和
		});
		$(".add-em-all").text(total);
		$(".money-all").text(moneyAll);
		//判断总和的分数小于等于0就隐藏
		if(total>0){
		  $(".good").show();
		  $(".viewport").addClass("viewport-add");
		}			
   });
   
    $(".noadd").on("touchstart",function(){
		var addEn=parseInt($(this).parent().parent().parent().find(".add-em").text());
		//判断每一个的份数不能小于0
		if(addEn>0){
		  addEn--;
		  $(this).parent().parent().parent().find(".add-em").text(addEn);
		}else{
		  $(this).parent().parent().parent().find(".add-em").text(0);
		}
		//判断份数等于0的时候隐藏	    
		if(addEn<=0){
		  $(this).parent().parent().parent().find(".add-em").hide();
		}
		//求份数的总和和价格的总和
		var total = 0;
		var moneyAll = 0;
		$(".add-em").each(function(index,element){
			total += parseInt($(element).text());
		});
		$(".money").each(function(index,element){
		    moneyAll += parseInt($(element).text()*$(this).parent().parent().parent().find(".add-em").text());  //价格*个数的总和
		});
		$(".add-em-all").text(total);
		$(".money-all").text(moneyAll);
		//判断总和的分数小于等于0就隐藏
		if(total<=0){
		  $(".good").hide();
		  $(".viewport").removeClass("viewport-add");
		}		
    });
	
	//购物车无产品
	var windowH=$(window).height();
	var cartH=$(".cart").height();
	var cartMarginTop=(windowH-cartH)/2;
	$(".cart").css("marginTop",cartMarginTop);
	
	//购物车有产品
	var hLiH=$(".have-cart-top ul .li").height();
	var hIH=$(".have-cart-top ul .li .l").height();
	var hiTop=(hLiH-hIH)/2;
	$(".have-cart-top ul .li .l").css("marginTop",hiTop)
	
	//+ -  
	var total = 0;
	var moneyAll = 0;
	$(".add-em").each(function(index,element){   //循环所有的class		    
		total += parseInt($(element).text());    //所有的class总和					
	});
	$(".money").each(function(index,element){
		moneyAll += parseInt($(element).text()*$(this).parent().parent().parent().find(".add-em").text());  //价格*个数的总和
	});
	$(".em-number").text(total);
	$(".em-money").text(moneyAll);	
	  
   $(".cart-add").on("touchstart",function cartA(){
	    $(this).parent().parent().parent().find(".add-em").show();
		var addEn=parseInt($(this).parent().parent().parent().find(".add-em").text());
		addEn++;
	    $(this).parent().parent().parent().find(".add-em").text(addEn);		
	    //求份数的总和和价格的总和
		var total = 0;
		var moneyAll = 0;
		$(".add-em").each(function(index,element){   //循环所有的class		    
			total += parseInt($(element).text());    //所有的class总和					
		});
		$(".money").each(function(index,element){
		    moneyAll += parseInt($(element).text()*$(this).parent().parent().parent().find(".add-em").text());  //价格*个数的总和
		});
		$(".em-number").text(total);
		$(".em-money").text(moneyAll);		
   });
   
   $(".cart-noadd").on("touchstart",function cartB(){
		var addEn=parseInt($(this).parent().parent().parent().find(".add-em").text());
		//判断每一个的份数不能小于0
		if(addEn>1){
		  addEn--;
		  $(this).parent().parent().parent().find(".add-em").text(addEn);
		}else{
		  $(this).parent().parent().parent().find(".add-em").text(1);
		}
		
		//求份数的总和和价格的总和
		var total = 0;
		var moneyAll = 0;
		$(".add-em").each(function(index,element){
			total += parseInt($(element).text());
		});
		$(".money").each(function(index,element){
		    moneyAll += parseInt($(element).text()*$(this).parent().parent().parent().find(".add-em").text());  //价格*个数的总和
		});
		$(".em-number").text(total);
		$(".em-money").text(moneyAll);	
    });
	
	$(".have-cart-three .r ul li").on("touchstart",function(){ 
	   $(this).addClass("on").siblings().removeClass("on");
	});

    //删除
    $(".good-a").on("click",function(){
		$(this).parents(".li").slideUp(500);   
	});
	
	//勾选产品
	$(".have-cart-top .top .l").on("touchstart",function(){
		if($(this).hasClass("show")){
		  $(".have-cart-top li .l").removeClass("show");
		}else{
		  $(".have-cart-top li .l").addClass("show");
		}
	});
	$(".have-cart-top .li .l").on("touchstart",function(){
		var showSize=$(".have-cart-top .li .show").size();
		var liSize=$(".have-cart-top .li").size();
		if($(this).hasClass("show")){
			$(this).removeClass("show");
		    $(".have-cart-top .top .l").removeClass("show");  
		}else if(showSize==(liSize-1)){
			$(this).addClass("show");
			$(".have-cart-top .top .l").addClass("show");
		}else{
		    $(this).addClass("show");
		}   
	});
	
	
	
	//无订单查询
	var windowH=$(window).height();
	var cartH=$(".qry").height();
	var cartMarginTop=(windowH-cartH)/2;
	$(".qry").css("marginTop",cartMarginTop);
	
	//有订单查询
	var dpH=$(".delete-pop").height();
	var dpTop=(windowH-dpH)/2;
	$(".delete-pop").css("top",dpTop);
	
	$(".click-and-touchstart").on("touchstart",function(){
	   $(".shrouded,.delete-pop").fadeIn();
	});
	
	$(".p-b .r,.shrouded").on("touchstart",function(){
	   $(".shrouded,.delete-pop").fadeOut();
	});
	
   
   
});