const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (request, response) {
  console.log(request);
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  console.log(request.body);
  var num1 = Number(request.body.n1);
  var num2 = Number(request.body.n2);
  var result = num1 + num2;
  response.status(200).send("<em>Total is <em>" + result);
});

app.get("/bmiCalculator", function (request, response) {
  console.log(request);
  response.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function (request, response) {
  console.log(request.body);
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);
  var bmiCalculator = (weight / height) * height;
  response.status(200).send("Your BMI is  " + bmiCalculator);
});

app.listen(3000, function () {
  console.log("server has started on port 3000");
});
