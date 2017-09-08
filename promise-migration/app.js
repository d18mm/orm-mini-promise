const express = require('express')
const app = express()
var sqlite3   = require('sqlite3').verbose();
// var db = new sqlite3.Database('db/database.db');


app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index')
})
//
app.get('/siswa', function (req, res) {
  db.all(`SELECT * FROM siswa this=`,(err,rows)=>{res.render('siswa',{data:rows})

  })
})
//   db.all("SELECT * from blah blah blah where this="+that,function(err,rows){
// //rows contain values while errors, well you can figure out.
// });


app.get('/last_name', function (req, res) {

  res.render('last_name')

})

app.get('/firs_name', function (req, res) {

  res.render('firs_name')
})


app.listen(3018, function () {
  console.log(' star 3018!')
})
