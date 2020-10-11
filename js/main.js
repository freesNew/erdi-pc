$('.about .btn').click(function(){
	$('.jiazhi').show();
	$('html').addClass('clear');
});
$('.jiazhi .close').click(function(){
	$('.jiazhi').hide();
	$('html').removeClass('clear');
});

$(".idate").click(function () {
  $(".sy_pop_fix").css("display", "block")
});

function toYMD(o) {
  var y = o.getFullYear();
  var m = o.getMonth() + 1;
  var d = o.getDate();
  var tStr;
  if (m < 10) { m = '0' + m.toString(); }
  else { m = m.toString(); }
  if (d < 10) { d = '0' + d.toString(); }
  tStr = y.toString() + '-' + m + '-' + d.toString();
  return tStr;
}

// 接受特定值显示
var spe_obj = {
  start: '',
  end: '',
}
// 如果没有特定值传入，则默认显示今天/明天
if (spe_obj.start == '') {
  spe_obj.start = toYMD(new Date());
  spe_obj.end = toYMD(new Date(new Date().getTime() + (1000 * 60 * 60 * 24)));
}
if (!$('#beginDate').val()&&$('#beginDate').length) {
	$('.idate .in').html(spe_obj.start.split('-')[1]+'月'+spe_obj.start.split('-')[2]+'日，'+getweekday(spe_obj.start))
	$('#beginDate').val(spe_obj.start);
}
if (!$('#endDate').val()&&$('#endDate').length) {
	$('.idate .out').html(spe_obj.end.split('-')[1]+'月'+spe_obj.end.split('-')[2]+'日，'+getweekday(spe_obj.end))
  $('#endDate').val(spe_obj.end);
}

//阻止事件冒泡
$('.sy_pop_fix,.idate').click(function(event){
	 event.stopPropagation();
});
$(document).click(function(){
	$('.date_box').hide();
});
			