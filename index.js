const server = require('./server/server')

const PORT = process.env.port || 80

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})