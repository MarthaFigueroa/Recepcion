const utils = require('../selector.js');

exports.main = (req,res,module_) => {
    const resposePromise = utils.selectorReminderModule(req,module_);
    resposePromise.then(
        (results) => {
            results ? res.status(200).json(results) : res.status(500).json({status: 'Error interno'})
        },
        (err) => res.status(500).json(err)
    );
}