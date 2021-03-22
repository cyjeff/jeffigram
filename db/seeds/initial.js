exports.seed = function (knex) {
  return knex("posts")
    .del()
    .then(function () {
      return knex("posts").insert([
        {
          user: "cyjeff",
          photo_url:
            "https://www.googleapis.com/download/storage/v1/b/jeffigram/o/6B024D17-4CB2-4E40-9B0A-C0384B165073_1_105_c.jpeg?generation=1616390564956087&alt=media",
        },
        {
          user: "cyjeff",
          photo_url:
            "https://www.googleapis.com/download/storage/v1/b/jeffigram/o/DCE9838B-7CBF-4F0B-9E11-40B9889A2588_1_105_c.jpeg?generation=1616390550076602&alt=media",
        },
        {
          user: "cyjeff",
          photo_url:
            "https://www.googleapis.com/download/storage/v1/b/jeffigram/o/EE774B7D-F353-4914-A29B-295B5712B693_1_105_c.jpeg?generation=1616390588929490&alt=media",
        },
      ]);
    })
    .then(function () {
      return knex("comments")
        .del()
        .then(function () {
          return knex("comments").insert([
            { user: "cyjeff", text: "great pic!", post_id: 1 },
            { user: "cyjeff", text: "luv it!", post_id: 1 },
            { user: "cyjeff", text: "where is it?", post_id: 2 },
          ]);
        });
    });
};
