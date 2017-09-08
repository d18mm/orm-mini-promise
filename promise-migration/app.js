const express = require('express')
const app = express()
var sqlite3   = require('sqlite3').verbose();

app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index')
})


app.listen(3018, function () {
  console.log(' star 3018!')
})
