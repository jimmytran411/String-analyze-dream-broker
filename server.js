const express = require("express");
const app = express();
const path = require("path");

const textAnalyzer = require("./textAnalizer");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
 res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
 res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, OPTIONS, PUT, PATCH, DELETE"
 );
 res.setHeader(
  "Access-Control-Allow-Headers",
  "X-Requested-With, Content-Type, Accept"
 );
 next();
});

app.post("/analyze", (req, res) => {
 const text = req.body.text;

 const result = textAnalyzer(text);

 res.json(result);
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "frontend/build")));
const root = path.join(__dirname, "frontend", "build");
app.use(express.static(root));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
 console.log(`server started on port ${PORT}`);
});

module.export = app;
