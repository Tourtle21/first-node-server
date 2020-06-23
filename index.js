// require express (this is the same as importing);

const express = require('express');

//create an instance of express and save it to a variable

const app = express();

// parse JSON into Javascript using middleware

app.use(express.json())

// define where the server should listen for requests

app.listen(3333, () => console.log('Server is running on 3333'))