const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');

app.use(compression());
app.use('/static', express.static(path.join(__dirname, 'public/static')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(process.env.PORT || 5000);
