const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/')
    {
        response.end('Home page')
    }
    if (request.url === '/about')
    {
        response.end('about page')
    }
})
server.listen(5000);