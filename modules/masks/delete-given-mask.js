module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const { id } = req.params;
        // const query = `DELETE FROM tb_entrega_mascarillas WHERE id = ?`;
        const {usuario_elimino, fecha_elimino} = req.body;
        const query = `UPDATE tb_entrega_mascarillas SET usuario_elimino = ?, fecha_elimino = ? WHERE id = ?`;

        connection.query(query, [usuario_elimino, fecha_elimino, id], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en consulta en DB'});
            }else{
                console.log("Rows: ", rows);
                resolve({msg: `La mascarilla entregada con id ${id} ha sido eliminada correctamente`});
            }
        })
    })
}