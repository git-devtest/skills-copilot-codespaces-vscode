// Create web server
// 1. Create a web server
// 2. Create a route for /comments
// 3. Return a JSON object with some comments

const http = require('http')

const server = http.createServer((req, res) => {
  const comments = [
    { id: 1, author: 'John', content: 'Hello World' },
    { id: 2, author: 'Jane', content: 'Hi, planet!' },
    { id: 3, author: 'Bob', content: 'Hello, universe!' }
  ]

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(comments))
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})