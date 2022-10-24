require('jsdom-global');
const chai = require('chai');
const chaiDom = require('chai-dom');
const { JSDOM } = require('jsdom');
chai.use(chaiDom);
const expect = chai.expect;

describe('asset-tags.html', () => {
  beforeEach((done) => {
    JSDOM.fromFile("src/lab-html/asset-tags/asset-tags.exercise.html")
      .then((dom) => {
        global.document = dom.window.document;
        head = document.head;
      })
      .then(done, done);
  });

  describe("css link", () => {
    it('should have stylesheet link', function () {
      let element = document.querySelector("link[href='style.css']");
      expect(element).to.exist;
      expect(element).to.have.attribute('rel', 'stylesheet');
      expect(head).to.contain(element);
    });
  });

  describe("script link", () => {
    it('should have script link', function () {
      let element = document.querySelector("script[src='app.js']");
      expect(element).to.exist;
      expect(element).to.have.attribute('defer');
      expect(head).to.contain(element);
    });
  });
});