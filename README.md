# Wikiquote-graphql

A GraphQL API server for [Wikiquote](https://en.wikiquote.org/wiki/Main_Page)

## Motivation

I wanted to create a quote application and existing API sources are not satisfying.

About Wikiquote REST API, it doesn't seem clean enough for a newbie, so I decided to build a much simpler API server on top of the existing ones.

## Features

For now, the API provide very minimal feature as I've juste started. I'll add more features step by step. Feel free to help me :)

### API documentation

* [Get quote of the day](#get-quote-of-the-day)

#### Get quote of the day

```json
// Request
{
  today {
    author
    date
    value
  }
}

// Response
{
  "data": {
    "today": {
      "author": "Michael Crichton  in  Travels",
      "date": "Tuesday, October 23, 2018, 18:34 ",
      "value": "The purpose of the I Ching or the tarot … "
    }
  }
}
```

### TODO

* Past N quotes
* Quote of X day (for example, the quote of yesterday)
* Quotes of a specific author

## Contributing

Don't hesitate to contribute to this projet by openning an issue or sending PR (pull request).

## Sources

* [Wikiquote API page](https://en.wikiquote.org/w/api.php)
* [Wikiquote main page](https://en.wikiquote.org/wiki/Main_Page)

## Contact

* [@jeremiecorpinot](https://twitter.com/jeremiecorpinot)