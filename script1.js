window.onload = function() {
  var rPosition = 0;
  var seconds = 10;
  var rest = true;
  var interval;
  var timeElapsed = 0;
var clicked = false;
var position  = 0;
var x = document.getElementById("myAudio"); 
var y = document.getElementById("beep"); 
  var started = false;
  var intervalTime = 30;
  var breakTime = 10;
  var list = ["Arm Circles",
"Walking Lunges",
"Shuffle left to right ",
"High Knees Punches",
"Plank",
"Side Lunges",
"Sit Ups",
"Ice Skaters",
"Sumo Squats",
"Mountain Climbers",
"Squat and Knee Up",
"Crossover Crunch",
"Kneel down and stand up ",
"Jab, Cross, Kick and Kick",
"Twisting Crunch (Elbow to knee)",
"Quadricep Stretch",
"Hamstring Stretch",
"Ab Stretch",
"Calves Stretch"];
  var wList = ["1. Arm Circles",
"<br>2. Walking Lunges",
"<br>3. Shuffle left to right ",
"<br>4. High Knees Punches",
"<br>5. Plank",
"<br>6. Side Lunges",
"<br>7. Sit Ups",
"<br>8. Ice Skaters",
"<br>9. Sumo Squats",
"<br>10. Mountain Climbers",
"<br>11. Squat and Knee Up",
"<br>12. Crossover Crunch",
"<br>13. Kneel down and stand up ",
"<br>14. Jab, Cross, Kick and Kick",
"<br>15. Twisting Crunch (Elbow to knee)",
"<br>16. Quadricep Stretch",
"<br>17. Hamstring Stretch",
"<br>18. Ab Stretch",
"<br>19. Calves Stretch"];  
  var dList = [30,
30,
30,
30,
30,
30,
30,
30,
30,
30,
30,
30,
30,
30,
10,
15,
15,
15,
15];
  var restList = [0,
0,
1,
0,
0,
0,
1,
0,
0,
0,
1,
0,
0,
0,
2,
2,
2];
  var links = ["workouts//jumping_jack.gif","workouts//wall_sit.gif","workouts//pushup.gif","workouts//crunches.gif","workouts//chair_step_up.gif","workouts//squat.gif","workouts//tricep_dips.gif","workouts//plank.gif","workouts//high_knees.gif","workouts//lunges.gif","workouts//pushup_rotation.gif","workouts//side_plank.gif",
              ];
 var linkSRC = document.getElementById("help");

  var startButton = document.getElementById("start");
  var pauseButton = document.getElementById("pause");
  
  var completeButton = document.getElementById("complete");
  
  var workList = document.getElementById("worklist");

  var statusHeader = document.getElementById("status");
  var secondsSpan = document.getElementById("sec");

  startButton.onclick = function() {
    rest = false;
    if(position==0 && started == false){
        started = true;
        seconds =dList[position];
    }
    if (clicked == false ){
    changeToGo();
    interval = setInterval(countdownSeconds, 1000);
    x.play();   
    clicked = true;
    }
  }

  pauseButton.onclick = function() {
    clicked = false;
    x.pause();
    y.pause();
    clearInterval(interval);
  }
  
  function countdownSeconds() {
    console.log("countdown",seconds,rest,clicked,rPosition);
    seconds -= 1;
    secondsSpan.innerText = seconds;
    if (seconds == 5){
        y.play();
    }
    checkForStateChange();
  }
    

  function checkForStateChange() {
    if (position == list.length){
    theEnd();}
    if (seconds == 0 && rest == false) {
      if (restList[rPosition] == 1){
          console.log("yolo in here now");
          rest = true;
          seconds = breakTime+1;
          rPosition = rPosition + 1;
          changeToRest();}
      if(rest==false){
      position = position+1;
      seconds = dList[position]+1;
      changeToGo();
      rPosition = rPosition +1; }
      }
     
    if(rest == true && seconds ==0){
       console.log("Hi");
        rest = false;
        position = position + 1;
        seconds = dList[position]+1;
        changeToGo();
    }
  }

  function changeToRest() {
    console.log(position,rPosition,restList[rPosition]);
    $("body").css("background", "cyan");
    statusHeader.innerText = "Rest";
    linkSRC.src = "workouts//rest.gif";
  }

  function changeToGo() {
    $("body").css("background", "pink");
    if(restList[rPosition]==2){
    $("body").css("background", "blue");
    }
    statusHeader.innerText = list[position];
    linkSRC.src = links[position];
  }
    
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("what");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  clicked = false;
  x.pause();
  y.pause();
  clearInterval(interval); 
}
 
var modalx = document.getElementById("completed");

// Get the button that opens the modal
var btnx = document.getElementById("complete");
var min = document.getElementById("min");
var cal = document.getElementById("cal");

// Get the <span> element that closes the modal
var spanx = document.getElementsByClassName("close")[1];
var secondsDone= 0;
var calSeconds = 0;
function theEnd() {
console.log("hi");
  clearInterval(interval); 
  var completed = wList.slice(0,position+1);
  var compString = completed.join(' ');
  workList.innerHTML = compString;
  
console.log(position,"length");
  for (i = 0; i < position+1; i++) {
  if (rPosition[i]==2)
      {
          rPosition = rPosition/2;
      }
  secondsDone += dList[i]+restList[i]*breakTime;
  calSeconds += dList[i];
}
    secondsDone = secondsDone - seconds;
    calSeconds = calSeconds - seconds;
min.innerText = parseInt(secondsDone/60)+":"+(secondsDone%60);
cal.innerText = calSeconds*12/60;
  clicked = false;
  modalx.style.display = "block";
  x.pause();
  y.pause();
}    

// When the user clicks the button, open the modal 

btnx.addEventListener('click', function() {
    theEnd();
}, false);
 

span.onclick = function() {
    modal.style.display = "none";
    if (rest==false && clicked == false && started!=false){
    console.log(clicked,interval);
    changeToGo();
    interval = setInterval(countdownSeconds, 1000);
    clearInterval(interval);
    if(seconds == 5){
    y.play();
    x.play();
    clicked = true;
    }
    else {
    x.play();
    clicked = true;
    }
    }
    if (rest==true && clicked == false && started!=false){
    console.log(clicked,interval);
    changeToRest();    
    interval = setInterval(countdownSeconds, 1000);
    clearInterval(interval);
    if(seconds == 5){
    y.play();
    x.play(); 
    clicked = true;
    }
    else {
    x.play();
    clicked = true;
    }
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    if (rest==false && clicked == false && started!=false){
    changeToGo();
    clearInterval(interval); 
    interval = setInterval(countdownSeconds, 1000);
    if(seconds == 5){
    y.play();
    x.play();
    clicked = true;
    }
    else {
    x.play();
    clicked = true;
    }
    }
    if (rest==true && clicked == false && started!=false){
    changeToRest();
    clearInterval(interval); 
    interval = setInterval(countdownSeconds, 1000);  
    if(seconds == 5){
    y.play();
    x.play(); 
    clicked = true;
    }
    else {
    x.play();
    clicked = true;
    }
    }
  }
}
    
}