'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger')
const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const validator = require('./middleware/validator')

let personFinder = (request, response) => {
    let name = request.query.name;
    response.json({
        name: name,
    })
}
app.get('/person', validator, personFinder);
app.use(logger)
app.use(serverError)

module.exports = app;