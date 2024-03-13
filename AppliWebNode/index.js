import express from "express";


const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs")

app.set("views", "views")

app.get("/home", (req, res) => {
  res.render("home.ejs")
});
app.get("/shop", (req, res) => {
  res.render("shop2.ejs")
});


// le serveur ecoute sur le port 3000 : http://localhost:3000
app.listen(3000);
