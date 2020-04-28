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
    var breakTime = 10;
      var list = ["Butt Kicks",
"Squat Jacks",
"Right Leg Swing",
"Left Leg Swing",
"Plank Rows",
"V Situps : 15 reps",
"Burpees : 15 reps",
"Dive Bomber : 15 reps",
"Superman : 15 reps",
"Squat Jump : 15 reps",
"Steam Engines : 15 reps",
"V Situps : 15 reps",
"Burpees : 15 reps",
"Dive Bomber : 15 reps",
"Superman : 15 reps",
"Squat Jump : 15 reps",
"Steam Engines : 15 reps",
"V Situps : 15 reps",
"Burpees : 15 reps",
"Dive Bomber : 15 reps",
"Superman : 15 reps",
"Squat Jump : 15 reps",
"Steam Engines : 15 reps"];
    var wList = ["1. Butt Kicks",
"<br>2. Squat Jacks",
"<br>3. Right Leg Swing",
"<br>4. Left Leg Swing",
"<br>5. Plank Rows",
"<br>6. V Situps",
"<br>7. Burpees",
"<br>8. Dive Bomber",
"<br>9. Superman",
"<br>10. Squat Jump",
"<br>11. Steam Engines",
"<br>12. V Situps",
"<br>13. Burpees",
"<br>14. Dive Bomber",
"<br>15. Superman",
"<br>16. Squat Jump",
"<br>17. Steam Engines",
"<br>18. V Situps",
"<br>19. Burpees",
"<br>20.Dive Bomber",
"<br>21.Superman",
"<br>22.Squat Jump",
"<br>23.Steam Engines"];  
    var dList = [30,
30,
30,
30,
30,
60,
60,
60,
60,
60,
60,
60,
60,
60,
60,
60,
60,
60,
60,
60,
60,
60,
60];
    var restList = [1,
1,
1,
1,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0];
    var links = [
    "workouts//butt_kicks.gif",
    "workouts//squat_jacks.gif",
    "workouts//right_leg_swing.gif",
    "workouts//left_leg_swing.gif",
    "workouts//plank_rows.gif",
    "workouts//v_situps.gif",
    "workouts//burpee.gif",
    "workouts//divebomber.gif",
    "workouts//superman.gif",
    "workouts//squat_jumps.gif",
    "workouts//steam_engines.gif",
    "workouts//v_situps.gif",
    "workouts//burpee.gif",
    "workouts//divebomber.gif",
    "workouts//superman.gif",
    "workouts//squat_jumps.gif",
    "workouts//steam_engines.gif",
    "workouts//v_situps.gif",
    "workouts//burpee.gif",
    "workouts//divebomber.gif",
    "workouts//superman.gif",
    "workouts//squat_jumps.gif",
    "workouts//steam_engines.gif"
                ];
    var linkSRC = document.getElementById("help");
    
    
 var controls = document.getElementsByClassName("controls");

    var startButton = document.getElementById("start");
    var pauseButton = document.getElementById("pause");
    var completeButton = document.getElementById("complete");
    
    var workList = document.getElementById("worklist");
  var nextHeader = document.getElementById("next");
  
    var statusHeader = document.getElementById("status");
    var secondsSpan = document.getElementById("sec");
x.onended = function(){
    this.currentTime = 0;
  var delay = setTimeout(function(){
    x.play();
    clearTimeout(delay);
  }, 8000);
}
    startButton.onclick = function() {
    if(position==0 && started == false){
        started = true;
        seconds =dList[position];
        rest = false;
        controls[0].style.display = "none";
    } 
    if (clicked == false ){
    if(rest==true){
    console.log("gooo");}
    else {
    console.log(rest,"noo");
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
    
var minute,second;
    function countdownSeconds() {
        seconds = seconds - 1;
        minute = parseInt(seconds / 60, 10);
        second = parseInt(seconds % 60, 10);

        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        secondsSpan.textContent = minute + ":" + second;
          if (seconds <= 5){
          y.play();
      }
        console.log(seconds);
      checkForStateChange();}

      
  
    function checkForStateChange() {
      if (position == list.length){
          print("kahtam");
      theEnd();}
        
      if (seconds == 0 && rest == false) {
        if (restList[rPosition] == 1){
            console.log("yolo in here now");
            rest = true;
            seconds = breakTime;
            rPosition = rPosition +1;
            changeToRest();}
        if(rest==false){
        position = position+1;
        seconds = dList[position]+1;
        changeToGo(); 
        rPosition = rPosition +1;}
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
     seconds = breakTime;
      console.log(position,rPosition,restList[rPosition],"rest");
      $("body").css("background", "cyan");
      statusHeader.innerText = "Rest";
      nextHeader.innerText = "UP NEXT : "+ list[position+1];
      linkSRC.src = "workouts//rest_2.gif";
    }
  
    function changeToGo() {
      $("body").css("background", "#ffbc59");
      if(restList[rPosition]==2){
      $("body").css("background", "orange");
      }
 console.log(rPosition,links[position],position,restList[rPosition]);
      statusHeader.innerText = list[position];
      if(restList[rPosition+1] != 1){
      nextHeader.innerText = "UP NEXT : "+ list[position+1];
      }
      else {
          nextHeader.innerText = "UP NEXT : REST";
      }
      linkSRC.src = links[position];
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
  var secondsDone= 0;
  var calSeconds = 0;
var restDone = 0;
  function theEnd() {
  console.log("hi");
    clearInterval(interval); 
    var completed = wList.slice(0,position+1);
    var compString = completed.join(' ');
    
  console.log(position,"length");
    for (i = 0; i < position+1; i++) {
    //if (rPosition[i]==2)
        //{
            //rPosition = rPosition/2;
       // }
    secondsDone += dList[i]+restList[i]*breakTime;
    calSeconds += dList[i];
  }
      console.log(secondsDone,calSeconds,seconds,restList[i]*breakTime);
      if(rest == true){
      secondsDone = secondsDone - seconds;}
      else{
      secondsDone = secondsDone - seconds;  
      }
      console.log(secondsDone,parseInt(secondsDone/60));
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
