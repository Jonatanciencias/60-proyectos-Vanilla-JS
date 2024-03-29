/*
Cornell Note:
- Notes: 
  - bring the the roll-button
  - addEventListener to the roll-button
    - create the unname function that will be executed when the roll-button is clicked inside the addEventListener method
  - bring the dice element
  - add the animation class to the dice element in css
    - create setTimeout method 
      - add a unname function that will remove the animation class from the dice element after 1 second
      - call the rollDice function inside the setTimeout method
  - bring the roll-history element

  - function (rollDice) to generate a random number between 1 and 6 and round it
    - create a const (rollResult) to generate a random number between 1 and 6 and round it
    - call the function (getDiceFace) to change the image of the dice element

  - function (getDiceFace) to change the image of the dice element
    - create a switch with 6 statement to change the image of the dice element depending on the random number generated.
    
  - Change the innerHTML of the dice element to the new image.(inside the rollDice function)

  - Create a variable (HistoryList) with an empty array for the history of the dice rolls
  - push the new dice  from rollDice function to the HistoryList array with the rollResult
  - call the function (updateRollHistory) to update the history of the dice rolls

  - function (updateRollHistory) to update the history of the dice rolls
    - empty the innerHTML of the roll-history element
    - create a for loop to iterate over the HistoryList array
      - create a new li element (const listItem)
      - add the rollResult to the innerHTML in a new li element with backticks
        - create a getDiceFace function that takes the historyList[i] as an argument
      - append the new li element to the roll-history element
      - appendChild the listItem to the roll-history element
      - comment the roll-history original elements in the html file
    
- Questions:
  - How to create a function inside the addEventListener method?
  - How to use backticks to create a string with a variable inside?
  - how works animation in css with keyframes?

- Summary:
  - we must bring all the elements that we are going to use in the app.js file and after that, we can create three principal functions to make the app work.
    - rollDice function to generate a random number between 1 and 6 and change the image of the dice element.
    - getDiceFace function to change the image of the dice element depending on the random number generated.
    - HistoryList function to save the history of the dice rolls and update the roll-history element.
    - updateRollHistory function to update the history of the dice rolls.
*/ 

const rollButton = document.getElementById("roll-button");

const diceEl = document.getElementById ("dice");

const rollHistory = document.getElementById("roll-history");

let historyList = [];


rollButton.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice()
  }, 1000);
});


function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}


function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return " ";
  }

}

function updateRollHistory() {
  rollHistory.innerHTML = "";
  for (let h = 0; h < historyList.length; h++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Tirada ${h + 1}: <span> ${getDiceFace(historyList[h])} </span>`;
    rollHistory.appendChild(listItem);

  }

}




