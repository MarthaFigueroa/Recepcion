module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {categoria, usuario_creo} = req.body;
        const query = `INSERT INTO tb_categorias(categoria, activo, usuario_creo, fecha_creo)VALUES(?, ?, ?, NOW())`;
        console.log(categoria, usuario_creo);
        connection.query(query, [categoria, 1, usuario_creo], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: "Categoría creada exitosamente!"})
            }
        })
    })
}