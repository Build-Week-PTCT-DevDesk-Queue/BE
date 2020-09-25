require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const userRouter = require('./users/users-router');
const ticketsRouter = require('./tickets/tickets-router')

server.use(helmet());
server.use(cors({
    origin: ['https://dev-desk-frontend.vercel.app/*'],
    optionsSuccessStatus: 200,
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: ['sessionId', 'Content-Type'],
    preFlightContinue: false,
    credentials: true,
    allowedHeaders: '*'
}));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://dev-desk-frontend.vercel.app/*' || '*');
    next();
})
server.use(express.json());
server.use(cookieParser());

server.use('/api/auth', userRouter);
server.use('/api/tickets', ticketsRouter);

server.get('/', (req, res) => {
    res.send('<h1>DevDesk</h1>');
})

server.use((err, req, res, next) => {
    console.log(err);

    res.status(500).json({
        message: 'Something went wrong.'
    });
});

module.exports = server;
