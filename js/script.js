// menu-burger
let menuBtn = document.querySelector('.header-burger__btn');
let menu = document.querySelector('.header-menu');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})
// menu-burger

// wallet
function myFunction() {
  const copyText = document.getElementById("wallet");
  copyText.select();
  document.execCommand("copy");
  window.open('https://www.pinksale.finance/')
}
// wallet

// light-dark-mode
let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  const square = document.querySelector('.bear__img video');

  const square2 = document.querySelector('.bull__img  video');
  let them = document.getElementById("them");
  var pre = document.querySelector('.box-prerhod');
  pre.classList.add('box-prerhodno');
  setTimeout(() => {
    if (them.getAttribute("href") == "css/style.css") {
      them.href = "css/light-style.css";
      square.style.display = 'none';
      square2.style.display = 'none';
    } else {
      them.href = "css/style.css";
      square.style.display = 'block';
      square2.style.display = 'block';
    }
  }, "500");
  setTimeout(() => {
    pre.classList.add('box-prerhodno-op');
  }, "700");

  setTimeout(() => {
    pre.classList.remove('box-prerhodno');
    pre.classList.remove('box-prerhodno-op');
  }, "1300");
}
$(function () {

  var $video = $('.bull__img  video');
  var $video2 = $('.bear__img video');
  var $window = $(window);

  $window.scroll(function () {

    var $topOfVideo = $video.offset().top;
    var $bottomOfVideo = $video.offset().top + $video.outerHeight();
    var $topOfVideo2 = $video2.offset().top;
    var $bottomOfVideo2 = $video2.offset().top + $video2.outerHeight();
    var $topOfScreen = $window.scrollTop();
    var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();

    if (($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)) {
      $video[0].play();

    } else {
      $video[0].pause();
    }
    if (($bottomOfScreen > $bottomOfVideo2) && ($topOfScreen < $topOfVideo2)) {
      $video2[0].play();

    } else {
      $video2[0].pause();

    }
  });

});
// light-dark-mode

// submenu
let menuSub = document.querySelector('.submenu-1');
menuSub.addEventListener('click', function () {
  menuSub.classList.toggle('active-sub');
})

let menuSub2 = document.querySelector('.submenu-2');
menuSub2.addEventListener('click', function () {
  menuSub2.classList.toggle('active-sub-2');
})
// submenu


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    if (menuBtn.classList.contains('active') && this.href.search('#!') == -1) {
      menuBtn.classList.remove("active");
      menu.classList.remove("active");
    }
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })




}