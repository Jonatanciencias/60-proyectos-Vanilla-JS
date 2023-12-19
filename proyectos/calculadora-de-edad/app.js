const calculate = document.getElementById('calculate');
const birthday = document.getElementById('birthday');



function calculateAge() {
  const birthdayValue = birthday.value;
  if (birthdayValue === '') {
    alert('Debes ingresar una fecha de nacimiento');
  } else {
    const age = getAge(birthdayValue);
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  const age = currentDate.getFullYear() - birthdayDate.getFullYear();
  console.log(age);
}

calculate.addEventListener('click', calculateAge);