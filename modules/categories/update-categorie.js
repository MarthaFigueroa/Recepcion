module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {categoria, usuario_modifico, activo} = req.body;
        const { id } = req.params;
        if(activo === 0){
          const query = `UPDATE tb_categorias SET activo = ? WHERE id = ?`;
          // console.log(categoria, usuario_creo);
          connection.query(query, [activo, id], (ex,{rows}) => {
              if (ex) {
                console.log(ex);
                reject({msg: "Error en consulta en DB"})
              } else {
                console.log("Rows: ",rows);
                resolve({status: `Categoria con id: ${id} ha sido deshabilitada exitosamente!`})
              }
          })
        }else{
          const query = `UPDATE tb_categorias SET categoria = ?, usuario_modifico = ?, fecha_modifico = NOW() WHERE id = ?`;
          console.log(categoria, usuario_modifico);
          connection.query(query, [categoria, usuario_modifico, id], (ex,{rows}) => {
              if (ex) {
                console.log(ex);
                reject({msg: "Error en consulta en DB"})
              } else {
                console.log("Rows: ",rows);
                resolve({status: `Categoría con id: ${id} ha sido modificada exitosamente!`})
              }
          })
        }
    })
}