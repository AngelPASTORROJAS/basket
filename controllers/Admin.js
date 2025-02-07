import { connection } from "../bdd/app.js";

export default (req, res) => {
  let sqlArticle;
  
  let requeteArticle = "SELECT id, name, description FROM articles";
  connection.query(requeteArticle, function (error, reponseArticle, fields) {
    var toString = JSON.stringify(reponseArticle)
    let json = JSON.parse(toString)
    .forEach(element => {
      
    });
    sqlArticle = JSON.parse(toString).slice()
    // console.log(sqlArticle[0])
  });
  console.log(sqlArticle);
  
  // let i = 0
  // sqlArticle.forEach(article => {
  //   let requeteCategory = `SELECT c.id, c.name FROM articlescategory as a
  //   RIGHT JOIN category as c ON a.categoryId = c.id
  //   WHERE a.articlesId = ?`;
  //   connection.query(requeteCategory,article.id,function(error,reponseCategory,fields){
  //       sqlArticle[i].categories = reponseCategory
  //   })
  //   i++
  // });
  // console.log(sqlArticle)

  // res.render("admin.ejs",{ articles : sqlArticle})


//   let id = 1;
//   let requete = [
//     "SELECT id, name, description FROM articles WHERE id = ?",
//     `SELECT c.id, c.name FROM articlescategory as a
//    RIGHT JOIN category as c ON a.categoryId = c.id
//   WHERE a.articlesId = ?`,
//   ].join(";");
//   let insertToRequete = [id, id];

//   connection.query(
//     requete,
//     insertToRequete,
//     function (error, resultSql, fields) {
//       let firstSql = resultSql[0][0];
//       let secondSql = resultSql[1];
//       res.render("admin.ejs", { article: firstSql, categories: secondSql });
//     }
//   );
};
