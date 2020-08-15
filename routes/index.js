var express = require('express');
var router = express.Router();
let mysql2 = require('mysql2');

    //  Database connection
let connection = mysql2.createConnection({
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

    //  Runs SELECT ALL query
const query = `SELECT * from logs.testlogs`;

    //  If query isn't found it throws an error
connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
});




/* GET home page. */
router.get('/',(req,res,next) => {
    res.render('index');
});

module.exports = router;
