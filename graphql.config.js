// graphql.config.js
module.exports = {
  projects: {
    app: {
      schema: "graphql.schema.json",
      documents: ["**/*.{graphql,ts,tsx}"],
      extensions: {
        endpoints: {
          default: {
            url: "https://api.new.pabau.com/v1/graphql",
            headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
          },
        },
      }
    }
  }
};
