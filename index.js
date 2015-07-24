var express = require('express')
var app = express()
var fs = require('fs')
var PUBLICDIR = process.cwd() + '/public'

app.use(function (req, res, next) {
  if (req.path.indexOf('.') === -1) {
    var file = PUBLICDIR + req.path + '.html'
    fs.exists(file, function (exists) {
      if (exists) {
        req.url += '.html'
      }
      next()
    })
  } else {
    next()
  }
})
app.use(express.static(PUBLICDIR))

var PORT = 8000
app.listen(PORT)
console.log('Listening on ' + PORT + ' and serving ' + PUBLICDIR)
