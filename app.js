const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Requests
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/calculate", (req, res) => {
  const { monthDuration, amountFinanced } = req.body;

  const monthlyFee = amountFinanced / monthDuration;

  res.send(JSON.stringify(monthlyFee.toFixed(2)));
});
app.post("/submit", (req, res) => {
  const body = Object.keys(req.body);
  if (body.length === 0) return res.send(400, "No content submited");
  return res.send(req.body);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
