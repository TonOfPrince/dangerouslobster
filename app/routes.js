var utils = require('./utils');
var models = require('./models.js');

module.exports = function(app) {
  app.post('/location', function(req, res) {
    var location = new models.RecSession(req.body.location, utils.generateUID());
    location.getYelpData(function(err, data, yelpRes) {
      res.json({locationData: location, yelpData: location.yelpData});
    })
  });
};
