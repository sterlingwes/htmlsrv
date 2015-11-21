var express = require('express')
var app = express()
var fs = require('fs')

var DEFAULT_FOLDER = process.env.SRV || 'public'
var PORT = process.env.PORT || 8000
var PUBLICDIR = process.cwd() + '/' + DEFAULT_FOLDER

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

app.listen(PORT)
console.log('Listening on ' + PORT + ' and serving ' + PUBLICDIR)
