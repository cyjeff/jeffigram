const express = require("express");

const app = express();

app.use(express.json());

app.listen(5566, () => {
  console.log("express listening on port 5566");
});
