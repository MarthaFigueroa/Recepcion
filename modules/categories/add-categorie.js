module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {categoria, usuario_creo} = req.body;
        const query = `INSERT INTO tb_categorias(categoria, activo, usuario_creo, usuario_modifico, usuario_elimino, fecha_creo, fecha_modifico, fecha_elimino)VALUES(?, ?, ?, ?, ?, ?, ?)`;
        console.log(categoria, usuario_creo);
        connection.query(query, [categoria, 1, usuario_creo, "NULL", "NULL", "2020-11-10", "2020-11-10", "2020-11-10"], (ex,{rows}) => {
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