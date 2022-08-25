const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const StudetRouter = require("./routes/student.route");
const { Connection } = require("./utils/conecction");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) =>
  res.send({ status: true, message: "Server Successfully Deployed...!" })
);

app.use("/api/student", StudetRouter);
app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
  Connection();
});
