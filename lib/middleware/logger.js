'use strict';

let logger = (request, response, next) => {
console.log(response.req.url, response.req.method);
next();
}

module.exports = logger;