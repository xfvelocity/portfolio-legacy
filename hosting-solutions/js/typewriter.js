let t = 0;
const headerText = document.querySelector('.header-animate');
let programRan = false;

const typeWriter = type => {
  if (t < type.length) {
    headerText.innerHTML += type.charAt(t);
    t++;
    setTimeout(typeWriter, 80, type);
  }
};

typeWriter('simple');