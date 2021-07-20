module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
      const { id } = req.params;

        const query = `UPDATE tb_objetos SET activo = ? WHERE id = ?`;
        // console.log(categoria, usuario_creo);
        connection.query(query, [1, id], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: `Objeto con id: ${id} ha sido activado exitosamente!`})
            }
        })
    })
}