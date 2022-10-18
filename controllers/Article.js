import { connection } from "../bdd/app.js";

export default (req, res) => {
  let id = req.params.id;

  let queries = [
    "SELECT * FROM articles WHERE id = ?",
    "SELECT * FROM commentaire WHERE articlesId = ? ;",
  ];

  connection.query(queries.join(';'), [id,id], function (error, result, fields) {
    res.render("article.ejs", { article: result[0][0], commentaires: result[1] });
  });
};
