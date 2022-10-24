require('jsdom-global');
const chai = require('chai');
const chaiDom = require('chai-dom');
const { JSDOM } = require('jsdom');
const expect = chai.expect;
chai.use(chaiDom);

describe("emmet-boilerplate.html", () => {
  beforeEach((done) => {
    JSDOM.fromFile("src/lab-html/boilerplate/emmet-boilerplate.exercise.html")
      .then((dom) => {
        global.document = dom.window.document;
        global.head = dom.window.document.head;
      })
      .then(done, done);
  });

  describe("doctype", () => {
    it("should be proper doctype", () => {
      expect(document.doctype.name).to.include("html");
    });
  });

  describe("html", () => {
    it("should have attribute lang='en'", () => {
      let element = document.querySelector("html");
      expect(element).to.have.attribute("lang", "en");
    });
  });

  describe("head", () => {
    it("should contain meta charset utf-8", () => {
      let element = head.querySelector("meta[charset]");
      expect(element).to.exist;
      expect(element).to.have.attribute("charset", "utf-8");
    });

    it("should contain meta http-equiv='X-UA-Compatible' content='IE=edge'", () => {
      let element = head.querySelector("meta[http-equiv]");
      expect(element).to.exist;
      expect(head).to.contain(element);
      expect(element).to.have.attribute('http-equiv', 'X-UA-Compatible');
      expect(element).to.have.attribute('content', 'IE=edge');
    });

    it("should contain meta name='viewport' content='width=device-width, initial-scale=1.0'", () => {
      let element = head.querySelector("meta[name='viewport']");
      expect(element).to.exist;
      expect(element).to.have.attribute(
        "content",
        "width=device-width, initial-scale=1.0"
      );
    });

    it("should contain title", () => {
      let element = head.querySelector("title");
      expect(element).to.exist;
    });
  });
});
