const http = require('http')

const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)



const http = require('http')

const { readFileSync } = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeApp = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    // console.log(req.method)
    // console.log(req.url)
    const url =req.url;
    console.log(url)
    if(url ==='/'){
        res.writeHead(200, { 'Content-type' : 'text/html' })
        res.write(homePage)
        res.end()
    }
    else if(req === '/styles.css'){
        res.writeHead(200, { 'Content-type' : 'text/css' })
        res.write(homeStyles)
        res.end()
    }
    else if(req === '/logo.svg'){
        res.writeHead(200, { 'Content-type' : 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
    else if(req === '/browser-app.js'){
        res.writeHead(200, { 'Content-type' : 'text/javascript' })
        res.write(homeApp)
        res.end()
    }
    else if(req === '/about'){
        res.writeHead(200, { 'Content-type' : 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else{
        res.writeHead(404, { 'Content-type' : 'text/html'} )
        res.write(`<h1>page not found</h1>`)
        res.end()
    }
})

server.listen(5000)
