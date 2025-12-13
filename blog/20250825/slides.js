let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  //check slides
  if (slides.length > 0) {
    slides[slideIndex-1].style.display = "block";
    
  
    if (dots.length > 0) {
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }
  }
}

//keys
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    plusSlides(1);
  } 
  else if (event.key === 'ArrowLeft') {
    plusSlides(-1);
  }
});


//go back/forth clicking on pictures
document.addEventListener('DOMContentLoaded', (event) => {
  let slides = document.getElementsByClassName("mySlides");
  

  for (let i = 0; i < slides.length; i++) {
      
      slides[i].addEventListener('click', function(clickEvent) {
          const rect = clickEvent.currentTarget.getBoundingClientRect();
          const clickX = clickEvent.clientX - rect.left;
          
          //go back
          const mitadAncho = rect.width / 4;
          
          if (clickX < mitadAncho) {
              plusSlides(-1); 
          } else {
              plusSlides(1); 
          }
      });
  }
});

//audio
const audioElement = document.getElementById("miAudioPlayer");

if (audioElement) {
  document.addEventListener('keydown', function(event) {
      if (event.code === 'Space') {
          event.preventDefault(); 
          if (audioElement.paused) {
                audioElement.play();
          }
          else {
              audioElement.pause();
          }
      }
  });
}

