import express from "express";
import Connection from "./database/Connection.js";
const app = express();

new Connection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
