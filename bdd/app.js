import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "basket",
});

let requete = "SELECT * FROM articles ";

connection.query(requete, function (error, requete, fields) {
  console.log(requete);
});
