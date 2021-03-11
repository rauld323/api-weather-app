const express = require("express");
const https = require("https")
const bodyParser = require("body-parser")
require('dotenv').config();

console.log(process.env)

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const api_key = process.env.API_Key

app.get('/', function(req ,res){
	res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
	const query = req.body.cityName;
	const units = "imperial";
	const weatherGet = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + api_key + "&units=" + units;

	https.get(weatherGet, function (response) {
	console.log(response.statusCode)

	response.on("data", function (data) {
		const weatherData = JSON.parse(data)
		const temp = weatherData.main.temp;
		const weatherDescription = weatherData.weather[0].description;
		res.write("<h1>The temperature in " + query + " is " + temp + " degrees fahrenheit</h1>")
		res.write("<p>The weather is currently " + weatherDescription + "</p>" )
		res.send();
		})
	})
})


app.listen(3000, function(){
	console.log("Server running on port 3000")
})

