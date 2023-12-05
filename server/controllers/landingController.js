const landingUri = require("../data/photo.json");
const landingController = (req, res) => {
  res.json(landingUri);
};

module.exports = landingController
