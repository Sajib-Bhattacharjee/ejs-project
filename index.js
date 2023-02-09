const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const pLanguages = [];

app.get("/", (req, res) => {
  res.render("index", { plNames: pLanguages });
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});
app.post("/", (req, res) => {
  const pLanguage = req.body.pLanguage;
  //console.log(pLanguage);
  pLanguages.push(pLanguage);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
