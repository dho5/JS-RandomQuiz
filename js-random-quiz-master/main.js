// Interactive Random Quiz
 
// Event Listener
document.getElementById('markBtn').addEventListener('click', markQuiz);
 
// Global variables
let firstAns;
let secondAns;
let thirdAns;
let fourthAns;
let markValue = 0;
let markPercent;
 
// Event Functions
function markQuiz() {
  // INPUT
  firstAns = document.getElementById('firstInput').value;
  firstAns = firstAns.toLowerCase();
  secondAns = document.getElementById('secondInput').value;
  secondAns = secondAns.toLowerCase();
  thirdAns = document.getElementById('thirdInput').value;
  thirdAns = thirdAns.toLowerCase();
  fourthAns = document.getElementById('fourthInput').value;
  fourthAns = fourthAns.toLowerCase();
 
  // PROCESS
  if (firstAns == 'canada') {
    document.getElementById('firstInput').style.backgroundColor = 'limegreen';
    document.getElementById('firstFeedback').innerHTML = 'Correct!';
    markValue += 1;
  } else {
      document.getElementById('firstInput').style.backgroundColor = 'red';
      document.getElementById('firstFeedback').innerHTML = 'Incorrect.';
  }
  
  if (secondAns == 'cardinal') {
    document.getElementById('secondInput').style.backgroundColor = 'limegreen';
    document.getElementById('secondFeedback').innerHTML = 'Correct!';
    markValue += 1;
  } else {
      document.getElementById('secondInput').style.backgroundColor = 'red';
      document.getElementById('secondFeedback').innerHTML = 'Incorrect.';
  }

  if (thirdAns == 'master shifu' || thirdAns == 'shifu') {
    document.getElementById('thirdInput').style.backgroundColor = 'limegreen';
    document.getElementById('thirdFeedback').innerHTML = 'Correct!';
    markValue += 1;
  } else {
      document.getElementById('thirdInput').style.backgroundColor = 'red';
      document.getElementById('thirdFeedback').innerHTML = 'Incorrect.';
  }

  if (fourthAns == 'tibetan mastiff') {
    document.getElementById('fourthInput').style.backgroundColor = 'limegreen';
    document.getElementById('fourthFeedback').innerHTML = 'Correct!';
    markValue += 1;
  } else {
      document.getElementById('fourthInput').style.backgroundColor = 'red';
      document.getElementById('fourthFeedback').innerHTML = 'Incorrect.';
  }

  // OUTPUT
  markPercent = markValue / 4;
 
  document.getElementById('markResult').innerHTML = 'Your mark is ' + markValue + ' / 4 (' + markPercent + '%)!';
 
  document.getElementById('thankYou').innerHTML = 'Thank you for taking this Random Quiz!';
}