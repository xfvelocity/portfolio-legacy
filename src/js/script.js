const children = document.querySelectorAll('section')
const about = document.querySelector('.about');
about.style.display = 'none';
const servicesImg = document.querySelector('.services-img');
const servicesText = document.querySelector('.services-list');
servicesImg.style.display = 'none';
const leftProject = document.querySelectorAll('.left');
const rightProject = document.querySelectorAll('.right');
leftProject.forEach(project => {
  project.style.display = 'none';
});
rightProject.forEach(project => {
  project.style.display = 'none';
})
console.log(leftProject);
const options = {};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting && entry.target.classList.contains('aboutSection')) {
      about.style.display = '';
      about.style.animation = '1.5s ease-in-out slideLeft forwards';
    }
    if(entry.isIntersecting && entry.target.classList.contains('servicesSection')) {
      servicesImg.style.display = '';
      servicesImg.style.animation = '1s ease-in-out up forwards';
      servicesText.style.animation = '1s .3s ease-in-out up forwards';
    }
    if(entry.isIntersecting && entry.target.classList.contains('projectSection')) {
      leftProject.forEach(project => {
        project.style.display = '';
      });
      rightProject.forEach(project => {
        project.style.display = '';
      })
      leftProject[0].style.animation = '1s ease-in-out forwards slideLeft';
      rightProject[0].style.animation = '1s .25s ease-in-out forwards slideRight';
      leftProject[1].style.animation = '1s .5s ease-in-out forwards slideLeft';
      rightProject[1].style.animation = '1s .75s ease-in-out forwards slideRight';
    }
  })
}, options);

children.forEach(child => {
  observer.observe(child);
});


/*
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
  if (!programRan) {
    typeWriter(message);
  }
*/