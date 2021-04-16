const express = require("express");
const app = express();
const initAPIs = require("./routers/api");

app.use(express.json());

initAPIs(app);

let port = 888;
app.listen(port, () => {
  console.log(`Hello Phan Ngoc My, I'm running at localhost:${port}/`);
});