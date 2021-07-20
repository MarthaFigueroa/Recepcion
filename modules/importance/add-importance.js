module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {tipo} = req.body;
        const query = `INSERT INTO tb_importancia (tipo) VALUES(?)`;
        console.log(tipo);
        connection.query(query, [tipo], (ex,{rows}) => {
            if (ex) {
              console.log(ex);
              reject({msg: "Error en consulta en DB"})
            } else {
              console.log("Rows: ",rows);
              resolve({status: "Nivel de Importancia creada exitosamente!"})
            }
        })
    })
}