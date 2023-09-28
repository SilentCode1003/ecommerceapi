var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var customerRouter = require('./routes/customer');
var orderRouter = require('./routes/order');
var contentRouter = require('./routes/content');
var inventoryRouter = require('./routes/inventory');
var currentassetsRouter = require('./routes/currentassets');
var incentivesRouter = require('./routes/incentives');
var shippingtaxRouter = require('./routes/shippingtax');
var settingRouter = require('./routes/setting');
var securityRouter = require('./routes/security');
var permissionRouter = require('./routes/permission');
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

// This represent the value of href
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/customer', customerRouter);
app.use('/order', orderRouter);
app.use('/inventory', inventoryRouter);
app.use('/content', contentRouter);
app.use('/currentassets', currentassetsRouter);
app.use('/incentives', incentivesRouter);
app.use('/shippingtax', shippingtaxRouter);
app.use('/setting', settingRouter);
app.use('/security', securityRouter);
app.use('/permission', permissionRouter);
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
