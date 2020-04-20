window.onload = function() {

  var seconds = 40;
  var rest = false;
  var interval;
  var timeElapsed = 0;
var clicked = false;
var position  = 0;
var x = document.getElementById("myAudio"); 
var y = document.getElementById("beep"); 
var started = false;
  var intervalTime = 40;
  var breakTime = 10; 
  var list = ["Standing Criss-Cross Crunch",
"Right Oblique Crunch",
"Left Oblique Crunch",
"six inch crunch hold",
"Plank",
"Bicycle Crunch",
"Flutter Kicks",
"Scissor Kicks",
"Plank Jacks",
"Plank with Hip Dips",
"Supermans",
"Mountain Climbers",
"Reverse Plank",
"Cobra Stretch"];
  var wList = ["1. Standing Criss-Cross Crunch",
"<br>2. Right Oblique Crunch",
"<br>3. Left Oblique Crunch",
"<br>4. 6 inch crunch hold",
"<br>5. Plank",
"<br>6. Bicycle Crunch",
"<br>7. Flutter Kicks",
"<br>8. Scissor Kicks",
"<br>9. Plank Jacks",
"<br>10. Plank with Hip Dips",
"<br>11. Supermans",
"<br>12. Mountain Climbers",
"<br>13. Reverse Plank",
"<br>14. Cobra Stretch"];


  var links = ["workouts//standing_criss_cross_crunch.gif",
"workouts//Right_Oblique_Crunch.gif",
"workouts//Left_Oblique_Crunch.gif",
"workouts//6inch_crunch_hold.gif",
"workouts//plank.gif",
"workouts//Bicycle_crunch.gif",
"workouts//flutter_kicks.gif",
"workouts//scissor_kicks.gif",
"workouts//Plank_Jacks.gif",
"workouts//Plank_sidedips.gif",
"workouts//Supermans.gif",
"workouts//Mountain_climber.gif",
"workouts//Reverse_Plank.gif",
"workouts//Cobra_Stretch.gif",];



 var linkSRC = document.getElementById("help");
    
 var controls = document.getElementsByClassName("controls");

  var startButton = document.getElementById("start");
  var pauseButton = document.getElementById("pause");
  
  var completeButton = document.getElementById("complete");
  
  var workList = document.getElementById("worklist");

  var statusHeader = document.getElementById("status");
  var secondsSpan = document.getElementById("sec");



  startButton.onclick = function() {
    if(position==0){
        started = true;
    }
    console.log(clicked,interval);
    if (clicked == false ){
    if(rest==true){
    changeToRest();
    console.log("gooo");}
    else {
    changeToGo();
    }
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
    seconds -= 1;
    secondsSpan.innerText = seconds;
    if (seconds == 5){
        y.play();
    }
    checkForStateChange();
  }
    

  function checkForStateChange() {
    if (seconds == 0 && rest == false) {
      if(position<12){
      seconds = breakTime + 1;}
      else {
      seconds = 31;
      }
      rest = true;
      position +=1;
      if(position<13){
      changeToRest();    
      }
    else{
        changeToGo();
        rest = false;
    }
      if (position == list.length){
      theEnd();
      }
    } else if (seconds == 0 && rest == true) {
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
    if(position>12){
    $("body").css("background", "AliceBlue");
    }
  }
    
var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

 
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
  min.innerText ='0'+position/2 +' : ' + (intervalTime-seconds);}
 
  if(position%2!=0 && rest==false){
  console.log("summary",position,intervalTime,seconds);
  if(Math.floor(position/2)==0){
  min.innerText ='0'+0+' : ' + ((position+1)*intervalTime-seconds);}
  else {
  min.innerText ='0'+Math.floor(position/2)+' : ' + (intervalTime-seconds);
  }
  cal.innerText = (position*30+30-seconds)*12/60;}

  if(position%2==0 && rest==true){
  min.innerText ='0'+position/2 +' : ' + '00';
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
    console.log(rest,clicked,started);
    if (rest==false && clicked == false && started!=false){
    console.log(clicked,interval);
    clearInterval(interval);
    changeToGo();
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
    console.log(clicked,interval);
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
    clicked = true;
    }
    else {
    x.play();
    clicked = true;
    }
    }
    if (rest==true && clicked == false && started!=false){
    changeToRest();
    interval = setInterval(countdownSeconds, 1000);  if(seconds == 5){
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