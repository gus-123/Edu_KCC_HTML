function showPic(obj) {
  const source = obj.getAttribute('href');  //이미지 속성값을 추출
  const placeholder = document.getElementById('placeholder');  // 변경할 이미지 태그값을 추출
  placeholder.setAttribute('src', source); //이미지 값을 변경

  const text = obj.getAttribute('title'); // 글씨 속성값을 추출
  const description = document.getElementById('description'); // 변경할 글씨의 태그값을 추출
  //description.innerHTML = text;  //위의 방법은 비표준이나 보통 이걸 많이 사용 함.
  //description.insertAdjacentHTML('beforeend', text) // 뒤에 붙임 (덮어쓰기)

  if(description.firstChild.nodeType === 3) {  //위의 방법이 표준
    description.firstChild.nodeValue = text;
  }
  
}

//e.preventDefault() // 기본 이벤트 취소

function prepareGallery() {
  const imagegallery = document.getElementById('imagegallery');
  const links = imagegallery.getElementsByTagName('a')  //ul 태그 안에 있는 a태그들만으로 선택

  for(let i=0; i<links.length;i++){
    links[i].addEventListener('click',function(e){  
      e.preventDefault();  // 기본 이벤트 취소
      showPic(this)  //여기서 this는 links가 내가 선택한 a태그임
    }, false)
  }
}

window.onload = prepareGallery;
