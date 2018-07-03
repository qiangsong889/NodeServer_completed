const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const PORT = 4000;
const Server = express();

Server.use(bodyParser.json()); //A new body object containing the parsed data is populated on the request object after the middleware
Server.use(bodyParser.urlencoded({ extended: true })); //same as json but This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
Server.use(express.static(path.join(__dirname, '../client/public'))); // server static file at given path
Server.use(morgan('dev')); //developer tool to show all the requests server receives
Server.use(cors()); //to solve cross origin issue
Server.post('/doubleNumber', (req, res) => {
  console.log('recieved a request', req.body);
  if (req.body.number) {
    let newNumber = req.body.number * 2;
    res.send(newNumber.toString());
  } else {
    res.send('please enter a valid number');
  }
});
Server.listen(PORT, () => {
  console.log('Server is listening on port ', PORT);
});
