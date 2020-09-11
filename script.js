const headerElement = document.querySelector("header");
const videoElement = document.querySelector("video");
const optionBtnsElement = document.getElementById("options");
const startBtn = document.getElementById("startBtn");
const howToPlayBtn = document.getElementById("howToPlayBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const autoAtt = document.createAttribute("autoplay");
const footerElement = document.querySelector("footer");

let state = 0;

videoElement.addEventListener("ended", function () {
  switch (state) {
    case 0:
      leftBtn.innerHTML = "Left Restaurant";
      rightBtn.innerHTML = "Right Restaurant";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 1:
      showVideo(3);
      openFullscreen();
      state++;
      break;
    case 2:
      leftBtn.innerHTML = "Around the Mountain";
      rightBtn.innerHTML = "Through the Cave";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 3:
      showVideo(6);
      openFullscreen();
      state++;
      break;
    case 4:
      leftBtn.innerHTML = "Left Cave";
      rightBtn.innerHTML = "Right Cave";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 5:
      showVideo(9);
      openFullscreen();
      state++;
      break;
    case 6:
      videoElement.style.display = "none";
      startBtn.innerHTML = "Journey Again?";
      startBtn.style.display = "block";
      howToPlayBtn.style.display = "block";
      footerElement.style.display = "flex";
      closeFullscreen();
      break;
    default:
      alert("ERROR: How did you get here?");
      break;
  }
});

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  howToPlayBtn.style.display = "none";
  videoElement.setAttributeNode(autoAtt);
  videoElement.style.display = "block";
  videoElement.src = "./Videos/Safari_Intro.mp4";
  footerElement.style.display = "none";
  openFullscreen();
  state = 0;
});

leftBtn.addEventListener("click", function () {
  switch (state) {
    case 0:
      hideButtons();
      showVideo(1);
      openFullscreen();
      state++;
      break;
    case 2:
      hideButtons();
      showVideo(4);
      openFullscreen();
      state++;
      break;
    case 4:
      hideButtons();
      showVideo(7);
      openFullscreen();
      state++;
      break;
    default:
      alert("ERROR: Now how did you get here?");
  }
});

rightBtn.addEventListener("click", function () {
  switch (state) {
    case 0:
      hideButtons();
      showVideo(2);
      openFullscreen();
      state++;
      break;
    case 2:
      hideButtons();
      showVideo(5);
      openFullscreen();
      state++;
      break;
    case 4:
      hideButtons();
      showVideo(8);
      openFullscreen();
      state++;
      break;
    default:
      alert("ERROR: Now how did you get here?");
  }
});

// Video Sources Array
const videoList = [
  "./Videos/Safari_Intro.mp4",
  "./Videos/Safari_Food_Left.mp4",
  "./Videos/Safari_Food_Right.mp4",
  "./Videos/Safari_Stampede.mp4",
  "./Videos/Safari_Stampede_Left.mp4",
  "./Videos/Safari_Stampede_Right.mp4",
  "./Videos/Safari_Cave.mp4",
  "./Videos/Safari_Cave_Left.mp4",
  "./Videos/Safari_Cave_Right.mp4",
  "./Videos/Safari_End.mp4",
];

// Helper Functions
function showVideo(videoIndex) {
  videoElement.src = videoList[videoIndex];
}

function hideButtons() {
  optionBtnsElement.style.display = "none";
}

function openFullscreen() {
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) {
    /* Firefox */
    videoElement.mozRequestFullScreen();
  } else if (videoElement.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    videoElement.webkitRequestFullscreen();
  } else if (videoElement.msRequestFullscreen) {
    /* IE/Edge */
    videoElement.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (videoElement.exitFullscreen) {
    videoElement.exitFullscreen();
  } else if (videoElement.mozCancelFullScreen) {
    /* Firefox */
    videoElement.mozCancelFullScreen();
  } else if (videoElement.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    videoElement.webkitExitFullscreen();
  } else if (videoElement.msExitFullscreen) {
    /* IE/Edge */
    videoElement.msExitFullscreen();
  }
}

// Description Slideshow Script

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
