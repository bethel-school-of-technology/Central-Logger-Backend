var express = require('express');
var router = express.Router();
let mysql = require('mysql2');
var models = require('./models');


    //  Database connection
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password1!', // Gotta put your MySQL password in
    database: 'logs'
});

    //  Connects to database 
connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

models.sequelize.sync().then(function() {
    console.log("DB Sync'd up")
  });
  
  module.exports = app;
 




module.exports = router;
