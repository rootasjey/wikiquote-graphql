const todayResolvers = {
  EN: require('./resolvers/today-EN'),
  FR: require('./resolvers/today-FR')
};

module.exports = {
  // A map of functions which return data for the schema.
  Query: {
    version: () => '0.2.0',

    languages: () => ['EN', 'FR'],

    today: (root, args) => {
      const { language } = args;
      return todayResolvers[language](language);
    }
  },
};
