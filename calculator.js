const express = require("express");
const app = express();
app.get("/", function (request, response) {
  console.log(request);
  response.send("hello there this is new");
});
app.get("/contact", function (request, response) {
  console.log(request);
  response.send("hello hello");
});
app.listen(3000, function () {
  console.log("server has started on port 3000");
});
