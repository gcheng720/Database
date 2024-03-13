const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: '34.82.234.79',
  user: 'root',
  password: '',
  database: 'proof-reader-db'
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});
// close the MySQL connection
connection.end();
