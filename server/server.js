const express = require('express');
let app = express();

app.use(express.static(__dirname + '/..client/dist'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

let port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log('listening on port', port);
});