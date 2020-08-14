var express = require('express');
var router = express.Router();
let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password1!', // Gotta put your MySQL password in
    database: 'logs'
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

const query = `SELECT * from logs.testlogs`;

connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
});




/* GET home page. */
router.get('/',(req,res,next) => {
    res.render('index');
});


router.post('/home/:id', (req, res, next) => {
    let logsId = parseInt(req.params.id);
    console.log(actorId);

    let idQuery = `SELECT * FROM actor WHERE actor_id=${logsId}`;
    console.log(idQuery)
});

module.exports = router;
