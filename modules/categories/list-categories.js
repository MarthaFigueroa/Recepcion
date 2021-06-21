module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        
        const query = `SELECT * FROM tb_categorias`;

        connection.query(query, [], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en la consulta a la DB'});
            }else{
                console.log("Rows: ", rows);
                resolve({
                    data: rows,
                    msg: 'Listado de categorias exitosamente!'
                });
            }
        })
    })
}