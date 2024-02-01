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
    - bring the roll-history element

  - function (rollDice) to generate a random number between 1 and 6 and round it
    - call the function to change the image of the dice element
    - change the innerHTML of the dice element to the new image.

  - function (getDiceFace) to change the image of the dice element
    - create a switch statement to change the image of the dice element depending on the random number generated.
    
  - Change the innerHTML of the dice element to the new image.(inside the rollDice function)

  - Create a variable (HistoryLIst) with an empty array for the history of the dice rolls
  - push the new dice roll to the HistoryList array with the rollResult
  - call the function (updateRollHistory) to update the history of the dice rolls

  - function (updateRollHistory) to update the history of the dice rolls
    - empty the innerHTML of the roll-history element
    - create a for loop to iterate over the HistoryList array
      - create a new li element (const listItem)
      - add the rollResult to the innerHTML in a new li element with backticks
        - create a getDiceFace functio that takes the historyList[i] as an argument
      - append the new li element to the roll-history element
      - appendChild the listItem to the roll-history element
      - comment the roll-history original elements in the html file
    
- Questions:
  - How to create a function inside the addEventListener method?
  - How to use backticks to create a string with a variable inside?
- Summary:
  - we must bring all the elements that we are going to use in the app.js file and after that, we can create three principal functions to make the app work.
    - rollDice function to generate a random number between 1 and 6 and change the image of the dice element.
    - getDiceFace function to change the image of the dice element depending on the random number generated.
    - HistoryList function to save the history of the dice rolls and update the roll-history element.
    - updateRollHistory function to update the history of the dice rolls.
*/ 

const rollButton = document.getElementById('roll-button');

const diceEl = document.getElementById ('dice');

rollButton.addEventListener('click', function() {
  diceEl. classList.add('roll-animation');
  setTimeout(function() {
    diceEl.classList.remove('roll-animation');
  }, 1000);
});