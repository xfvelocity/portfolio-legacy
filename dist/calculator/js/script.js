const calcButton = document.getElementsByClassName('calcButton');
const calculator = document.querySelector('.calculator');
const calcDisplay = document.querySelector('.display');

calculator.addEventListener('click', e => {
  const buttonPress = e.target;
  const action = buttonPress.dataset.action;
  let sum1 = 0;
  let sum2 = 0;
  let total = 0;
  if (buttonPress.tagName === 'BUTTON') {
    if (!action) {
      if (calcDisplay.textContent === '0') {
        calcDisplay.textContent = buttonPress.textContent;
      } else {
        sum1 = calcDisplay.textContent + buttonPress.textContent;
        calcDisplay.textContent = sum1;
      }
    } else if (action === 'add') {
      calcDisplay.textContent = '';
      sum2 = calcDisplay.textContent + buttonPress.textContent;
      calcDisplay.textContent = sum2;
      console.log(sum1);
      console.log(sum2);
    } else if (action === 'total') {
      calcDisplay.textContent = '';
      total = parseInt(sum1) + parseInt(sum2);
      calcDisplay.textContent = total;
    }
  }
});
