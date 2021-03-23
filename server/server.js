require("dotenv").config();
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const config = require("../knexfile");
const knex = require("knex")(config[process.env.DB_ENV]);

app.use(express.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/posts", async (req, res) => {
  const data = await knex.select().from("posts");
  res.send(data);
});

app.get("/comments/:id", async (req, res) => {
  const user = req.params.id;
  const data = await knex.select().from("comments").where("post_id", user);
  res.send(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`express listening on port ${port}`);
});
