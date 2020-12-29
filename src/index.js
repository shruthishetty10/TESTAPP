var uniqueRandomArray = require("unique-random-array");
var Names = require("./name.json");

module.exports = {
  all: Names,
  random:uniqueRandomArray(Names),
};
