const config = require('config');
const connection = require('./db/mysql.js');

const { addObject, updateObject, deleteObject, listObjects } = require('./modules/objects/index.js');
const { addCategorie, updateCategorie, deleteCategorie, listCategories } = require('./modules/categories/index.js');
const { addPrestamo, updatePrestamo, deletePrestamo, listPrestamos } = require('./modules/prestamos/index.js');
const { addMask, updateMask, deleteMask, listMasks, addGivenMask, updateGivenMask, deleteGivenMask, listGivenMasks } = require('./modules/masks/index.js');
const { addReminder, updateReminder, deleteReminder, listReminders } = require('./modules/reminders/index.js');
const { addUser, updateUser, deleteUser, listUsers } = require('./modules/users/index.js');

exports.selectorUserModule = (req,selectModule) => {
    return new Promise(async(resolve,reject) => {
        switch (selectModule) {
            case config.get('module.addUser'):
                console.log('Llamando al modulo para agregar un usuario exitosamente');
                await addUser({connection, req})
                    .then(response => resolve(response)) //Devuelve respuesta de la promesa
                    .catch(error => reject(error))
                break;
            case config.get('module.updateUser'):
                console.log('Llamando al modulo para modificar un usuario exitosamente');
                await updateUser({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.deleteUser'):
                console.log('Llamando al modulo para eliminar un usuario exitosamente');
                await deleteUser({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listUsers'):
                console.log('Llamando al modulo para listar usuarios exitosamente');
                await listUsers({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            default:
                reject({msg: config.get("moduleErrors.moduleNotFound")})
            break;
        }
    });
}

exports.selectorObjectModule = (req, selectModule) => {
    return new Promise(async(resolve,reject) => {
        switch (selectModule) {
            case config.get('module.addObject'):
                console.log('Llamando al modulo para agregar un objeto exitosamente');
                await addObject({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.updateObject'):
                console.log('Llamando al modulo para modificar un objeto exitosamente');
                await updateObject({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.deleteObject'):
                console.log('Llamando al modulo para eliminar un objeto exitosamente');
                await deleteObject({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listObjects'):
                console.log('Llamando al modulo para listar objetos exitosamente');
                await listObjects({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            default:
                reject({msg: config.get("moduleErrors.moduleNotFound")})
            break;
        }
    });
}


exports.selectorCategorieModule = (req, selectModule) => {
    return new Promise(async(resolve,reject) => {
        switch (selectModule) {
            case config.get('module.addCategorie'):
                console.log('Llamando al modulo para agregar un categoria exitosamente');
                await addCategorie({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.updateCategorie'):
                console.log('Llamando al modulo para modificar un categoria exitosamente');
                await updateCategorie({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.deleteCategorie'):
                console.log('Llamando al modulo para eliminar un categoria exitosamente');
                await deleteCategorie({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listCategories'):
                console.log('Llamando al modulo para listar categorias exitosamente');
                await listCategories({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            default:
                reject({msg: config.get("moduleErrors.moduleNotFound")})
            break;
        }
    });
}

exports.selectorPrestamoModule = (req, selectModule) => {
    return new Promise(async(resolve,reject) => {
        switch (selectModule) {
            case config.get('module.addPrestamo'):
                console.log('Llamando al modulo para crear un prestamo exitosamente');
                await addPrestamo({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.updatePrestamo'):
                console.log('Llamando al modulo para modificar un prestamo exitosamente');
                await updatePrestamo({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.deletePrestamo'):
                console.log('Llamando al modulo para eliminar un prestamo exitosamente');
                await deletePrestamo({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listPrestamos'):
                console.log('Llamando al modulo para listar prestamos exitosamente');
                await listPrestamos({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            default:
                reject({msg: config.get("moduleErrors.moduleNotFound")})
            break;
        }
    });
}

exports.selectorMaskModule = (req, selectModule) => {
    return new Promise(async(resolve,reject) => {
        switch (selectModule) {
            case config.get('module.addMask'):
                console.log('Llamando al modulo para agregar una mascarilla exitosamente');
                await addMask({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.updateMask'):
                console.log('Llamando al modulo para modificar una mascarilla exitosamente');
                await updateMask({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.deleteMask'):
                console.log('Llamando al modulo para eliminar una mascarilla exitosamente');
                await deleteMask({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listMasks'):
                console.log('Llamando al modulo para listar mascarillas exitosamente');
                await listMasks({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.addGivenMask'):
                console.log('Llamando al modulo para agregar una mascarilla etregada exitosamente');
                await addGivenMask({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.updateGivenMask'):
                console.log('Llamando al modulo para modificar una mascarilla etregada exitosamente');
                await updateGivenMask({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.deleteGivenMask'):
                console.log('Llamando al modulo para eliminar una mascarilla etregada exitosamente');
                await deleteGivenMask({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listGivenMasks'):
                console.log('Llamando al modulo para listar mascarillas etregadas exitosamente');
                await listGivenMasks({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            default:
                reject({msg: config.get("moduleErrors.moduleNotFound")})
            break;
        }
    });
}

exports.selectorReminderModule = (req, selectModule) => {
    return new Promise(async(resolve,reject) => {
        switch (selectModule) {
            case config.get('module.addReminder'):
                console.log('Llamando al modulo para crear un recordatorio exitosamente');
                await addReminder({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.updateReminder'):
                console.log('Llamando al modulo para modificar un recordatorio exitosamente');
                await updateReminder({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.deleteReminder'):
                console.log('Llamando al modulo para eliminar un recordatorio exitosamente');
                await deleteReminder({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listReminders'):
                console.log('Llamando al modulo para listar recordatorios exitosamente');
                await listReminders({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            default:
                reject({msg: config.get("moduleErrors.moduleNotFound")})
            break;
        }
    });
}
