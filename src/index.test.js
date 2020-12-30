var expect = require("chai").expect;
var Names = require("./index");

describe("name", function () {
  describe("all", function () {
    it("should be an array of strings!", function () {
      expect(Names.all).to.satisfy(isArrayOfStrings);
      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === "string";
        });
      }
    });
    it("should contain shruthi", function () {
      expect(Names.all).to.include("Shruthi");
    });
  });
  describe("random", function () {
    it("should return a random item from names.all!", function () {
      var randomItem = Names.random();
      expect(Names.all).to.include(randomItem);
    });
  });
});
