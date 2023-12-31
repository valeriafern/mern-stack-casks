const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {Mongoose} = require('./database');

const app = express();


//stings

app.set('port', process.env.PORT || 3000);

//middlewares

app.use(morgan('dev'));
app.use(express.json());

//routes

app.use('/api/tasks', require('./routes/task.routes'));

//static files

app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});