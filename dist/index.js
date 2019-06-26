'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up the express app
var app = (0, _express2.default)();
// get all todos
app.get('/api/v1/todos', function (req, res) {
  res.status(200).send({
    success: true,
    message: 'Tasks retrieved succesfully!',
    data: _db2.default
  });
});
var PORT = 5000;

app.listen(PORT, function () {
  console.log('Server running on port ' + PORT);
});