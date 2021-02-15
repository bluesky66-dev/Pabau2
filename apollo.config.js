module.exports = {
  client: {
    service: {
      name: 'hasura',
      url: 'https://api.new.pabau.com/v1/graphql',

// optional headers
      headers: {
        //authorization: 'Bearer lkjfalkfjadkfjeopknavadf'
      },
      // optional disable SSL validation check
      //skipSSLValidation: true
    },
  },
};
