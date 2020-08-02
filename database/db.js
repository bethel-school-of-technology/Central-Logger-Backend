let mysql = require('mysql');


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Gotta put your MySQL password in
    database: 'logs'
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});