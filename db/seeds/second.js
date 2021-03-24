exports.seed = function (knex) {
  return knex("comments")
    .del()
    .then(function () {
      return knex("comments").insert([
        { user: "cyjeff", text: "great pic!", post_id: 1 },
        { user: "cyjeff", text: "luv it!", post_id: 1 },
        { user: "cyjeff", text: "where is it?", post_id: 2 },
      ]);
    });
};
