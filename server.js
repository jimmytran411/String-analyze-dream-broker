const express = require("express");
const app = express();

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

app.get("/analyze", (req, res) => {
 const text = req.body.text;

 const withSpaces = text.length;
 const withoutSpaces = text
  .toLowerCase()
  .match(/[a-z0-9]+/g)
  .join("").length;

 const wordCount = text.toLowerCase().match(/[a-z0-9]+/g).length;

 const textArray = text
  .toLowerCase()
  .match(/[a-z]+/g)
  .flatMap((el) => el.split(""))
  .sort();

 const analyze = textArray
  .reduce((mapObj, letter) => {
   !mapObj.has(letter) && mapObj.set(letter, { [`${letter}`]: 0 });
   const obj = mapObj.get(letter);
   obj[`${letter}`]++;

   return mapObj;
  }, new Map())
  .values();
 const analyzeResult = [...analyze];

 const result = {
  textLength: { withSpaces, withoutSpaces },
  wordCount,
  characterCount: analyzeResult,
 };

 res.status(200).send(result);
});

app.options("*", function (req, res) {
 res.send(200);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
 console.log(`server started on port ${PORT}`);
});

app.use((req, res) => {
 res.status(404).json({
  message: "Route Not Found",
 });
});

app.use((err, req, res) => {
 res.status(err.status || 500).json({
  message: err.message,
  error: {},
 });
});

module.export = app;