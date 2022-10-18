import { connection } from "../bdd/app.js";

export default (req, res) => {
  let requete = "SELECT * FROM articles ";

  connection.query(requete, function (error, articles, fields) {
    res.render("home.ejs", { articles: articles });
  });
};
