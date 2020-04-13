window.onload = function() {

  var seconds = 40;
  var rest = true;
  var interval;
  var timeElapsed = 0;
var clicked = false;
var position  = 0;
var x = document.getElementById("myAudio"); 
var y = document.getElementById("beep"); 
var started = false;


  var intervalTime = 40;
  var breakTime = 10;
  var list = ["Jumping Jacks", "Wall Sit", "Push Ups","Crunches","Chair Step Ups","Squats","Triceps Dips","Plank", "High Knees","Lunges","Push Up Rotations","Side Plank"];
  var wList = ["1. Jumping Jacks", "<br>2. Wall Sit", "<br>3. Push Ups","<br>4. Crunches","<br>5. Chair Step Ups","<br>6. Squats","<br>7. Triceps Dips","<br>8. Plank", "<br>9. High Knees","<br>10. Lunges","<br>11. Push Up Rotations","<br>12. Side Plank"];    
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
    if(position==0){
        started = true;
    }
    if (clicked == false ){
    changeToGo();
    interval = setInterval(countdownSeconds, 1000);
    x.play();
    }
    clicked = true;
  }

  pauseButton.onclick = function() {
    clicked = false;
    x.pause();
    clearInterval(interval);
    
  }
  
  function countdownSeconds() {
    seconds -= 1;
    secondsSpan.innerText = seconds;
    if (seconds == 5){
        y.play();
    }
    checkForStateChange();
  }
    

  function checkForStateChange() {
    if (seconds == 0 && rest == false) {
      seconds = breakTime + 1;
      rest = true;
      position +=1;
      changeToRest();
      if (position == list.length){
      theEnd();
      }
    } else if (seconds == 0 && rest == true) {
      console.log(seconds,rest,"Hi");
      seconds = intervalTime + 1;
      rest = false;
      changeToGo();
      if (position == list.length){
      theEnd();
      }
    }
  }

  function changeToRest() {
    $("body").css("background", "cyan");
    statusHeader.innerText = "Rest";
    linkSRC.src = "workouts//rest.gif";
  }

  function changeToGo() {
    $("body").css("background", "pink");
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

function theEnd() {
console.log("hi");
  clearInterval(interval); 
  var completed = wList.slice(0,position+1);
  var compString = completed.join(' ');
  workList.innerHTML = compString;
  if(position%2==0 && rest==false){
  min.innerText =position/2 +' : ' + (intervalTime-seconds);}
 
  if(position%2!=0 && rest==false){
  min.innerText =floor(position/2) +' : ' + (intervalTime-seconds);
  cal.innerText = (position*30+30-seconds)*12/60;}

  if(position%2==0 && rest==true){
  min.innerText =position/2 +' : ' + 0;
  cal.innerText = (position*30)*12/60;}
    
  if(position%2!=0 && rest==true){
  min.innerText =position/2;
  cal.innerText = (position*30)*12/60;}
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
    changeToGo();
    interval = setInterval(countdownSeconds, 1000); 
    if(seconds == 5){
    y.play();
    x.play();
    }
    else {
    x.play();
    }
    }
    if (rest==true && clicked == false && started!=false){
    changeToRest();
    interval = setInterval(countdownSeconds, 1000);
    if(seconds == 5){
    y.play();
    x.play();
    }
    else {
    x.play();
    }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    if (rest==false && clicked == false && started!=false){
    changeToGo();
    interval = setInterval(countdownSeconds, 1000);
    if(seconds == 5){
    y.play();
    x.play();
    }
    else {
    x.play();
    }
    }
    if (rest==true && clicked == false && started!=false){
    changeToRest();
    interval = setInterval(countdownSeconds, 1000);  if(seconds == 5){
    y.play();
    x.play(); 
    }
    else {
    x.play();
    }
    }
  }
}
    
}