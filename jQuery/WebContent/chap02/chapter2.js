$(function() {
	$('#selected-plays > li').addClass('horizontal');
	
	$('li:not(.horizontal)').addClass('sub-level');
	
	$('a[href $=pdf').addClass('pdflink');
	$('a[href ^=mailto').addClass('mailto');
	
	/*$('a[href *=henry]:not(.malito)').addClass('henrylink');*/
	$('a[href *=henry]').not('.malito').addClass('henrylink');
	
	/*$('tr:odd').addClass('alt');*/
	/*$('tr').filter(':odd').addClass('alt');*/
	$('tr:nth-child(odd)').addClass('alt');
	
	//$('td:contains(Henry)').addClass('highlight');
	//$('td:contains(Henry)').nextAll().andSelf().addClass('highlight'); // 옆의 형제, 나 자신
	//$('td:contains(Henry)').parent().find('td').addClass('highlight');  //부모의 모든 td
	$('td:contains(Henry)').parent().find('td:first').addClass('highlight')
		.end().find('td:eq(1)').addClass('highlight');  // 첫번째,두번째
	
	// each() => 배열을 받아서 각각의 작업을 수행
	// 1. $.each(배열, function(index, item) { 배열의 각 요소의 작업 수행}) - item 배열 하나하나
	// 2. $('선택자').each(function(index, item){ 각 요소들의 작업 수행}) - item 선택자 하나하나 
});