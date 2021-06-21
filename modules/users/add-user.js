
module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {usuario, pswd, nombres, apellidos, email, id_rol, session_time} = req.body;
        const query = `INSERT INTO tb_usuarios(usuario, pswd, nombres, apellidos, email, id_rol, session_time, habilitado, usuario_creo, fecha_creo)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        console.log(usuario, pswd, nombres, apellidos, email, id_rol, session_time);
        connection.query(query, [usuario, pswd, nombres, apellidos, email, id_rol, session_time, 1, "prueba", "2020-11-10"], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: "Usuario creado con éxito!"})
            }
        })
    });
} 