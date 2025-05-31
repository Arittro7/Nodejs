const http = require('http')

const server = http.createServer((req, res) => {
  // console.log([req, res]);
  // res.end('Welcome to the TODO app server')
  if(req.url === "/todos" && req.method === "GET"){
    res.end("All todos will be here")
  } else if(req.url === "/todos/create-todo" && req.method === "POST"){
    res.end("Todo Created")
  }else{
    res.end('Route not found')
  }

})

server.listen(5000, "127.0.0.1", () =>{
  console.log('server is running on port 5000');
} )