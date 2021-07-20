module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
      const { id } = req.params;
      const {objeto, descripcion, cantidad, id_importancia, id_categoria, activo, usuario_modifico} = req.body;

      if(activo === 1){
        const query = `UPDATE tb_objetos SET objeto = ?, descripcion = ?, cantidad = ?, id_importancia = ?, id_categoria = ?, usuario_modifico = ?, fecha_modifico = NOW() WHERE id = ?`;
        // console.log(categoria, usuario_creo);
        connection.query(query, [objeto, descripcion, cantidad, id_importancia, id_categoria, usuario_modifico, id], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: `Objeto con id: ${id} ha sido modificado exitosamente!`})
            }
        })
      }else{
        const query = `UPDATE tb_objetos SET activo = ? WHERE id = ?`;
        // console.log(categoria, usuario_creo);
        connection.query(query, [activo, id], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: `Objeto con id: ${id} ha sido desactivado exitosamente!`})
            }
        })
      }
    })
}