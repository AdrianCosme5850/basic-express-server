'use strict';

let serverError = (error, request, response, next) => {
    response.status(500).send('error');
}
module.exports = serverError;