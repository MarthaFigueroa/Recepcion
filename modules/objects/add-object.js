
module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {objeto, descripcion, cantidad, id_importancia, id_categoria, activo, usuario_creo, usuario_modifico, usuario_elimino, fecha_creo, fecha_modifico, fecha_elimino} = req.body;
        const query = `INSERT INTO tb_objetos(objeto, descripcion, cantidad, id_importancia, id_categoria, activo, usuario_creo, usuario_modifico, usuario_elimino, fecha_creo, fecha_modifico, fecha_elimino)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        // console.log(objeto, descripcion, cantidad, id_importancia, id_categoria, activo, usuario_creo, usuario_modifico, usuario_elimino, fecha_creo, fecha_modifico, fecha_elimino);
        connection.query(query, [objeto, descripcion, cantidad, id_importancia, id_categoria, activo, usuario_creo, usuario_modifico, usuario_elimino, fecha_creo, fecha_modifico, fecha_elimino], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: "Objeto creado con éxito!"})
            }
        })
    });
} 