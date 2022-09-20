'use strict';

const supertest = require('supertest');
const app = require('../lib/server');
const request = supertest(app);

describe('Testing validator\'s filtering ability works', () =>{
    test('The validator should determine if the request has the name property if it does not it will send a 500', async() => {
       let response = await request.get('/person')
       expect(response.status).toEqual(500);
    });
})