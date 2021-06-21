module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const { id } = req.params;
        const {usuario_elimino, fecha_elimino} = req.body;
        // const query = `DELETE FROM tb_objetos WHERE id = ?`;
        const query = `UPDATE tb_objetos SET activo = ?, usuario_elimino = ?, fecha_elimino = ? WHERE id = ?`;

        connection.query(query, [0, usuario_elimino, fecha_elimino, id], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en consulta en DB'});
            }else{
                console.log("Rows: ", rows);
                resolve({msg: `El objeto con id ${id} ha sido eliminado correctamente`});
            }
        })
    })
}