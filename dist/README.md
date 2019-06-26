# Student Collab App Server

## Setup

### Initialize Project
1. mkdir student-collab-server
2. cd student-collab-server
3. npm init
4. touch index.js
5. mkdir db
6. cd db
7. npm install --save express morgan
8. npm install --save-dev babel-cli babel-preset-es2015 rimraf
9. touch index.js
```javascript
const initialData = {
    tasks: {
        'task1': { id: 'task1', content: 'Learn React' },
        'task2': { id: 'task2', content: 'Prepare slides?'},
        'task3': { id: 'task3', content: 'Find Nemo' },
        'task4': { id: 'task4', content: 'Get down to business to defeat the Huns'},
    },
    columns: {
        'column1': {
            id: 'column1',
            title: 'To do',
            taskIds: ['task1', 'task2', 'task3', 'task4'],
        },
        'column2': {
            id: 'column2',
            title: 'Doing',
            taskIds: [],
        },
        'column3': {
            id: 'column3',
            title: 'Done',
            taskIds: [],
        },
    },
    columnOrder: ['column1', 'column2', 'column3'],
}

export default initialData;
```
10. touch .babelrc
```javascript
{
  "presets": ["es2015"]
}
```
11. modify package.json
```
{
	"scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
	    "start": "npm run build && node dist/index.js"
	},
}
```
12. in index.js
```
import express from 'express';
import initialData from './db';
// Set up the express app
const app = express();
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
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
```

### Start Project
1. `npm start`
2. Open [http://localhost:5000/api/v1/tasks](http://localhost:5000/api/v1/todos)
