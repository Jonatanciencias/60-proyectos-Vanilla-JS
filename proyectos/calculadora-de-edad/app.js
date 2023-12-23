/*
Cornell Note:
- Notes: 
  1. obtain the calculate button and the birthday input
  2. add an event listener to the click event of the calculate button
  3. create a function calculateAge():
    - that returns an alert if the birthday input is empty.
    - use the getAge function to calculate the age.
  4. create a function getAge():
    - that receives the birthdayValue.
    - creates a new date object with the current date.
    - creates a new date object with the birthdayValue and the new Date() constructor.
    - calculates the age subtracting the current year with the birthday year.
    - evaluates if:
      - the birthday month is less than the current month.
      - the birthday month is equal to the current month but the birthday day is less than the current day.
    5. link the outputEl in a const.
    6. add writing effect to the outputEl.
      - create a index variable.
      - create a text variable with the output text.
      - create a speed variable with the writing speed.
      - create a function typeEffect():
        - if the index is less than the text length:
          - add the text character at the index position to the outputEl.
          - increase the index.
          - call the typeEffect function after the speed time.
- Questions:
  - how constructor works?
  - how Date() works? , what parameters receives and what returns?
  - what happens if the month and day of the birthday is different from the current month and day?
  - whats the difference between a method with () and without ()?
  - getDay() or getDate()?
  - How to use innerHTML?
  - How to add writing effect to the outputEl?
- Summary:
  - The JavaScript code consists of the following components:
      1. Obtaining the calculate button and the birthday input.
      2. Adding an event listener to the click event of the calculate button.
      3. Creating a function calculateAge() that:
        - Returns an alert if the birthday input is empty.
        - Uses the getAge() function to calculate the age.
      4. Creating a function getAge() that:
        - Receives the birthdayValue.
        - Creates a new Date object with the current date.
        - Creates a new Date object with the birthdayValue using the Date constructor.
        - Calculates the age by subtracting the current year from the birthday year.
        - Evaluates if the birthday month is less than the current month or if the birthday month is equal to the current month but the birthday day is less than the current day.
      5. Linking the outputEl element to a constant.
      6. Adding a writing effect to the outputEl element:
        - Creating an index variable.
      - Creating a text variable with the output text.
      - Creating a speed variable with the writing speed.
      - Creating a function typeEffect() that:
        - If the index is less than the text length:
          - Adds the text character at the index position to the outputEl.
          - Increases the index.
          - Calls the typeEffect() function after the speed time.
*/

/**
 * Obtains the calculate button, birthday input, and output element.
 */
const btnCalculate = document.getElementById('btnCalculate');
const inputBirthday = document.getElementById('inputBirthday');
const outputEl = document.getElementById('outputEl');

/**
 * Calculates the age based on the provided birthday value.
 */
function calculateAge() {
  const birthdayValue = inputBirthday.value;

  if (birthdayValue === '') {
    alert('Please enter your birthday');
  } else {
    const age = getAge(birthdayValue);
    let i = 0;
    const text = `Tu edad es ${age} años.`;
    const speed = 100; // writing speed

    /**
     * Adds a writing effect to the output element.
     */
    function typeEffect() {
      if (i < text.length) {
        outputEl.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
      }
    }

    typeEffect();
  }
}

/**
 * Calculates the age based on the provided birthday value.
 * 
 * @param {string} birthdayValue - The birthday value in string format.
 * @returns {number} The calculated age.
 */
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    age--;
  } else if (age < 0) {
    age = 0;
  }

  return age;
}

btnCalculate.addEventListener('click', calculateAge);

