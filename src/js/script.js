const children = document.querySelectorAll('section')
const about = document.querySelector('.about');
const servicesImg = document.querySelector('.services-img');
const servicesText = document.querySelector('.services-list');
const buildadream = document.querySelector('.buildadream');
const rps = document.querySelector('.rps');
const hosting = document.querySelector('.hosting');
const quiz = document.querySelector('.quiz');

let t = 0;
const message = 'SEND A MESSAGE';
const contactTitle = document.querySelector('.contactTitle h2');
let programRan = false;

const typeWriter = type => {
  if (t < type.length) {
    contactTitle.innerHTML += type.charAt(t);
    t++;
    setTimeout(typeWriter, 40, type);
    programRan = true;
  }
};

const options = {
  threshold: .3
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      if(entry.target.classList.contains('aboutSection')) {
      about.style.display = 'block';
      about.style.animation = '1.5s ease-in-out slideLeft forwards';
      }
      if(entry.target.classList.contains('servicesSection')) {
        servicesImg.style.display = 'flex';
        servicesImg.style.animation = '1s ease-in-out up forwards';
        servicesText.style.animation = '1s .3s ease-in-out up forwards';
      }
      if(entry.target.classList.contains('buildSection')) {
        buildadream.style.display = 'flex';
        buildadream.style.animation = '1s ease-in-out forwards slideLeft';
      }
      if(entry.target.classList.contains('rpsSection')) {
        rps.style.display = 'flex';
        rps.style.animation = '1s ease-in-out forwards slideRight';
      }
      if(entry.target.classList.contains('hostingSection')) {
        hosting.style.display = 'flex';
        hosting.style.animation = '1s ease-in-out forwards slideLeft';
      }
      if(entry.target.classList.contains('quizSection')) {
        quiz.style.display = 'flex';
        quiz.style.animation = '1s ease-in-out forwards slideRight';
      }
      if(entry.target.classList.contains('contactSection')) {
        if (!programRan) {
          typeWriter(message);
        } 
      }
    }
  })
}, options);

children.forEach(child => {
  observer.observe(child);
});

