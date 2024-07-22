//step1
$(function() {
	$('#letter-a a').click(function() {
		//html 형식을 바로 확인하고 싶으면 .load()사용
		$('#dictionary').hide().load('a.html', function() {
			$(this).fadeIn(); // this는 dictionary를 가리킴
		});
		return false; // 기본이벤트 취소 a 태그이기 때문
	});
});
/*
$(function() {
  $('#letter-a a').click(function(event) {
    event.preventDefault(); // 기본 이벤트 취소

    $('#dictionary').hide().load('a.html', function() {
      $(this).fadeIn(); // this는 dictionary를 가리킴
    });
  });
});
 */

//step2
/*
$(function() {
	$('#letter-b a').click(function() {
		//json 형식을 바로 확인하고 싶으면 .getJSON()사용
		$.getJSON('b.json', function(data) {  // 제이쿼리 객체를 선택하지 않으면 전역함수 '$'를 사용해야함.
			$('#dictionary').empty();  //안에 있는 데이터를 나타나지 않게 할수 있음 
			// 결과값 : 배열 => [{},{},{}] => HTML
			$.each(data, function(index, item) {
				let html ='<div class="entry">';
				html += '<h3 class="term">' + item.term + '</h3>';
				html += '<div class="part">' + item.part + '</div>';
				html += '<div class="definiton">' + item.definition + '</div>';
				html += '</div>';
				
				$('#dictionary').append(html);  //id가 "dictionary"인 HTML 요소를 선택 후 선택된 요소의 마지막 자식 요소로 html 변수에 저장된 HTML 문자열을 삽입
			}) 
		});
		
		return false; // 기본이벤트 취소 a 태그이기 때문
	});
});
*/

//step2 -1 (step2를 ajax 형식으로 변환)
$(function() {
	$('#letter-b a').click(function() {
		$('#dictionary').empty();  
		$.ajax({  // 객체 형식으로 넣어주어야 함
			url: 'b.json',
			type: 'post',
			dataType: 'json',
			success: function(data) {  // Ajax가 성공할 경우 'b.json'의 결과값을 부른다. - data결과값을 success를 하면 받을수 있기에 data를 따로 적어 줄 필요가 없음.
				$('#dictionary').empty();  //안에 있는 데이터를 나타나지 않게 할수 있음 
				
				// 내림차순으로 정렬 구현
				data.sort(function(a,b) {
					if(a.term < b.term) {
						return 1;
					}else if(a.term < b.term) {
						return -1;
					}else {
						return 0;
					}
				});
				
				// 결과값 : 배열 => [{},{},{}] => HTML
				$.each(data, function(index, item) {
					let html ='<div class="entry">';
					html += '<h3 class="term">' + item.term + '</h3>';
					html += '<div class="part">' + item.part + '</div>';
					html += '<div class="definiton">' + item.definition + '</div>';
					html += '</div>';
					
					$('#dictionary').append(html);  //id가 "dictionary"인 HTML 요소를 선택 후 선택된 요소의 마지막 자식 요소로 html 변수에 저장된 HTML 문자열을 삽입
				}) 
			}
		})
		
		return false; 
	});
});

//step3
$(function() {
	$('#letter-c a').click(function() {
		//html에서 자바스크립트 바로 띄우기 위한 용도
		$.getScript('c.js');  //처음에 한번에 js를 로딩하지 않고 분할해서 로딩할수 있게 하기 위함(메인 js가 아닌 '버튼의 기능을 담당하는 자바스크립트' 와 같은 부분적인것을 이런씩으로 사용)
		
		return false; // 기본이벤트 취소 a 태그이기 때문
	});
});

//step4
$(function() {
	$('#letter-d a').click(function() {
		//xml => HTML 변환
		$.get('d.xml',function(data) {  // data안에 entries가 들어가 있음 - dom 자바스크립트 객체임
			$('#dictionary').empty();  //안에 있는 데이터를 나타나지 않게 할수 있음 
			$(data).find('entry').each(function(index) {  // 자식의 값을 가져오기 위해 find() 함수를 이용해서  - 자식 entry롤 find로 들어가서 html의 요소를 뽑기 위해 each를 사용
				$entry = $(this);  // this가 뭔지 표기 하기 위해 '$변수명'으로 명명 해줌.
				let html = '<div calss="entry">';
				html += '<h3 class="term">' + $entry.attr('term') + '</h3>';  // 속성을 가져오기 위해서는 attr() 함수를 사용
				html += '<div class="part">' + $entry.attr('part') + '</div>';
				html += '<div class="definition">' + $entry.find('definition').text() + '</div>';
				
				$('#dictionary').append(html);
			})
		});  
		
		return false; // 기본이벤트 취소 a 태그이기 때문
	});
});


//step5
$(function() {
	$('#letter-e a').click(function() {
		//jsp => HTML 변환(서버에서 데이터 전달하는 방식 => key:value)
		//url, parameter, callback
		$.get('server3.jsp', {'term' : $(this).text()}, function(data) {   // this는  a태그 - (a 태그 안의 text를 뽑아야하기때문)
			$('#dictionary').text(data);
		}); 
		
		return false; 
	});
});

//step6
$(function() {
	$('#letter-f form').submit(function() {
		$.ajax({  // 객체 형식으로 넣어주어야 함
			url: 'server3.jsp',
			type: 'post',
			data: $(this).serialize(), // 현재 요소(보통은 form 요소)의 모든 입력 요소의 값을 쿼리 문자열 형식으로 변환하여 반환 ex) name1=value1&name2=value2&...&namen=valuen
			dataType: 'text',
			success: function(data) {  // 서버의 결과 값이 잘 도출됬을때  서버의 값을 출력(data)
				$('#dictionary').text(data);
			}
		})
		
		return false; 
	});
});