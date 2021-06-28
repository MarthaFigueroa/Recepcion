module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
      const { id } = req.params;
      const {objeto, descripcion, cantidad, id_importancia, id_categoria, activo, usuario_creo, usuario_modifico} = req.body;
      const query = `UPDATE tb_objetos SET objeto = ?, descripcion = ?, cantidad = ?, id_importancia = ?, id_categoria = ?, activo = ?, 
      usuario_creo = ?, usuario_modifico = ?, fecha_modifico = NOW() WHERE id = ?`;
      // console.log(categoria, usuario_creo);
      connection.query(query, [objeto, descripcion, cantidad, id_importancia, id_categoria, activo, usuario_creo, usuario_modifico, id], (ex,{rows}) => {
          if (ex) {
            console.log(ex);
            reject({msg: "Error en consulta en DB"})
          } else {
            console.log("Rows: ",rows);
            resolve({status: `Objeto con id: ${id} ha sido modificado exitosamente!`})
          }
      })
    })
}