const express = require("express");
const https = require("https")
require('dotenv').config();

console.log(process.env)

const app = express();

const api_key = process.env.API_Key

app.get('/', function(request ,response){

	const weatherGet = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${api_key}&units=imperial`;

	https.get(weatherGet, function(res){
		console.log(res)
	})

	response.send("Server is running")
})



app.listen(3000, function(){
	console.log("Server running on port 3000")
})
