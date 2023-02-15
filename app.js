// Kfir Tayar 208991430
// Karin Mashkovich 313512428

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('./models/users');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const addcostRouter = require('./routes/addcost');
const reportRouter = require('./routes/report');
const aboutRouter = require('./routes/about');

const app = express();

// Connect to mongoDB
//mongoose.connect('mongodb://localhost:27017/costmanager');
mongoose.connect('mongodb+srv://Karinmashkovich:nIKYbDh7C40XZ4iP@cluster0.zn50q0z.mongodb.net/costmanager?retryWrites=true&w=majority');

// Checking if the DB is/isn't connected
const db = mongoose.connection;
db.on('error', function() {console.log('The DB is not connected!')});
db.once('open', function() {console.log('The DB is connected!')});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/addcost', addcostRouter);
app.use('/report', reportRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
