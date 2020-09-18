const db = require('../../data/config')

function get() {
    return db('tickets')
}

async function create(ticket) {
    const [id] = await db('tickets').insert(ticket)
    return getById(id)
}

function getById(id) {
    return db('tickets')
        .where({ id })
		.first()
}

async function addHelper(id, helper_id) {
    if (id === 0) {
        await db('tickets')
            .update('helper_id', null)
            .where('id', id)
    } else {
        await db('tickets')
            .update('helper_id', helper_id)
            .where('id', id)
    }
    return getById(id)
}

async function updateStatus(id, status) {
    await db('tickets')
        .update('status', status)
        .where('id', id)
    return getById(id)
}

function getBy(filter) {
    return db('tickets')
        .where(filter)
}

module.exports = {
    get,
    getBy,
    create,
    getById,
    addHelper,
    updateStatus,
    
}