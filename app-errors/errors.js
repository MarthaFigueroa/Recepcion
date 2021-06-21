  
exports.error = function(code, description) {
    var err = new Error();
    err.status = code;
    switch (code) {
        case 400:
        err.errorCode = 400;
        err.errorType = 'MSJ';
        err.code = '001';
        err.description = 'Error en mensaje de entrada.';
        break;
        case 401:
        err.errorCode = 401;
        err.errorType = 'SEG';
        err.code = '001';
        err.description = 'Token invalido de autorización.';
        break;
        case 403:
        err.errorCode = 403;
        err.errorType = 'NEG';
        err.code = '001';
        err.description = 'No es permitido ejecutar la operacion en servicio legado.';
        break;
        case 404:
        err.errorCode = 404;
        err.errorType = 'MSJ';
        err.code = '002';
        err.description = 'Tratando de acceder a recurso que no existe';
        break;
        case 500:
        err.errorCode = 500;
        err.description = 'Internal server error.';
        break;
        case 503:
        err.errorCode = 503;
        err.errorType = 'COM';
        err.code = '003';
        err.description = 'No hay comunicacion con el servicio.';
        break;
        case 504:
        err.errorCode = 504;
        err.errorType = 'COM';
        err.code = '003';
        err.description = 'No hay comunicacion con el servicio.';
        break;
        default:
        err.description = 'Unknow error.';
    }
    if (!description)
        return err;
    else {
        err.description = description;
        return err;
    }
}