require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const userRouter = require('./users/users-router');
const ticketsRouter = require('./tickets/tickets-router')

const corsOptions = {
    origin: 'https://dev-desk-frontend.vercel.app/*',
    optionsSuccessStatus: 200,
    methods: 'GET, PUT, POST, DELETE',
    Access-Control-Allow-Origin: *
};

server.use(helmet());
server.use(cors(corsOptions));
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
