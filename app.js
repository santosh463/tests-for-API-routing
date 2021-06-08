const express = require("express");
const app = express();

app.get("/", (require, response) => {
  response.send("Home Page");
});

app.get("/about", (request, response) => {
  response.send("About Page");
});

app.listen(3002);
module.exports = app;
