const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    "API version"
    version: String,

    "Get the quote of today"
    today: Quote
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
`;