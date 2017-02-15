//document load srart.....
$(document).ready(function(){   
  var hW=($(".album .t h2").width());
  var iW=($(".album .t h2 i").width());
  var spanW=($(".album .t h2 span").width());
  var leftW=(hW-(iW+spanW))/2;
  $(".album .t h2").css("padding-left",leftW);
  
  //滑动选项卡
   var mySwiper = new Swiper('.swiper-container',{
	pagination: '.tabs',
	paginationClickable: true,
	paginationBulletRender: function (index, className) {
	switch (index) {
	  case 0: name='全部';break;
	  case 1: name='外观';break;
	  case 2: name='内景';break;
	  case 3: name='房间';break;
	  default: name='';
	}
		  return '<a class="' + className + '">' + name + '</a>';
	  }
   });
  
  //大图垂直居中
  var windowH=$(window).height();
  var bigImg=$(".big-img-album").height();
  var TopH=(windowH-bigImg)/2;
  $(".big-img-album").css("margin-top",TopH);

   
});