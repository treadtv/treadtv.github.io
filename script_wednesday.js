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
    var intervalTime = 15;
    var breakTime = 10;
    var list = ["Jumping Jacks",
"Squat Jumps",
"Burpees",
"Right Leg Lunge Hop",
"Left Leg Lunge Hop",
"Jumping Jacks",
"Squat Jumps",
"Burpees",
"Right Leg Lunge Hop",
"Left Leg Lunge Hop",
"Walk Out + Pushup",
"Shoulder Taps",
"Diamond Pushups",
"Tricep Dips",
"Walk Out + Pushup",
"Shoulder Taps",
"Diamond Pushups",
"Tricep Dips",
"Commandos",
"Spider Plank",
"Plank Jacks",
"Cross  Body Mountain Climbers",
"Commandos",
"Spider Plank",
"Plank Jacks",
"Cross  Body Mountain Climbers"];
    var wList = ["1. Jumping Jacks",
"<br>2. Squat Jumps",
"<br>3. Burpees",
"<br>4. Right Leg Lunge Hop",
"<br>5. Left Leg Lunge Hop",
"<br>6. Jumping Jacks",
"<br>7. Squat Jumps",
"<br>8. Burpees",
"<br>9. Right Leg Lunge Hop",
"<br>10. Left Leg Lunge Hop",
"<br>11. Walk Out + Pushup",
"<br>12. Shoulder Taps",
"<br>13. Diamond Pushups",
"<br>14. Tricep Dips",
"<br>15. Walk Out + Pushup",
"<br>16. Shoulder Taps",
"<br>17. Diamond Pushups",
"<br>18. Tricep Dips",
"<br>19. Commandos",
"<br>20.Spider Plank",
"<br>21.Plank Jacks",
"<br>22.Cross  Body Mountain Climbers",
"<br>23.Commandos",
"<br>24Spider Plank",
"<br>25Plank Jacks",
"<br>26Cross  Body Mountain Climbers"];  
    var dList = [20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20,
20];
    var restList = [1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1];
    var links = [
    "workouts//jumping_jacks.gif",
    "workouts//squat_jumps.gif",
    "workouts//burpees.gif",
    "workouts//right_leg_lunge_hops.gif",
    "workouts//left_leg_lunge_hops.gif",
    "workouts//jumping_jacks.gif",
    "workouts//squat_jumps.gif",
    "workouts//burpees.gif",
    "workouts//right_leg_lunge_hops.gif",
    "workouts//left_leg_lunge_hops.gif",
    "workouts//walkout_pushup.gif",
    "workouts//shoulder_taps.gif",
    "workouts//diamond_pushup.gif",
    "workouts//tricep_dips.gif",
    "workouts//commandos.gif",
    "workouts//walkout_pushup.gif",
    "workouts//shoulder_taps.gif",
    "workouts//diamond_pushup.gif",
    "workouts//tricep_dips.gif",
    "workouts//commandos.gif",
    "workouts//spider_plank.gif",
    "workouts//plank_jacks.gif",
    "workouts//cross_body_mountain_climbers.gif",
    "workouts//spider_plank.gif",
    "workouts//plank_jacks.gif",
    "workouts//cross_body_mountain_climbers.gif"
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
  
    startButton.onclick = function() {
    if(position==0 && started == false){
        started = true;
        seconds =dList[position];
        rest = false;
        controls[0].style.display = "none";
    } 
    if (clicked == false ){
    if(rest==true){
    changeToRest();
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
    
    function countdownSeconds() {
      //console.log("countdown",seconds,rest,clicked,rPosition);
      seconds -= 1;
      secondsSpan.innerText = seconds;
      if (seconds <= 5){
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
      console.log(position,rPosition,restList[rPosition],"rest");
      $("body").css("background", "cyan");
      statusHeader.innerText = "Rest";
      nextHeader.innerText = "UP NEXT : "+ list[position+1];
      linkSRC.src = "workouts//rest_2.gif";
    }
  
    function changeToGo() {
      $("body").css("background", "pink");
      if(restList[rPosition]==2){
      $("body").css("background", "orange");
      }
    console.log(rPosition,links[position],position,restList[rPosition]);
      statusHeader.innerText = list[position];
      if(restList[rPosition] != 1){
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
