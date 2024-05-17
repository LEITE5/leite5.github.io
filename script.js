let lastScroll = 0;
let currentSlide = 0;
let isMobile = window.innerWidth <= 670;
const slides = document.querySelectorAll('.carousel img');
const questions = document.querySelectorAll('.question');

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // Scrolling down
    document.querySelector("header").style.transform = "translateY(-100%)";
    document.querySelector("#myNav").style.transform = "translateY(-100%)";
    document.querySelector("#myNav").style.display = "none";
  } else {
    // Scrolling up
    document.querySelector("header").style.transform = "translateY(0)";
    document.querySelector("#myNav").style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

// JavaScript to toggle answer visibility
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display == "" || answer.style.display == "none")  {
                answer.classList.toggle('show');
                answer.style.display = "flex";
            } else {
                answer.style.display = "none";
            }
            
        });
    });





