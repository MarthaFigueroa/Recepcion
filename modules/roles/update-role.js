module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const { id } = req.params;
        const {rol} = req.body;
        const query = `UPDATE tb_rol SET rol = ? WHERE id = ?`;
        // console.log(categoria, usuario_creo);
        connection.query(query, [rol, id], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: `Rol con id: ${id} ha sido modificado exitosamente!`})
            }
        })
    });
} 