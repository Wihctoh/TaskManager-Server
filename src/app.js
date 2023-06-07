const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./controller/user.controller');
const taskRouter = require('./controller/task.controller');

const app = express();

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/task', taskRouter);
app.use((err, req, res, _next) => res.send(err.message));

module.exports = app;
