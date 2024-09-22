import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import "./models/index.js"

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:` + PORT);
});
