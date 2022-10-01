var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dbarbosajr:iWScfNCuJtdh0duu@cluster0.i8lyxld.mongodb.net/?retryWrites=true&w=majority");

const customer_schema = new mongoose.Schema({
  "first_name": String, 
  "last_name": String,
  "email": String
});
var customers = mongoose.model("customers", customer_schema);

var c1 = new customers({
  first_name: "Denio",
  last_name: "Barbosa Junior",
  email: "denio@email.com"
}).save((e, data) => {
  if(e) {
    console.log(e);
  } else {
    console.log(data);
  }
});
customers.find({ first_name: "Maria" }).exec().then((data) => {
  console.log(data);
});



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
