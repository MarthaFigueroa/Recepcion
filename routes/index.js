const express = require('express');
const router = express.Router();
const config = require('config');
const { userService, objectService, defectiveObjectService, categorieService, prestamoService, maskService, reminderService } = require('../services/index.js');

module.exports = () => {


    //USERS

    router.get(config.get('routeService.listUsers'), (req, res) =>{
        userService(req, res, config.get('module.listUsers'))
    });    

    router.post(config.get('routeService.addUser'),(req,res)=>{
        userService(req,res,config.get('module.addUser'))
    });

    router.post(config.get('routeService.disableUser'),(req,res)=>{
        userService(req,res,config.get('module.disableUser'))
    });

    router.post(config.get('routeService.deleteUser'), (req, res) =>{
        console.log(req.params);
        userService(req, res, config.get('module.deleteUser'))
    });

    router.get(config.get('routeService.userById'), (req, res) =>{
        console.log(req.params);
        userService(req, res, config.get('module.userById'))
    });

    router.post(config.get('routeService.updateUser'), (req, res) =>{
        console.log(req.params);
        userService(req, res, config.get('module.updateUser'))
    });

    //CATEGORIES


    router.get(config.get('routeService.listCategories'), (req, res) =>{
        categorieService(req, res, config.get('module.listCategories'))
    });    
    
    router.post(config.get('routeService.addCategorie'), (req, res) =>{
        categorieService(req, res, config.get('module.addCategorie'))
    });

    router.get(config.get('routeService.categorieById'), (req, res) =>{
        categorieService(req, res, config.get('module.categorieById'))
    });  

    router.post(config.get('routeService.deleteCategorie'), (req, res) =>{
        console.log(req.params);
        categorieService(req, res, config.get('module.deleteCategorie'))
    });

    router.post(config.get('routeService.updateCategorie'), (req, res) =>{
        console.log(req.params);
        categorieService(req, res, config.get('module.updateCategorie'))
    });

    
    //OBJECTS


    router.post(config.get('routeService.addObject'), (req, res)=>{
        console.log(req.body);
        objectService(req, res, config.get('module.addObject'))
    });

    router.get(config.get('routeService.listObjects'), (req, res)=>{
        objectService(req, res, config.get('module.listObjects'))
    });

    
    router.get(config.get('routeService.objectById'), (req, res)=>{
        objectService(req, res, config.get('module.objectById'))
    });

    router.post(config.get('routeService.deleteObject'), (req, res)=>{
        console.log(req.params);
        objectService(req, res, config.get('module.deleteObject'))
    });

    router.post(config.get('routeService.updateObject'), (req, res)=>{
        console.log(req.params);
        objectService(req, res, config.get('module.updateObject'))
    });


     //DEFECTIVE OBJECTS


    router.post(config.get('routeService.addDefectiveObject'), (req, res)=>{
        console.log(req.body);
        defectiveObjectService(req, res, config.get('module.addDefectiveObject'))
    });

    router.get(config.get('routeService.listDefectiveObjects'), (req, res)=>{
        defectiveObjectService(req, res, config.get('module.listDefectiveObjects'))
    });

    router.get(config.get('routeService.defectiveObjectById'), (req, res)=>{
        defectiveObjectService(req, res, config.get('module.defectiveObjectById'))
    });

    router.post(config.get('routeService.deleteDefectiveObject'), (req, res)=>{
        console.log(req.params);
        defectiveObjectService(req, res, config.get('module.deleteDefectiveObject'))
    });

    router.post(config.get('routeService.updateDefectiveObject'), (req, res)=>{
        console.log(req.params);
        defectiveObjectService(req, res, config.get('module.updateDefectiveObject'))
    });


    //PRESTAMOS


    router.post(config.get('routeService.addPrestamo'), (req, res)=>{
        // console.log(req.body);
        prestamoService(req, res, config.get('module.addPrestamo'))
    });

    router.get(config.get('routeService.listPrestamos'), (req, res)=>{
        prestamoService(req, res, config.get('module.listPrestamos'))
    });

    router.post(config.get('routeService.deletePrestamo'), (req, res)=>{
        console.log(req.params);
        prestamoService(req, res, config.get('module.deletePrestamo'))
    });

    router.post(config.get('routeService.updatePrestamo'), (req, res)=>{
        console.log(req.params);
        prestamoService(req, res, config.get('module.updatePrestamo'))
    });

    router.get(config.get('routeService.prestamoById'), (req, res)=>{
        console.log(req.params);
        prestamoService(req, res, config.get('module.prestamoById'))
    });

    router.post(config.get('routeService.returnObject'), (req, res)=>{
        console.log(req.params);
        prestamoService(req, res, config.get('module.returnObject'))
    });


    //Masks


    router.post(config.get('routeService.addMask'), (req, res)=>{
        console.log(req.body);
        maskService(req, res, config.get('module.addMask'))
    });
    
    router.get(config.get('routeService.listMasks'), (req, res)=>{
        maskService(req, res, config.get('module.listMasks'))
    });

    router.get(config.get('routeService.maskById'), (req, res)=>{
        maskService(req, res, config.get('module.maskById'))
    });

    router.post(config.get('routeService.deleteMask'), (req, res)=>{
        console.log(req.params);
        maskService(req, res, config.get('module.deleteMask'))
    });

    router.post(config.get('routeService.updateMask'), (req, res)=>{
        console.log(req.params);
        maskService(req, res, config.get('module.updateMask'))
    });

    router.post(config.get('routeService.addGivenMask'), (req, res)=>{
        console.log(req.body);
        maskService(req, res, config.get('module.addGivenMask'))
    });

    router.get(config.get('routeService.listGivenMasks'), (req, res)=>{
        maskService(req, res, config.get('module.listGivenMasks'))
    });

    router.get(config.get('routeService.givenMaskById'), (req, res)=>{
        maskService(req, res, config.get('module.givenMaskById'))
    });

    router.post(config.get('routeService.deleteGivenMask'), (req, res)=>{
        console.log(req.params);
        maskService(req, res, config.get('module.deleteGivenMask'))
    });

    router.post(config.get('routeService.updateGivenMask'), (req, res)=>{
        console.log(req.params);
        maskService(req, res, config.get('module.updateGivenMask'))
    });


    //REMINDERS


    router.post(config.get('routeService.addReminder'), (req, res)=>{
        // console.log(req.body);
        reminderService(req, res, config.get('module.addReminder'))
    });

    router.get(config.get('routeService.listReminders'), (req, res)=>{
        reminderService(req, res, config.get('module.listReminders'))
    });

    router.get(config.get('routeService.reminderById'), (req, res)=>{
        reminderService(req, res, config.get('module.reminderById'))
    });

    router.post(config.get('routeService.deleteReminder'), (req, res)=>{
        console.log(req.params);
        reminderService(req, res, config.get('module.deleteReminder'))
    });

    router.post(config.get('routeService.updateReminder'), (req, res)=>{
        console.log(req.params);
        reminderService(req, res, config.get('module.updateReminder'))
    });


    return router;
}