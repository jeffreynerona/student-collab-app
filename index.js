import express from 'express';
import initialData from './db';
// Set up the express app
const app = express();
// get all todos
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Tasks retrieved succesfully!',
    data: initialData
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});