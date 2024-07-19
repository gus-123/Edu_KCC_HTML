$(function() {
	$('div.label').click(function() {
		const pWidth = $('div.speech p').outerWidth();
		const divWidth = $('#switcher').outerWidth();
		
		//console.log(pWidth + " : " + divWidth);
		const num = parseInt(pWidth) - parseInt(divWidth);
		
		$('#switcher')
			.fadeTo('fast', 0.5)
			.animate({marginLeft : num}, 'slow')
			.fadeTo('fast', 1.0)
			.slideUp('slow', function() {
				$(this).css('background', ' red')
			})
			.slideDown('slow');
	})
	
})

//2번째 p태그를 화면에서 숨김 : hide()
//<a>read more</a> => 클릭 : 사라진 p태그 화면 보임
//slideUp() + slideDown() => slideToggle()
//read more => 클릭 => read less
//read less => 클릭 => read more
//text(값) : 텍스트 값을 변경, text() : 텍스트 값을 추출
$(function() {
	$('.speech p:eq(1)').slideToggle('slow');
	$('a.more').click(function () {
		$('div.speech p').eq(1).slideToggle('slow');
		
		const $link = $(this);  // this는 a가 됨.
		if($link.text() == 'read more') {
			$link.text('read less');
		}else {
			$link.text('read more');
		}
	})
})

//large => 기존 폰트 크기 1.2배 커지도록
//small => 기존 폰트 크기 1.2배 작아지도록
//default => 처음 글자 크기
//css('fontSize'), css('fontSize', 12px)

/* 
// 나의 방식 -> :nth-child(n).filter 가능
const Increase = 1.2;
const Decrease = 0.8;
const defaul = 12;

$(function() {
	  $('#switcher-large').click(function() {
	    $('.speech').find('p').css("font-size", defaul * Increase);
	  });

	  $('#switcher-small').click(function() {
		  $('.speech').find('p').css("font-size", defaul * Decrease);
	  });

	  $('#switcher-default').click(function() {
		  $('.speech').find('p').css("font-size", defaul);
	  });
});
*/

//교수님 방식
$(function() {
	const $speech = $('div.speech');
	const defaultSize = parseInt($speech.css('fontSize'));
	
	$('#switcher button').click(function() {
		let num = parseInt($speech.css('fontSize'));
	
		switch(this.id) {
		case 'switcher-large':
			num *=1.2;
			break;
		
		case 'switcher-small':
			num /=1.2;
			break;
		
		default:
			num = defaultSize;
			break;
		}
		$speech.animate({fontSize: num + 'px'}, 'slow');
	})
})


