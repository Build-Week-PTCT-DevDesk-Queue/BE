const express = require('express')
const router = express.Router()
const Tickets = require('./tickets-model')
const restrict = require('../../middleware/restrict')

router.get('/', restrict(), async (req,res,next) => {
    try {
        const tickets = await Tickets.get()
        res.json(tickets)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', restrict(), async (req,res,next) => {
    try {
        const ticket = await Tickets.getById(req.params.id)
        res.json(ticket)
    } catch(err) {
        next(err)
    }
})

router.get('/:filter_by/:filter', restrict(), async (req,res,next) => {
    try {
        const tickets = await Tickets.getBy({
            [req.params.filter_by]: req.params.filter
        })
        res.json(tickets)
    } catch(err) {
        next(err)
    }
})

router.post('/create', restrict(), async (req,res,next) => {
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

router.put('/:id/helper/:helper_id', restrict(), async (req,res,next) => {
    try {
        const ticket = await Tickets.addHelper(
            req.params.id, 
            req.params.helper_id
        )
        res.json(ticket)
    } catch(err) {
        next(err)
    }
})

router.put('/:id/status', restrict(), async (req,res,next) => {
    try {
        const ticket = await Tickets.updateStatus(
            req.params.id, 
            req.body.status
        )
        res.json(ticket)
    } catch(err) {
        next(err)
    }
})

module.exports = router