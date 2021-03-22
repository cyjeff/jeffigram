require("dotenv").config();

const express = require("express");
const app = express();

const config = require("../knexfile");
const knex = require("knex")(config[process.env.DB_ENV]);

app.use(express.json());

app.get("/posts", async (req, res) => {
  const data = await knex.select().from("posts");
  res.send(data);
});

app.listen(5566, () => {
  console.log("express listening on port 5566");
});
