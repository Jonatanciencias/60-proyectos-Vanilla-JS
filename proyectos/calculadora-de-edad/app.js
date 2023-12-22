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
- Questions:
  - how constructor works?
  - how Date() works? , what parameters receives and what returns?
  - what happens if the month and day of the birthday is different from the current month and day?
  - whats the difference between a method with () and without ()?
  - getDay() or getDate()?
- Summary:
*/


const calculate = document.getElementById('calculate');
const birthday = document.getElementById('birthday');


function calculateAge() {
  const birthdayValue = birthday.value;
  if (birthdayValue === '') {
    alert('Debes ingresar una fecha de nacimiento');
  } else {
    const age = getAge(birthdayValue);
    console.log(age);
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = birthdayDate.getMonth() - currentDate.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() > birthdayDate.getDate())) {
    age--; 
    console.log('Tu cumpleaños aún no ha llegado');
  } 
  
  return age;
}



calculate.addEventListener('click', calculateAge);