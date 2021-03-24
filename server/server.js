require("dotenv").config();
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 5566;

const config = require("../knexfile");
const knex = require("knex")(config[process.env.DB_ENV]);

// Run migration
(async () => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  console.log("database migrated");
  await knex.seed.run();
  console.log("database seeded");
})();

app.use(express.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/posts", async (req, res) => {
  const data = await knex.select().from("posts").orderBy("id", "desc");
  res.send(data);
});

app.post("/posts", async (req, res) => {
  await knex("posts").insert([req.body]);
  res.send("post added");
});

app.get("/comments/:id", async (req, res) => {
  const user = Number(req.params.id);
  if (isNaN(user)) res.send("not valid");
  else {
    const data = await knex.select().from("comments").where("post_id", user);
    res.send(data);
  }
});

app.post("/comments", async (req, res) => {
  await knex("comments").insert([req.body]);
  res.send("comment added");
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`express listening on port ${port}`);
});
