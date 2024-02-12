/*
Cornell Note:
- Notes: 
  - bring start button with the id of start
  - bring stop button with the id of stop
  - bring reset button with the id of reset
  - bring timer text with the id of timer

  - create a variable to store the interval
  - create a variable to store the timeLeft (1500 seconds)

  - create a function (updateTimer) to convert seconds to minutes and seconds
    - create a variable to store the minutes (math.floor(timeLeft/ 60)
    - create a variable to store the seconds (timeLeft % 60)
    - create a variable to store the formatedTime (minutes + ':' + seconds)

    - modify the timerEl text to display the formatedTime

  - create startTimer function
    - set interval with setInterval function 
    - decrement timeLeft by 1
    - call updateTimer every second

  - create stopTimer function
  - create resetTimer function

  - add event listener to start button and call startTimer function
  - add event listener to stop button and call stopTimer function
  - add event listener to reset button and call resetTimer function
  
- Questions:
- Summary:
*/