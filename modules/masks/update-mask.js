module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
      const { id } = req.params;
      const {cantidad, tipo, descripcion} = req.body;
      const query = `UPDATE tb_mascarillas SET cantidad = ?, tipo = ?, descripcion = ? WHERE id = ?`;
      // console.log(categoria, usuario_creo);
      connection.query(query, [cantidad, tipo, descripcion, id], (ex,{rows}) => {
          if (ex) {
            console.log(ex);
            reject({msg: "Error en consulta en DB"})
          } else {
            console.log("Rows: ",rows);
            resolve({status: `Mascarilla con id: ${id} ha sido modificada exitosamente!`})
          }
      })
    })
}