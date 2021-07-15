module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
      const { id } = req.params;
      const {nombres, apellidos, dni, id_mascarilla, cantidad} = req.body;
      const query = `UPDATE tb_entrega_mascarillas SET nombres = ?, apellidos = ?, dni = ?, id_mascarilla = ?, cantidad = ? WHERE id = ?`;
      // console.log(categoria);
      connection.query(query, [nombres, apellidos, dni, id_mascarilla, cantidad, id], (ex,{rows}) => {
          if (ex) {
            console.log(ex);
            reject({msg: "Error en consulta en DB"})
          } else {
            console.log("Rows: ",rows);
            resolve({status: `Mascarilla entregada con id: ${id} ha sido modificada exitosamente!`})
          }
      })
    })
}