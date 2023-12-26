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
- Questions:
  - How to add a delay to the printing of the total value?
  - Why totalEl.textContent = ''; is needed?
- Summary:

web application that calculates the total bill including a tip. It defines a function called calculateTotal that is triggered by a click event.

Inside the calculateTotal function, it retrieves the values of the bill and tip inputs from the HTML document. It then calculates the total bill by multiplying the bill value by the percentage of the tip. The result is stored in the totalValue variable.

*/


/**
 * Calculates the total bill including tip and displays it with a typing effect.
 * @param {Event} event - The click event object.
 */
const calculateTotal = (event) => {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + (tipValue / 100));
  const text = totalValue.toFixed(2);

  let i = 0;
  const speed = 100;

  /**
   * Types out the total value with a typing effect.
   */
  function typeEffect() {
    if (i < text.length) {
      totalEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    }
  }

  totalEl.textContent = '';
  typeEffect();
};

// Get DOM elements
const btnEl = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalEl = document.getElementById('total');

// Add event listener to calculate button
btnEl.addEventListener('click', calculateTotal);




