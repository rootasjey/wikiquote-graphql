const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = (language) => {
  return JSDOM
    .fromURL(`https://${language}.wikiquote.org/wiki/Main_Page`)
    .then(dom => {
      const body = dom.window.document.body;
      const quoteRoot = body.querySelector('div[title="Citation du jour"]');

      const authorElem = quoteRoot
        .querySelector('i + a');

      const author = authorElem ? authorElem
        .textContent
        .replace(/[\n\r]/g, '')
        .replace(/[~]/g, '')
        .trim() : '';

      const date = new Date().toLocaleString();

      const value = quoteRoot
        .querySelector('i')
        .textContent
        .replace(/[\n\r]/g, '');

      return {
        author,
        date,
        value
      };
    });
};