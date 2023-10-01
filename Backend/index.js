const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
app.use(express.json());
const port = 3000;

//Routes
app.use("/api/auth", require("./routes/auth"));

//Listen
app.listen(port, () => {
  console.log(`conected with port no: ${port}`);
});
