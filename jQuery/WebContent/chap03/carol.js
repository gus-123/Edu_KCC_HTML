//step1
/*
$(function() {
	$('#switcher-large').on('click',function() {
		$('body').addClass('large');
	})
});
*/

//step2 => Large Print => large, Narrow Column => narrow, Default => 처음
//addClass('클래스명'), removeClass('클래스명')
/*
$(function() {
	//narrow -> large
	$('#switcher-large').on('click',function() {
		$('body').removeClass('narrow').addClass('large');
	})
	// large -> narrow
	$('#switcher-narrow').on('click',function() {
		$('body').removeClass('large').addClass('narrow');
	})
	// narrow -> large
	$('#switcher-default').on('click',function() {
		$('body').removeClass('narrow').addClass('large');
	})

})
*/

//step3 : 클릭한 버튼만 selected 스타일 적용해 보자.
/*
$(function() {
	//narrow -> large
	$('#switcher-large').on('click',function() {
		$('body').removeClass('narrow').addClass('large');
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	})
	// large -> narrow
	$('#switcher-narrow').on('click',function() {
		$('body').removeClass('large').addClass('narrow');
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	})
	// narrow -> large
	$('#switcher-default').on('click',function() {
		$('body').removeClass('narrow').addClass('large');
		$('.button').removeClass('selected');  // selected 제거
		$(this).addClass('selected');  // selected 적용
	})

})
*/
 
//step4 : selected 관련된 중복된 코드를 최적화 하자
/*
$(function() {
	//narrow -> large
	$('#switcher-large').on('click',function() {
		$('body').removeClass('narrow').addClass('large');;
	})
	// large -> narrow
	$('#switcher-narrow').on('click',function() {
		$('body').removeClass('large').addClass('narrow');
	})
	// narrow -> large
	$('#switcher-default').on('click',function() {
		$('body').removeClass('narrow').addClass('large');
	})
	
	$('#switcher .button').on('click', function() {
		//$(this).addClass('selected').siblings().removeClass('selected');
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	})
	
})
*/

//step5 : 전체 최적화 하자.
/*
$(function() {
	$('#switcher .button').on('click', function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();  // body안에 모든 클래스명을 싹 다 지움.
		
		if(this.id === 'switcher-large') {  // 이때의 this만 자바스크립트 dom 객체여야만  값을 가져올수 있음.
			$('body').addClass('large');
		}else if(this.id === 'switcher-narrow')
			$('body').addClass('narrow');
	})
	
})
*/

//step6 : 이벤트 통합 함수 사용 => 개별 이벤트 함수
/*
$(function() {
	$('#switcher .button').click(function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();  // body안에 모든 클래스명을 싹 다 지움.
		
		if(this.id === 'switcher-large') {  // 이때의 this만 자바스크립트 dom 객체여야만  값을 가져올수 있음.
			$('body').addClass('large');
		}else if(this.id === 'switcher-narrow')
			$('body').addClass('narrow');
	})
	
})
*/

//step7
$(function() {  // 마우스 호버링
	$('#switcher .button').hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	})
})

//step8 : <h3>스타일 변환기</h3> 클릭 했을 때 => 버튼 3개를 화면에서 사라지게 하자. 
/*
$(function() {
	$('#switcher > h3').click(function() {
		//$('#switcher .button').addClass('hidden');
		$('#switcher .button').toggleClass('hidden');  //add와 remove 클래스를 합친것.
	})
	
	$('#switcher .button').click(function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();  // body안에 모든 클래스명을 싹 다 지움.
		
		if(this.id === 'switcher-large') {  // 이때의 this만 자바스크립트 dom 객체여야만  값을 가져올수 있음.
			$('body').addClass('large');
		}else if(this.id === 'switcher-narrow')
			$('body').addClass('narrow');
	})
	
})
*/

//step9 : 이벤트 버블링
/*
$(function() {
	$('#switcher').click(function() {
		//$('#switcher .button').addClass('hidden');
		$('#switcher .button').toggleClass('hidden');  //add와 remove 클래스를 합친것.
	})
	
	$('#switcher .button').click(function(e) {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();  // body안에 모든 클래스명을 싹 다 지움.
		
		if(this.id === 'switcher-large') {  // 이때의 this만 자바스크립트 dom 객체여야만  값을 가져올수 있음.
			$('body').addClass('large');
		}else if(this.id === 'switcher-narrow') {
			$('body').addClass('narrow');
		}
		event.stopPropagation();
	})
	
})
*/

//step10 : 통합함수 on 함수 변경 => off('click')
// 		   large, narrow 버튼을 클릭 후 버튼이 사라지게 하는 이벤트 해제

$(function() {
	$('#switcher').on("click.kcc", function() {
		//$('#switcher .button').addClass('hidden');
		$('#switcher .button').toggleClass('hidden');  //add와 remove 클래스를 합친것.
	})
	
	$('#switcher .button').click(function(e) {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();  // body안에 모든 클래스명을 싹 다 지움.
		
		if(this.id === 'switcher-large') {  // 이때의 this만 자바스크립트 dom 객체여야만  값을 가져올수 있음.
			$('body').addClass('large');
		}else if(this.id === 'switcher-narrow') {
			$('body').addClass('narrow');
		}
		event.stopPropagation();
	})
	
//	$('#switcher').on("click.kosa", function() {
//		alert('다른 이벤트 발생')
//	});
	
	$("#switcher-large, #switcher-narrow").click(function() {
		$('#switcher').off('click.kcc');   //click에 필요에 따라 namespace 이름을 추가 시킬수도 있음.
	})
	
	$('#switcher').trigger('click.kcc');  // 트리거에 의해 자동으로 이벤트가 먹여진 상태로 보여줄 수 있음.
	
})


