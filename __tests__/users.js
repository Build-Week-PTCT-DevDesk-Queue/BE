const supertest = require('supertest');
const server = require('../server/server');

describe('auth route tests', () => {
    it('POST /register failure', async () => {
        const res = await supertest(server)
            .post('/api/auth/register/')
            .send({
                username: 'Cris',
                password: '123456',
                role: 'helper'
            });

        expect(res.statusCode).toBe(409);
        expect(res.body.username).toBe('Cris');
    });

    it('POST /register success', async () => {
        const res = await supertest(server)
            .post('/api/auth/register/')
            .send({
                username: 'newUser3',
                password: '123456',
                role: 'helper'
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.username).toBe('newUser3');
    });

    it('POST /login', async () => {
        const res = await supertest(server)
            .post('/api/auth/login/')
            .send({
                username: 'Cris',
                password: '123456'
            });

        expect(res.statusCode).toBe(200);
    });

    it('POST /login failure', async () => {
        const res = await supertest(server)
            .post('/api/auth/login/')
            .send({
                username: 'Cris',
                password: 'password'
            });

        expect(res.statusCode).toBe(401);
    });
})