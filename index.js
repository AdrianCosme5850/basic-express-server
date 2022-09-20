'use strict';

require('dotenv').config();
let app = require('./lib/server');
let PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(PORT))