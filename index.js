import express from "express";
import router from "./routes/routes.js";

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.use("/", router);

app.listen(3001, "localhost", () => {
  console.log("Serveur démarré sur http://localhost:3001");
});
