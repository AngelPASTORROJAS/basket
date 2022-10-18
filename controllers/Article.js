import { connection } from "../bdd/app.js";

export default (req, res) => {
  let id = req.params.id;
  let requeteArticles = `SELECT * FROM articles WHERE id = ? `;
//   let requeteCommentaire = `SELECT * FROM commentaire WHERE articlesId = ? `;

//   let article;
//   let commentaires;

  connection.query(requeteArticles, [id], function (error, articles, fields) {
    let article = articles[0];
    res.render("article.ejs", { article: article });
  });

//   connection.query(
//     requeteCommentaire,
//     [id],
//     function (error, commentairesOut, fields) {
//       commentaires = commentairesOut;
//       console.log(commentaires)
//     }
//   );

};
