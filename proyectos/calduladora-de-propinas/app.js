/*
Cornell Note:
- Notes: 
  - Bringing the button element from the DOM.
  - Bringing the bill input element from the DOM.
  - Bringing the tip input element from the DOM.
  - Bringing the total element from the DOM.
  - Add an event listener to the button.
    - Create a function that will calculate the total.
      - Get the value of the bill input.
      - Get the value of the tip input.
      - Calculate the total multiplying the bill value by porcentage of the tip.
      - Print the total value in the total element (with two decimals)
      - Add a delay to the printing of the total value.
  - 
- Questions:
- Summary:
*/

const btnEl  = document.getElementById('calculate');
const billInput = document.getElementById('bill'); 
const tipInput = document.getElementById('tip');
const totalEl = document.getElementById('total');

btnEl.addEventListener('click',  calculateTotal => {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 +  (tipValue / 100));
  const text = totalValue.toFixed(2);

  let i = 0;
  const speed = 100; // velocidad de escritura en milisegundos

  function typeEffect() {
    if (i < text.length) {
      totalEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    }
  }

  totalEl.textContent = '';
  typeEffect();
})



