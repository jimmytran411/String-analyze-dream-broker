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
 const data = req.body;
 const textArray = data.text
  .toLowerCase()
  .match(/[a-z]+/g)
  .flatMap((el) => el.split(""))
  .sort();

 const analyzeResult = textArray
  .reduce((mapObj, letter) => {
   !mapObj.has(letter) && mapObj.set(letter, { [`${letter}`]: 0 });
   const obj = mapObj.get(letter);
   obj[`${letter}`]++;

   return mapObj;
  }, new Map())
  .values();
 const result = [...analyzeResult];

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
