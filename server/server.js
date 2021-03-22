require("dotenv").config();
const path = require("path");

const express = require("express");
const app = express();

const config = require("../knexfile");
const knex = require("knex")(config[process.env.DB_ENV]);

app.use(express.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/posts", async (req, res) => {
  const data = await knex.select().from("posts");
  res.send(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(5566, () => {
  console.log("express listening on port 5566");
});
