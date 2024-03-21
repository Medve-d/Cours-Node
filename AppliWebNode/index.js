import Express from "express";
import shopRouter from "./routes/shop.js";

const app = Express();

// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set("view engine", "ejs");

app.set("views", "views");


app.use("/", (req, res, next) => {
  console.log(req.toto);
  next();
});

app.get("/", (req, res) => {
  res.render("home.ejs", {});
});

app.get("/shop", (req,res) => {
  res.render("shop.ejs")
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
