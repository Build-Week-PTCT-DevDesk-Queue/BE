const supertest = require('supertest');
const { transactionProvider } = require('../data/config');
const server = require('../server/server');

describe('tickets router tests', () => {
    
    it('GET all tickets', async () => {
        const res = await supertest(server)
            .get('/api/tickets/')

        expect(res.statusCode).toBe(401);
    });

    it('GET tickets by id', async () => {
        const res = await supertest(server)
            .get('/api/tickets/1')

        expect(res.statusCode).toBe(401);
    });

    it('GET tickets by user id', async () => {
        const res = await supertest(server)
            .get('/api/tickets/user_id/1')

        expect(res.statusCode).toBe(401);
    });

    it('POST new ticket', async () => {
        const res = await supertest(server)
            .post('/api/tickets/create')
            .send({
                user_id: 1,
                title: 'CORS error when logging in',
                description: 'Error message says no Access-Control-Allow-Origin header is present',
                tried: 'Stack overflow, google, prayer',
                category: 'Node'
            })

        expect(res.statusCode).toBe(401);
    });

    it('PUT ticket helper id', async () => {
        const res = await supertest(server)
            .put('/api/tickets/1/helper/2')
            .send({
                helper_id: 2
            })

        expect(res.statusCode).toBe(401);
    });

    it('PUT ticket status', async () => {
        const res = await supertest(server)
            .put('/api/tickets/1/status')
            .send({
                status: true
            })

        expect(res.statusCode).toBe(401);
    });
});