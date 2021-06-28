module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
      const { id } = req.params;
      const {id_objeto, motivo, cantidad, usuario_creo} = req.body;
      const query = `UPDATE tb_defectuosos SET id_objeto = ?, motivo = ?, cantidad = ?, usuario_creo = ? WHERE id = ?`;
      // console.log(categoria, usuario_creo);
      connection.query(query, [id_objeto, motivo, cantidad, usuario_creo, id], (ex,{rows}) => {
          if (ex) {
            console.log(ex);
            reject({msg: "Error en consulta en DB"})
          } else {
            console.log("Rows: ",rows);
            resolve({status: `Objeto defectuoso con id: ${id} ha sido modificado exitosamente!`})
          }
      })
    })
}