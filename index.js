import express from 'express';
import initialData from './db';
// Set up the express app
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// get all todos
app.get('/api/v1/tasks', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Tasks retrieved succesfully!',
    data: initialData.tasks
  })
});
app.get('/api/v1/columns', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Columns retrieved succesfully!',
    data: initialData.columns
  })
});
app.get('/api/v1/columnOrder', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Column Oder retrieved succesfully!',
    data: initialData.columnOrder
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});