
// load hết rồi mới load js handler
window.onload = function(){

  var seconds =00;
  var tens =00;
  var appendSeconds = document.getElementById("seconds");
  var appendTens = document.getElementById("tens");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonreset = document.getElementById("button-reset");

  var Interval ;

  buttonStart.onclick =function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);

    }
    buttonStop.onclick=function(){
      clearInterval(Interval)
    }
    buttonreset.onclick=function(){
      tens="00";
      seconds="00";
      clearInterval(Interval)
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML= seconds;
    }

  function startTimer(){
    tens++;
    if(tens <=9){
      appendTens.innerHTML = "0"+tens;
    }
    if(tens > 9){
      appendTens.innerHTML = tens;
    }
    if(tens > 99){
      seconds++;
      appendSeconds.innerHTML= "0"+seconds;
      tens=0;
      appendTens.innerHTML= "0"+tens;
    }
    if(seconds > 9){
      appendSeconds.innerHTML = seconds;

    }

  }
  

}