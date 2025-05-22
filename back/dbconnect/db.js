const mysql = require('mysql2');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',      // usually localhost
  user: 'root',           // your MySQL username
  password: '',           // your MySQL password (empty by default on XAMPP)
  database: 'mydatabase'  // your database name
});

// Connect
connection.connect((err) => {
  if (err) {
    console.error('❌ Connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected as ID ' + connection.threadId);
});

// Example query
connection.query('', (error, results) => {
  if (error) throw error;
  console.log('📦 Data:', results);
});

// Don't forget to close the connection
connection.end();