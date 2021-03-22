module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "yuchu",
      password: "",
      database: "jeffigram",
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};
