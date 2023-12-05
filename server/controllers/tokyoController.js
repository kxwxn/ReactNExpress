const picsUri = require("../data/tokyo.json");


const tokyoController = (req, res) => {
  res.json(picsUri);
};


module.exports = tokyoController

