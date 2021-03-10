const express = require("express");
const https = require("https")

const app = express();

app.get('/', function(request ,response){

	const weatherGet = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=cb229d7e6e74cb04fa48087611af7973&units=imperial";

	https.get(weatherGet, function(res){
		console.log(res)
	})

	response.send("Server is running")
})



app.listen(3000, function(){
	console.log("Server running on port 3000")
})
