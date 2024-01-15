const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const newMd = (req, res, next) => {
  console.log(req);
};

app.use(express.static(path.join(__dirname, "public")));
//app.use(newMd);

app.get("/hello/:name", (req, res) => {
  res.send("Hello World!" + req.params.name);
});
app.get("/about", (req, res) => {
  res.send("This is about!");
});
app.get("/contact", (req, res) => {
  res.send("This is contact!");
});
app.get("/page", (req, res) => {
  // res.sendFile(path.join(__dirname, 'index.html'))
  res.json({
    "abdullah": "sheikh",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
