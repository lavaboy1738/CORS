var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('Can you include a port number？\nnode server.js 8888 like this？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method



  console.log('Someone sent a request, address：' + pathWithQuery)

  if(path === '/index.html'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(fs.readFileSync('./public/index.html'))
    response.end()
  } else if(path === '/test1.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('./public/test1.js'))
    response.end()
  } else if(path === '/information.json'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync('./public/information.json'))
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`Address doesn't exist`)
    response.end()
  }


})

server.listen(port)
console.log('Listening ' + port + ' Success\nopen http://localhost:' + port)
