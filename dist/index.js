'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up the express app
var app = (0, _express2.default)();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// get all todos
app.get('/api/v1/tasks', function (req, res) {
  res.status(200).send({
    success: true,
    message: 'Tasks retrieved succesfully!',
    data: _db2.default.tasks
  });
});
app.get('/api/v1/columns', function (req, res) {
  res.status(200).send({
    success: true,
    message: 'Columns retrieved succesfully!',
    data: _db2.default.columns
  });
});
app.get('/api/v1/columnOrder', function (req, res) {
  res.status(200).send({
    success: true,
    message: 'Column Oder retrieved succesfully!',
    data: _db2.default.columnOrder
  });
});
var PORT = 5000;

app.listen(PORT, function () {
  console.log('Server running on port ' + PORT);
});