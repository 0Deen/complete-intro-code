$(document).ready(function(){
  
    var timer = 1;
    var breakTime = 10;
    var buzzer = $('#buzzer')[0];
    
    $('#minusBreak').click(function(){
     breakTime = $('#breakTime').text();
     if(breakTime>5){
  breakTime = $('#breakTime').text() - 5;    
     } 
      $('#breakTime').html(breakTime);
    });
    
    $('#addBreak').click(function(){
     breakTime = $('#breakTime').text()  - 0 + 5;
      $('#breakTime').html(breakTime);
    });
    
     
    $('#minusTimer').click(function(){
     timer = $('#timer').text();
     if(timer>5){
       timer = $('#timer').text() - 5;   
     } 
      $('#timer').html(timer);
    });
    
    
     $('#addTimer').click(function(){
     timer = $('#timer').text()  - 0 + 5;
      $('#timer').html(timer);
    });
    
    
    
  });
