module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {titulo, descripcion, usuario_creo} = req.body;
        //INSERT INTO tb_prestamos (nombres, apellidos, email, dni, id_objeto, motivo, devuelto, firma, tiempo_prestamo, hora_prestamo, hora_devolucion, usuario_creo, usuario_cerro) VALUES ("Martha", "Márquez Figueroa", "martha.marquez@mail.com", "Martha", 9, "Uso del ascensor", 1, "Martha", "10", "2020-11-10", "2020-11-10", "Maria", "Maria")
        const query = `INSERT INTO tb_recordatorios (titulo, descripcion, completado, usuario_creo, fecha_creo) VALUES (?, ?, ?, ?, NOW())`;
        console.log(titulo, descripcion, usuario_creo);
        connection.query(query, [titulo, descripcion, 0, usuario_creo], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: `Recordatorio ha sido agregado exitosamente!`})
            }
        })
    });
} 