const sensor = require("node-dht-sensor");
const  temperaturahab =document.getElementById("temperaturaHab")
const humedadHab = document.getElementById("humedadhab")

sensor.read(22,4,function(err,temperature,humidity){
	if(!err){
		temperaturahab.innerText = temperature + 'ºc';
		humedadHab.innerText = humidity + '%';
		console.log("temp:"+temperature+"ºc, humidity:"+humidity+"%");
	}
	if(err){
		temperaturahab.innerText = 'ERROR';
		humedadHab.innerText = 'ERROR';
		console.log("error")
	}
});
