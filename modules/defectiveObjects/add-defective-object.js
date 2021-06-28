
module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {id_objeto, motivo, cantidad, usuario_creo} = req.body;
        const query = `INSERT INTO tb_defectuosos(id_objeto, motivo, cantidad, usuario_creo, fecha_creo) VALUES(?, ?, ?, ?, NOW())`;
        // console.log(objeto, descripcion, cantidad, id_importancia, id_categoria, activo, usuario_creo, usuario_modifico, usuario_elimino, fecha_creo, fecha_modifico, fecha_elimino);
        connection.query(query, [id_objeto, motivo, cantidad, usuario_creo], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: "Objeto defectuoso creado con éxito!"})
            }
        })
    });
} 