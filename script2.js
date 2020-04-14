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
  var list = ["Arm-Circles","Forward Lunges","Shuffles","High Knees + Punchouts","Plank","Side Lunges","Knee Crunches","Ice Skaters","Sumo Squats","Mountain Climbers","Bear Crawl Squats","Crossover-Crunch","Bicycle-Crunch","Quadricep Crunch","Hamstring Stretch","Ab Stretch","Calves Stretch"];
  var wList = ["1. Arm-Circles", "<br>2. Forward Lunges", "<br>3. Shuffles","<br>4. High Knees + Punchouts","<br>5. Plank","<br>6. Side Lunges","<br>7. Knee Crunches","<br>8. Ice Skaters", "<br>9. Sumo Squats","<br>10. Mountain Climbers","<br>11. Bear Crawl Squats","<br>12. Crossover-Crunch","<br>13. Bicycle-Crunch","<br>14. Quadricep Crunch","<br>15. Hamstring Stretch","<br>16. Ab Stretch","<br>17. Calves Stretch"];    
  var links = ["workouts//Arm_Circles.gif","workouts//Forward_Lunges.gif","workouts//Shuffles.gif","workouts//HighKnees_Punchouts.gif","workouts//forwardplank.gif","workouts//side_lunges_gif.gif","workouts//Knee_Crunches.gif","workouts//Ice_Skaters.gif","workouts//SumoSquats.gif","workouts//Mountain_Climber.gif","workouts//Bear_Crawl_Squats.gif","workouts//Cross_Over_Crunch.gif","workouts//Bicycle_Crunch.gif","workouts//Quadricep_Stretch.gif","workouts//Hamstring_Stretch.gif","workouts//Ab_Stretch.gif","workouts//Calves_Stretch.gif",];


 var linkSRC = document.getElementById("help");

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
      seconds = breakTime + 1;
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