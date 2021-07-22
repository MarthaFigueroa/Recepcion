module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const { id } = req.params;
        const { usuario_elimino } = req.body;
        // const query = `DELETE FROM tb_recordatorios WHERE id = ?`;
        const query = `UPDATE tb_recordatorios SET usuario_elimino = ?, fecha_elimino = NOW() WHERE id = ?`;

        connection.query(query, [usuario_elimino, id], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en consulta en DB'});
            }else{
                console.log("Rows: ", rows);
                resolve({msg: `El recordatorio con id ${id} ha sido eliminado correctamente`});
            }
        })
    })
}