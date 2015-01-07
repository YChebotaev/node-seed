var routes = module.exports = require('all-in')(__dirname);

routes.index = function(req, res, next){
  return next();
};