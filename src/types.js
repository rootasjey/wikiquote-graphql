const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    "Available quotes languages"
    languages: [Language]!,

    "Get the quote of today"
    today(language: Language = EN): Quote,

    "API version"
    version: String,
  }

  "A quote"
  type Quote {

    "Quote's author"
    author: String,

    "Quote's date (Day, Month Date, Year, HH:mm)"
    date: String,

    "Quote's value"
    value: String
  }

  "API supported languages"
  enum Language {
    EN,
    FR
  }
`;