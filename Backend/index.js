const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
app.use(cors());
app.use(express.json());

//Port No.
const port = 5000;

//Routes
app.use("/api/auth", require("./routes/auth"));

app.use("/api/host", require("./routes/host"));

app.use("/api/join", require("./routes/join"));

app.use("/api/submit", require("./routes/submit"));

app.use("/api/dashboard", require("./routes/dashboard"));

app.use("/api/leaderboard", require("./routes/leaderboard"));

app.use("/api/unpublish", require("./routes/expire"));

//Listen
app.listen(port, () => {
  console.log(`conected with port no: ${port}`);
});
