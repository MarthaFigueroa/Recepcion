module.exports = {
    userService: require('./user-service.js').main,
    objectService: require('./object-service.js').main,
    defectiveObjectService: require('./defective-object-service.js').main,
    categorieService: require('./categorie-service.js').main,
    prestamoService: require('./prestamo-service.js').main,
    roleService: require('./role-service.js').main,
    maskService: require('./mask-service.js').main,
    importanceService: require('./importance-service.js').main,
    reminderService: require('./reminder-service.js').main
}
