const http = require('http')

const server = http.createServer((req, res) => {
  // console.log([req, res]);
  // res.end('Welcome to the TODO app server')
  if(req.url === "/todos" && req.method === "GET"){
    
    res.writeHead(201, {   // <---- Method 1 of setting headers
      'content-type': 'text/plain',      //! meta data [check Headers on Postman]
      'email': 'arittro@gmai.com'       //!meta data [check Headers on Postman]
    })

    // res.statusCode = 202 // <---- Method 2 of setting headers
    // res.setHeader('contant-type', 'text/plain') 
    // res.setHeader('email', 'arittro007@gmail.com')

    //note: method 1 is clear & Clean coding and easy to understand for setting headers


    res.end("Add you todos here")
  } else if(req.url === "/todos/create-todo" && req.method === "POST"){
    res.end("Todo Created")
  }else{
    res.end('Route not found')
  }

})

server.listen(5000, "127.0.0.1", () =>{
  console.log('server is running on port 5000');
} )


// note: 13-7 👇
// ? it's give status code 200 for every route even hit the wrong route
// const http = require('http')

// const server = http.createServer((req, res) => {
//   // console.log([req, res]);
//   // res.end('Welcome to the TODO app server')
//   if(req.url === "/todos" && req.method === "GET"){
//     res.end("All todos will be here")
//   } else if(req.url === "/todos/create-todo" && req.method === "POST"){
//     res.end("Todo Created")
//   }else{
//     res.end('Route not found')
//   }

// })

// server.listen(5000, "127.0.0.1", () =>{
//   console.log('server is running on port 5000');
// } )