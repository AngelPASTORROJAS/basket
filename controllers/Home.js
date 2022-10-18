import mysql from "mysql";

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "basket",
  }

var connection = mysql.createConnection(config);


export default (req, res) => {
  let requete = "SELECT * FROM articles ";

  connection.query(requete, function (error, articles, fields) {
    res.render("home.ejs", {articles: articles});
  });
};
