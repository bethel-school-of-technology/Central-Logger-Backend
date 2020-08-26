var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');
var logger = require('morgan');
var models = require('./models');

var indexRouter = require('./routes/index');

var app = express();

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//models.sequelize.sync().then(() => console.log("DB Sync'd up"));

module.exports = app;


//  This is what I used to generate the sequelize files
//  sequelize model:generate --name index --attributes idtestLogs:integer,level:integer,date:string,source:integer,eventId:integer,taskCategory:string --force