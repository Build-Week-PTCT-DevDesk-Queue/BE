const db = require('../../data/config')

async function getTickets() {
    return db('tickets')
}

async function createTicket(ticket) {
    const [id] = await db('tickets').insert(ticket)
    return getTicketById(id)
}

async function getTicketById(id) {
    return db('tickets')
        .where({ id })
		.first()
}

module.exports = {
    getTickets,
    createTicket,
    getTicketById
}