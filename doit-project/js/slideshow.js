/* slideshow.js */
// id='sildes' 아래있는 img 태그들을 slides 변수에 담아놓는다.
var slides = document.querySelectorAll('#slides > img');
console.log(slides);
var prev = document.querySelector("#prev");//document.getElementById('prev')를 사용해도 됩니다.
//var prev = document.getElementById('prev');
var next = document.getElementById('next');//document.querySelector('#next')를 사용해도 됩니다.
var current = 0; // 현재 보여지는 이미지의 인덱스를 저장하는 변수

// 인덱스에 맞는 이미지를 보여주는 함수를 실행
showSlides(current);
// prev 버튼 이벤트
prev.onclick = prevSlide;
// next 버튼 이벤트
next.onclick = nextSlide;
// 슬라이드쇼 자동실행
setInterval(nextSlide, 2000);

function showSlides(n) {
  for (let i = 0 ; i < slides.length ; i++) {
    slides[i].style.display = 'none';
  }
  slides[n].style.display = 'block';
}

function prevSlide() {
  if (current > 0) current--;
  else current = slides.length - 1;// 가장 큰인덱스
  showSlides(current);
}

function nextSlide() {
  if (current < slides.length - 1) current++;
  else current = 0;
  showSlides(current);
}