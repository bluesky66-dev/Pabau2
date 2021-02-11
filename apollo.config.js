module.exports = {
  client: {
    service: {
      name: 'hasura',
      url: 'http://host.docker.internal:8080/v1/graphql',

// optional headers
      headers: {
        //authorization: 'Bearer lkjfalkfjadkfjeopknavadf'
      },
      // optional disable SSL validation check
      //skipSSLValidation: true
    },
  },
};
