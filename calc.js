const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
   res.sendFile(__dirname + "/index.html");
});

app.get("/bmi", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);
  var result = number1 + number2;
  res.send("The result is " + result);
});

app.post("/bmi", function(req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = weight / (height * height);
  res.send("Your Bmi is " + result);
});

app.listen(3000);
