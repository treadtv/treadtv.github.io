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
    var list = ["Oblique Stretch",
    "Jumping Jacks",
    "Prisoner Squat",
    "Inchworm to pushup",
    "Jump Squat",
    "Lunge Pulses left leg forward",
    "Alternating Lunges",
    "Split Jumps",
    "Burpees",
    "Lunge Pulses for same right leg forward",
    "Alternating Lunges",
    "Split Jumps",
    "Burpees",
    "Shoulder Taps + Pushup",
    "Tricep Dips",
    "In and Out Abs",
    "Straight Leg Raises",
    "Left Quad + Hamstring Stretch",
    "Right Quad + Hamstring Stretch",
    "Downward Dog to Cobra"];
    var wList = ["1. Oblique Stretch",
    "<br>2. Jumping Jacks",
    "<br>3. Prisoner Squat",
    "<br>4. Inchworm to pushup",
    "<br>5. Jump Squat",
    "<br>6. Lunge Pulses left leg forward",
    "<br>7. Alternating Lunges",
    "<br>8. Split Jumps",
    "<br>9. Burpees",
    "<br>10. Lunge Pulses for same right leg forward",
    "<br>11. Alternating Lunges",
    "<br>12. Split Jumps",
    "<br>13. Burpees",
    "<br>14. Shoulder Taps + Pushup",
    "<br>15. Tricep Dips",
    "<br>16. In and Out Abs",
    "<br>17. Straight Leg Raises",
    "<br>18. Left Quad + Hamstring Stretch",
    "<br>19. Right Quad + Hamstring Stretch",
    "<br>20. Downward Dog to Cobra"];  
    var dList = [15,
  30,
  30,
  30,
  20,
  30,
  30,
  20,
  15,
  30,
  30,
  20,
  15,
  30,
  30,
  30,
  30,
  15,
  15,
  15];
    var restList = [2,
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
  2,
  2,
  2];
    var links = ["workouts//Oblique_Stretch.gif",
    "workouts//Jumping_Jacks.gif",
    "workouts//Prisoner_squats.gif",
    "workouts//Inchworm_Pushup.gif",
    "workouts//Jump_Squats.gif",
    "workouts//Lunge_Pulses_left.gif",
    "workouts//Alternating_Lunges.gif",
    "workouts//Split_Jumps.gif",
    "workouts//Burpees.gif",
    "workouts//Lunge_Pulses_right.gif",
    "workouts//Alternating_Lunges.gif",
    "workouts//Split_Jumps.gif",
    "workouts//Burpees.gif",
    "workouts//Shouldertap_Pushup.gif",
    "workouts//Tricep_Dips.gif",
    "workouts//In_and_Outs.gif",
    "workouts//Leg_Raises.gif",
    "workouts//Leg_Stretch_Left.gif",
    "workouts//Leg_Stretch_Right.gif",
    "workouts//Downwarddog_Cobra.gif",
                ];
  
    var linkSRC = document.getElementById("help");
    var startButton = document.getElementById("start");
    var pauseButton = document.getElementById("pause");
    var completeButton = document.getElementById("complete");
    
    var workList = document.getElementById("worklist");
  
    var statusHeader = document.getElementById("status");
    var secondsSpan = document.getElementById("sec");
  
    startButton.onclick = function() {
      
      if(position==0)
      {
        rest = false;
      } 
      if(position==0 && started == false){
        console.log("2")
          started = true;
          seconds =dList[position];
      }
      if(clicked == false && rest == true && position>0){
        console.log("staying at rest")
      changeToRest();
      interval = setInterval(countdownSeconds, 1000);
      x.play();  
      clicked = true;
      }
      if(clicked == false && rest == false && position>0)
      {
        console.log("changing to go")
        changeToGo();
        interval = setInterval(countdownSeconds, 1000);
        x.play();  
        clicked = true;

      }
      if(clicked == false && rest == false && position==0)
      {
        console.log("changing to go")
        changeToGo();
        interval = setInterval(countdownSeconds, 1000);
        x.play();  
        clicked = true;

      }
    }
  
    pauseButton.onclick = function() {
      clicked = false;
      console.log("Hi, I paused","seconds=",seconds,"rest=",rest,"clicked=",clicked,"pos=",rPosition);
      x.pause();
      //y.pause();
      clearInterval(interval);
    }
    
    function countdownSeconds() {
      //console.log("countdown",seconds,rest,clicked,rPosition);
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
      $("body").css("background", "orange");
      if(restList[rPosition]==2){
      $("body").css("background", "white");
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