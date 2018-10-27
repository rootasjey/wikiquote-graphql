const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = (language) => {
  return JSDOM
    .fromURL(`https://${language}.wikiquote.org/wiki/Main_Page`)
    .then(dom => {
      const body = dom.window.document.body;

      const author = body
        .querySelector('#mf-qotd tbody tbody tbody tr:nth-child(2)')
        .textContent
        .replace(/[\n\r]/g, '')
        .replace(/[~]/g, '')
        .trim();

      const dateElem = body
        .querySelector('#mf-header .MainPageLetterHead tr td:nth-child(2)');

      const date = dateElem.textContent.substring(0, dateElem.textContent.indexOf('(UTC)'));

      const value = body
        .querySelector('#mf-qotd tbody tbody tbody tr')
        .textContent
        .replace(/[\n\r]/g, '');

      return {
        author,
        date,
        value
      };
    });
};