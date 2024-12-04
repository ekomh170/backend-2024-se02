// import FruitController
const { index, store } = require("./FruitController.js");

// membuat fungsi main
const main = () => {
  index();
  store("Melon");
};

main();
