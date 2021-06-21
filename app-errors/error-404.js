const module_ = require('./errors.js');
module.exports.error404 = function(req, res, next) {
    next(module_.error(404));
}