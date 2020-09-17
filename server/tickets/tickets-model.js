const db = require('../../data/config')

async function getTickets() {
    return db('tickets')
}

module.exports = {
    getTickets
}