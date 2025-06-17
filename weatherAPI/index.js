$(document).ready(function(){
  
  var api;
  var lon;
  var lat;
  var fTemp;
  var cTemp;
  var kTemp;
  

  
if (navigator.geolocation) {   navigator.geolocation.getCurrentPosition(function (position) {

lat = (position.coords.latitude).toFixed(2)
lon = (position.coords.longitude).toFixed(2)
  
 $("#data").html("The Latitude is " + lat + ", and The Longitude is " + lon);       
  
  api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`
  weatherInfo()
  
 });
   }

 
  
  function weatherInfo(){
$.getJSON(api, function(data){
    
var weatherType = data.weather[0].description;
var cTemp = data.main.temp;
var windSpeed = data.wind.speed;
var city = data.name;  
var tempSwap=true;
		

