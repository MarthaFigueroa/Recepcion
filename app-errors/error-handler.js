const module_ = require('./errors.js');
module.exports.errorHandler = function(err, req, res, next) {
    if (err.status === 503)
        err = module_.error(503);
    if (!err.status)
        err = module_.error(500)
    var status = err.status || 500;
    res.status(status).json({
        error: {
        errorCode: err.errorCode,
        errorType: err.errorType,
        code: err.code,
        description: err.description,
        }
    });
}