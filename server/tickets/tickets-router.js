const express = require('express')
const router = express.Router()
const tickets = require('./tickets-model')

router.post('/create', async (req,res,next) => {
    try {
        const ticket = await tickets.createTicket(req.body)
        res.json(ticket)
    } catch(err) {
        next(err)
    }
})

router.get('/queue', async (req,res,next) => {
    try {
        res.json(await tickets.getTickets())
    } catch(err) {
        next(err)
    }
})

module.exports = router