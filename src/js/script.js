const projectTitle = document.querySelector('.projects-title p');
const all = document.querySelectorAll('.all');
const js = document.querySelectorAll('.javascript');
const web = document.querySelectorAll('.websites');

//* Determines what it display by the parameters it is passed
const projects = (area1, area2) => {
  area1.forEach(element => {
    element.style.display = '';
  });
  area2.forEach(element => {
    element.style.display = 'none';
  });
};

projectTitle.addEventListener('click', e => {
  const buttonPress = e.target;
  const current = document.querySelector('.current');
  if (current.classList == 'current') {
    current.classList.remove('current');
  }
  buttonPress.classList.add('current');
  if (buttonPress.innerHTML == 'PROJECTS') {
    projects(js, web); //* js displayed, web not displayed
  } else if (buttonPress.innerHTML == 'WEBSITES') {
    projects(web, js);
  } else if (buttonPress.innerHTML == 'ALL') {
    js.forEach(element => {
      element.style.display = '';
    });
    web.forEach(element => {
      element.style.display = '';
    });
  }
});

//* Animations
const about = document.querySelector('.about');
const servicesImg = document.querySelector('.services-img');
const servicesText = document.querySelector('.services p');
const projectsTitle = document.querySelector('.projects-title h2');
const leftProject = document.querySelectorAll('.left');
const rightProject = document.querySelectorAll('.right');

//* Type out a message Animation
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

about.style.display = 'none';
servicesImg.style.display = 'none';
for (let i = 0; i < leftProject.length; i++) {
  leftProject[i].style.display = 'none';
}
for (let i = 0; i < rightProject.length; i++) {
  rightProject[i].style.display = 'none';
}

//* Play animation on page region
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 160) {
    about.style.display = '';
    about.style.animation = '1.5s ease-in-out slideLeft forwards';
  }
  if (window.pageYOffset > 540) {
    servicesImg.style.display = '';
    servicesImg.style.animation = '1s ease-in-out up forwards';
    servicesText.style.animation = '1s .3s ease-in-out up forwards';
  }
  if (window.pageYOffset > 1000) {
    for (let i = 0; i < leftProject.length; i++) {
      leftProject[i].style.display = '';
    }

    for (let i = 0; i < rightProject.length; i++) {
      rightProject[i].style.display = '';
    }
    projectsTitle.style.animation = '1s ease-in-out up forwards';
    leftProject[0].style.animation = '1s ease-in-out forwards slideLeft';
    rightProject[0].style.animation = '1s .25s ease-in-out forwards slideRight';
    leftProject[1].style.animation = '1s .5s ease-in-out forwards slideLeft';
    rightProject[1].style.animation = '1s .75s ease-in-out forwards slideRight';
    leftProject[2].style.animation = '1s 1s ease-in-out forwards slideLeft';
  }
  if (window.pageYOffset > 1900) {
    if (!programRan) {
      typeWriter(message);
    }
  }
});
