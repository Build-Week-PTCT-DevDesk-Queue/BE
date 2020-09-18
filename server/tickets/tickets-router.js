const express = require('express')
const router = express.Router()
const Tickets = require('./tickets-model')

router.get('/', async (req,res,next) => {
    try {
        const tickets = await Tickets.get()
        res.json(tickets)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req,res,next) => {
    try {
        const ticket = await Tickets.getById(req.params.id)
        res.json(ticket)
    } catch(err) {
        next(err)
    }
})

router.get('/:filter/:id', async (req,res,next) => {
    try {
        const tickets = await Tickets.getBy({
            [req.params.filter]: req.params.id
        })
        res.json(tickets)
    } catch(err) {
        next(err)
    }
})

router.post('/create', async (req,res,next) => {
    try {
        const ticket = await Tickets.create({
            user_id: req.body.user_id,
	        title: req.body.title,
	        description: req.body.description,
	        tried: req.body.tried,
	        category: req.body.category
        })
        res.json(ticket)
    } catch(err) {
        next(err)
    }
})

router.put('/:id/helper/:helper_id', async (req,res,next) => {
    const { id, helper_id } = req.params
    try {
        const ticket = await Tickets.addHelper(id, helper_id)
        res.json(ticket)
    } catch(err) {
        next(err)
    }
})

router.put('/:id/status', async (req,res,next) => {
    try {
        const ticket = await Tickets.updateStatus(req.params.id, req.body.status)
        res.json(ticket)
    } catch(err) {
        next(err)
    }
})

module.exports = router