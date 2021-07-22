const config = require('config');
const connection = require('./db/mysql.js');

const { addObject, updateObject, deleteObject, listObjects, objectById, enableObject } = require('./modules/objects/index.js');
const { addDefectiveObject, updateDefectiveObject, deleteDefectiveObject, listDefectiveObjects, defectiveObjectById } = require('./modules/defectiveObjects/index.js');
const { addCategorie, updateCategorie, deleteCategorie, listCategories, categorieById, enableCategorie } = require('./modules/categories/index.js');
const { addImportance, updateImportance, deleteImportance, listImportance, importanceById } = require('./modules/importance/index.js');
const { addPrestamo, updatePrestamo, deletePrestamo, listPrestamos, returnObject, prestamoById } = require('./modules/prestamos/index.js');
const { addMask, updateMask, deleteMask, maskById, listMasks, addGivenMask, updateGivenMask, givenMaskById, deleteGivenMask, listGivenMasks } = require('./modules/masks/index.js');
const { addReminder, updateReminder, deleteReminder, listReminders, reminderById } = require('./modules/reminders/index.js');
const { addRole, updateRole, listRoles, roleById } = require('./modules/roles/index.js');
const { addUser, updateUser, deleteUser, listUsers, disableUser, userById, enableUser } = require('./modules/users/index.js');

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
            case config.get('module.userById'):
                console.log('Llamando al modulo para obtener información de un usuario por su id exitosamente');
                await userById({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.disableUser'):
                console.log('Llamando al modulo para deshabilitar un usuario exitosamente');
                await disableUser({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.enableUser'):
                console.log('Llamando al modulo para habilitar un usuario exitosamente');
                await enableUser({connection, req})
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
            case config.get('module.enableObject'):
                console.log('Llamando al modulo para habilitar un usuario exitosamente');
                await enableObject({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.objectById'):
                console.log('Llamando al modulo para listar objetos por su id exitosamente');
                await objectById({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            default:
                reject({msg: config.get("moduleErrors.moduleNotFound")})
            break;
        }
    });
}

exports.selectorDefectiveObjectModule = (req, selectModule) => {
    return new Promise(async(resolve,reject) => {
        switch (selectModule) {
            case config.get('module.addDefectiveObject'):
                console.log('Llamando al modulo para agregar un objeto defectuoso exitosamente');
                await addDefectiveObject({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.updateDefectiveObject'):
                console.log('Llamando al modulo para modificar un objeto defectuoso exitosamente');
                await updateDefectiveObject({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.defectiveObjectById'):
                console.log('Llamando al modulo para obtener información de un objeto defectuoso por su id exitosamente');
                await defectiveObjectById({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.deleteDefectiveObject'):
                console.log('Llamando al modulo para eliminar un objeto defectuoso exitosamente');
                await deleteDefectiveObject({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listDefectiveObjects'):
                console.log('Llamando al modulo para listar objetos defectuosos exitosamente');
                await listDefectiveObjects({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            default:
                reject({msg: config.get("moduleErrors.moduleNotFound")})
            break;
        }
    });
}

exports.selectorImportanceModule = (req, selectModule) => {
    return new Promise(async(resolve,reject) => {
        switch (selectModule) {
            case config.get('module.addImportance'):
                console.log('Llamando al modulo para agregar un importancia exitosamente');
                await addImportance({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.updateImportance'):
                console.log('Llamando al modulo para modificar un importancia exitosamente');
                await updateImportance({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.importanceById'):
                console.log('Llamando al modulo para listar importancias por su id exitosamente');
                await importanceById({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.deleteImportance'):
                console.log('Llamando al modulo para eliminar un importancia exitosamente');
                await deleteImportance({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listImportance'):
                console.log('Llamando al modulo para listar importancias exitosamente');
                await listImportance({connection, req})
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
            case config.get('module.categorieById'):
                console.log('Llamando al modulo para listar categorias por su id exitosamente');
                await categorieById({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.enableCategorie'):
                console.log('Llamando al modulo para habilitar una categoria exitosamente');
                await enableCategorie({connection, req})
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
            case config.get('module.prestamoById'):
                console.log('Llamando al modulo para listar un prestamo por su id exitosamente');
                await prestamoById({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.returnObject'):
                console.log('Llamando al modulo para devolver el objeto de un prestamo exitosamente');
                await returnObject({connection, req})
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
            case config.get('module.maskById'):
                console.log('Llamando al modulo para obtener información de una mascarilla por su id exitosamente');
                await maskById({connection, req})
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
            case config.get('module.givenMaskById'):
                console.log('Llamando al modulo para obtener información de una mascarilla entregada por su id exitosamente');
                await givenMaskById({connection, req})
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
            case config.get('module.reminderById'):
                console.log('Llamando al modulo para obtener información de un recordatorio por su id exitosamente');
                await reminderById({connection, req})
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

exports.selectorRoleModule = (req, selectModule) => {
    return new Promise(async(resolve,reject) => {
        switch (selectModule) {
            case config.get('module.addRole'):
                console.log('Llamando al modulo para crear un rol exitosamente');
                await addRole({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.updateRole'):
                console.log('Llamando al modulo para modificar un rol exitosamente');
                await updateRole({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.roleById'):
                console.log('Llamando al modulo para obtener información de un rol por su id exitosamente');
                await roleById({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            case config.get('module.listRoles'):
                console.log('Llamando al modulo para listar roles exitosamente');
                await listRoles({connection, req})
                    .then(response => resolve(response)) 
                    .catch(error => reject(error))
                break;
            default:
                reject({msg: config.get("moduleErrors.moduleNotFound")})
            break;
        }
    });
}
