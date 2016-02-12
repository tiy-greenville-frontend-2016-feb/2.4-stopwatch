(function(){
  'use strict';

  var startTime;
  var myStartButton = document.getElementById('start-button');
  var hours = document.querySelector('.elapsed-time .hours');
  var minutes = document.querySelector('.elapsed-time .minutes');
  var seconds = document.querySelector('.elapsed-time .seconds');

  console.log(myStartButton);

  function toggleButton(){
      myStartButton.style.backgroundColor = 'red';
      myStartButton.textContent = 'Stop';
  }

  function milliscondsToInterval(ms){
    var msLeft = ms;

    var msInHour = 3600000;
    var msInMin = 60000;
    var msInSec = 1000;

    var hours = Math.floor(msLeft / msInHour);
    msLeft = msLeft % msInHour;

    var minutes = Math.floor(msLeft / msInMin);
    msLeft = msLeft % msInMin;

    var seconds = Math.floor(msLeft / msInSec);

    return [hours, minutes, seconds];
  }

  function formatInterval(interval) {
    var formatted = [];
    formatted[0] = ("0" + interval[0]).slice(-2);
    formatted[1] = ("0" + interval[1]).slice(-2);
    formatted[2] = ("0" + interval[2]).slice(-2);
    return formatted;
  }

  function displayInterval(interval) {
    var formattedInterval = formatInterval(interval);
    hours.textContent = formattedInterval[0];
    minutes.textContent = formattedInterval[1];
    seconds.textContent = formattedInterval[2];
  }

  function logElapsedTime(){
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var elapsed = milliscondsToInterval(elapsedTime);

    displayInterval(elapsed);
  }

  function startButtonHandler(event){
    startTime = new Date();
    toggleButton();
    window.setInterval(logElapsedTime, 1000);
  }

  myStartButton.addEventListener('click', startButtonHandler);
}());
