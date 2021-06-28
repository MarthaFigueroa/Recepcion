module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const { id } = req.params;
        const {usuario_cerro} = req.body;
        const query = `UPDATE tb_prestamos SET devuelto = ?, hora_devolucion = NOW(), usuario_cerro = ? WHERE id = ?`;
        // console.log(nombres, apellidos, email, dni, id_objeto, motivo, devuelto, firma, tiempo_prestamo, hora_prestamo, hora_devolucion, usuario_creo);
        connection.query(query, [1, usuario_cerro, id], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: `El objeto del préstamo con id: ${id} ha sido devuelto exitosamente!`})
            }
        })
    });
} 