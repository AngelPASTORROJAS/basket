import { connection } from "../bdd/app.js";

export const DisplayArticle = (req, res) => {
  let id = req.params.id;
  let joinOnQueries = [id,id]; 
  let queries = [
    "SELECT * FROM articles WHERE id = ?",
    "SELECT * FROM commentaire WHERE articlesId = ? ;"
  ];

  connection.query(
    queries.join(";"),
    joinOnQueries,
    function (error, result, fields) {
      res.render("article.ejs", {
        article: result[0][0],
        commentaires: result[1]
      });
    }
  );
};

export const SubmitCommentaire = (req,res)=> {
  let id = req.params.id;
  let commentaireToInsert = req.body;
  
  let dateNew = new Date(); 
  let dateNow = [
    dateNew.getFullYear().toString(),
    (dateNew.getMonth()+1).toString(),
    dateNew.getDate().toString()
  ].join('-')
  
  let joinOnQueries = [commentaireToInsert.pseudo,commentaireToInsert.commentaire,dateNow,id]
  let queries = `INSERT INTO 
  commentaire (pseudo, commentaire, date, articlesId)
  VALUES (?,?,?,?)`;

  connection.query(queries, joinOnQueries, function (error, result, fields) {
    console.log(error);
    console.log(result);  
    res.redirect("/article/"+id.toString());
    }
  );
}




