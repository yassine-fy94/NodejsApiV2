var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, GET");
    return res.status(200).json({});
  }
  next();
});

const morgan = require("morgan");
app.use(morgan("dev"));
require('./app/router/router.js')(app);


/* --------------------- La création du port du serveur --------------------- */

var port = 3000;

/* -------------------------- Lancement du serveur -------------------------- */

var server = app.listen(port, function () {

  console.log("App listening at Port : " + port)

})


