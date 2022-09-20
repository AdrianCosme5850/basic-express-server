'use strict';

let validator = (request, response, next) => {
    console.log(request)
    if(!request.query.name){
        next('error')
    } else {
        next();
    }
};

module.exports = validator;