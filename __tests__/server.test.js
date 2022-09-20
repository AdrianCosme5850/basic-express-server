'use strict';

const supertest = require('supertest');
const app = require('../lib/server');
const request = supertest(app);

describe('testing my server endpoints', () =>{
    test('Endpoint /person should take in a request with a name send back an object with the name', async() => {
       let response = await request.get('/person?name=Adrian');
       expect(response.body.name).toEqual('Adrian');
       expect(response.status).toEqual(200);
    });
    test('Wrong endpoints should send a 404 error', async() => {
        let response = await request.get('/preson');
        expect(response.status).toEqual(404);
    });
    test('Wrong methods should send a 404 error', async() => {
        let response = await request.put('/person');
        expect(response.status).toEqual(404);
    });
});