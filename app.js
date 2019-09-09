var mysql = require('mysql');

var con = mysql.createConnection({
  host: "host",
  port: port,
  user: "user",
  password: "password",
  database: "database"
});

var lista;

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM city", function (err, result, fields) {
    if (err) throw err;
    lista = result;
  });
});

console.log(lista);