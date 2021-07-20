module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {tipo} = req.body;
        const { id } = req.params;
        const query = `UPDATE tb_importancia SET tipo = ? WHERE id = ?`;
        console.log(tipo);
        connection.query(query, [tipo, id], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: `Nivel de Importancia con id: ${id} ha sido modificado exitosamente!`})
            }
        })
    })
}