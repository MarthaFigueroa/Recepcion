module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const { id } = req.params;
        const query = `SELECT * FROM tb_recordatorios WHERE id = ?`;

        connection.query(query, [id], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en la consulta a la DB'});
            }else{
                console.log("Rows: ", rows);
                resolve({
                    data: rows,
                    msg: `Datos del recordatorio con id: ${id}!`
                });
            }
        })
    })
}