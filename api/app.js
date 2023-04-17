const express = require('express');
const ErrorHandler = require('./middlewares/error');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'api/config/.env',
  });
}

// import routes
const user = require('./controllers/user');

app.use('/api/v2/user', user);

// errorhandling
app.use(ErrorHandler);

module.exports = app;
