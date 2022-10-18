import { connection } from "../bdd/app.js";

export default (req, res) => {
  let id = req.params.id;
  let requete = `SELECT 
  a.id, 
  a.name, 
  a.description, 
  a.date,
  c.id as commentaireId,
  c.pseudo,
  c.commentaire,
  c.date as commentaireDate
  FROM articles as a
  LEFT JOIN commentaire as c ON a.id = c.articlesId 
  WHERE a.id = ? `;

  connection.query(requete, [id], function (error, articles, fields) {
    console.log(articles); //object OBJECT Array iterator
    res.render("article.ejs", { article: articles[0] });
  });
};
