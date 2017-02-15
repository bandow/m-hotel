$(function()
{

	if (!window['console'])
	{
		window.console = {};
		window.console.log = function(){};
	}
		
	/*
	  define a new language named "custom"
	*/

	$.dateRangePickerLanguages['custom'] = 
	{
		'selected': 'Choosed:',
		'days': 'Days',
		'apply': 'Close',
		'week-1' : 'Mon',
		'week-2' : 'Tue',
		'week-3' : 'Wed',
		'week-4' : 'Thu',
		'week-5' : 'Fri',
		'week-6' : 'Sat',
		'week-7' : 'Sun',
		'month-name': ['January','February','March','April','May','June','July','August','September','October','November','December'],
		'shortcuts' : 'Shortcuts',
		'past': 'Past',
		'7days' : '7days',
		'14days' : '14days',
		'30days' : '30days',
		'previous' : 'Previous',
		'prev-week' : 'Week',
		'prev-month' : 'Month',
		'prev-quarter' : 'Quarter',
		'prev-year' : 'Year',
		'less-than' : 'Date range should longer than %d days',
		'more-than' : 'Date range should less than %d days',
		'default-more' : 'Please select a date range longer than %d days',
		'default-less' : 'Please select a date range less than %d days',
		'default-range' : 'Please select a date range between %d and %d days',
		'default-default': 'This is costom language'
	};
	
	
	var startToday = new Date();
   // var myToday=startToday.getFullYear()+"/"+(startToday.getMonth()+1)+"/"+startToday.getDate();
	function getAddData(n){
		var startToday = new Date();
        startToday.setDate(startToday.getDate()+n);//获取n天后的日期
		var myToday=startToday.getFullYear()+"/"+(startToday.getMonth()+1)+"/"+startToday.getDate();
		return myToday;
	};
	
		//添加节日
	   var holidays = [["2015/1/1", "元旦"],
        ["2016/1/1", "元旦"], ["2016/2/7", "除夕"], ["2016/2/8", "春节"], ["2016/4/4", "清明"], ["2016/5/1", "劳动"], ["2016/6/9", "端午"], ["2016/9/15", "中秋"], ["2016/10/1", "国庆"],[getAddData(0), "今天"],[getAddData(1), "明天"],[getAddData(2), "后天"],
         ];
   
 		
	
	function GetDateStr(n) {
		var startToday = new Date();
		startToday.setDate(startToday.getDate()+n);//获取n天后的日期
		//var y = startToday.getFullYear();
		var m = startToday.getMonth()+1;//获取当前月份的日期
		var d = startToday.getDate();
		return m+"月"+d+"日";		
    };
		
    function getOffDays(startDate, endDate) {    
      var mmSec = (endDate.getTime() - startDate.getTime()); //得到时间戳相减 得到以毫秒为单位的差    
      return (mmSec / 3600000 / 24); //单位转换为天并返回    
    };  
	 
	$(".date-start").text(GetDateStr(0));
	$(".date-end").text(GetDateStr(1));	
	$(".start-and-end").text(1);
    //调用控件
	$('#date').dateRangePicker(
	{ 	    
		startDate: startToday,   //默认开始是那一天
		singleMonth: true,
        showShortcuts:false,  //去掉快捷选择
		
		showDateFilter: function(time, date, s){
			var myTime=new Date(time);
			var s=myTime.getFullYear()+"/"+(myTime.getMonth()+1)+"/"+myTime.getDate();
			for(var i=0;i<holidays.length;i++){
              if(s==holidays[i][0]){
			     return '<div><span style="font-weight:bold">'+date+'</span><div class="on">'+holidays[i][1]+'</div></div>';	
			  } 
            }
			return '<div><span style="font-weight:bold">'+date+'</span><div class="on"></div></div>';
			
		},
        maxDays:28,
		startOfWeek:'monday',   //星期一或者星期日排第一  "sunday" or "monday"
			
	}).bind('datepicker-change',function(event,obj)    //获取选择日期
	  {
		var y=obj.date1.getFullYear() + "年";
		var m=obj.date1.getMonth()+1 +"月"; 
		var d=obj.date1.getDate() +"日"; 
		var y1=obj.date2.getFullYear() + "年";
		var m1=obj.date2.getMonth()+1 +"月"; 
		var d1=obj.date2.getDate() +"日"; 
		
		var yWeek1=obj.date1.getFullYear()+"-";
		var mWeek1=obj.date1.getMonth()+1+"-";
		var dWeek1=obj.date1.getDate();
		var weekOne=yWeek1+mWeek1+dWeek1;
		
		var yWeek2=obj.date2.getFullYear()+"-";
		var mWeek2=obj.date2.getMonth()+1+"-";
		var dWeek2=obj.date2.getDate();
		var weekTwo=yWeek2+mWeek2+dWeek2;
		
		$(".date-start").text(m+d);
		$(".date-end").text(m1+d1);	
		
		
		var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
	    var dateStr1 = weekOne;		
	    var myDate1 = new Date(Date.parse(dateStr1.replace(/-/g, "/"))); 		
		var dateStr2 = weekTwo;		
	    var myDate2 = new Date(Date.parse(dateStr2.replace(/-/g, "/"))); 
		
	    //alert(weekDay[myDate1.getDay()]);
		//alert(weekDay[myDate2.getDay()]);
        $(".week-one").text(weekDay[myDate1.getDay()]);
		$(".week-two").text(weekDay[myDate2.getDay()]);
		
		function GetDateStr1(n) {
			var today=new Date();
			today.setDate(today.getDate()+n);//获取n天后的日期
			var yDay=today.getFullYear();
			var mDay=today.getMonth()+1;
			var dDay=today.getDate();
			return yDay+"-"+mDay+"-"+dDay;
		}
		
		if(GetDateStr1(0)==weekOne){
		    $(".week-one").text("今天");
		}else if(GetDateStr1(1)==weekOne){
		    $(".week-one").text("明天");
		}else if(GetDateStr1(2)==weekOne){
		    $(".week-one").text("后天");
		}
		
		if(GetDateStr1(0)==weekTwo){
		    $(".week-two").text("今天");
		}else if(GetDateStr1(1)==weekTwo){
		    $(".week-two").text("明天");
		}else if(GetDateStr1(2)==weekTwo){
		    $(".week-two").text("后天");
		}
			
	  });
	
	
    $('.l-position,#pop').on("touchstart",function(evt){   //点击取消 以及笼罩层
		evt.stopPropagation();
		$('#date').data('dateRangePicker').close();
	});
	
  
   
   


});









