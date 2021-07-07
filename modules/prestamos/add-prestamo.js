module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {nombres, apellidos, email, dni, id_objeto, motivo, firma, tiempo_prestamo, hora_prestamo, hora_devolucion, 
          usuario_creo} = req.body;
        //INSERT INTO tb_prestamos (nombres, apellidos, email, dni, id_objeto, motivo, firma, tiempo_prestamo, hora_prestamo, hora_devolucion, usuario_creo, usuario_cerro) VALUES ("Martha", "Márquez Figueroa", "martha.marquez@mail.com", "Martha", 9, "Uso del ascensor", 1, "Martha", "10", "2020-11-10", "2020-11-10", "Maria", "Maria")
        const query = `INSERT INTO tb_prestamos (nombres, apellidos, email, dni, id_objeto, motivo, devuelto, firma, tiempo_prestamo, hora_prestamo, hora_devolucion, usuario_creo) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)`;
        console.log(nombres, apellidos, email, dni, id_objeto, motivo, firma, tiempo_prestamo, usuario_creo);
        connection.query(query, [nombres, apellidos, email, dni, id_objeto, motivo, 0, firma, tiempo_prestamo, hora_devolucion, usuario_creo], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: "Prestamo creado con éxito!"})
            }
        })
    });
} 