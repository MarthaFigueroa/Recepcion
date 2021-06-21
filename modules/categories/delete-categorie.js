module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const { id } = req.params;
        const {usuario_elimino, fecha_elimino} = req.body;
        // const query = `DELETE FROM tb_categorias WHERE id = ?`;
        const query = `UPDATE tb_categorias SET activo = ?, usuario_elimino = ?, fecha_elimino = ? WHERE id = ?`;

        connection.query(query, [0, usuario_elimino, fecha_elimino, id], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en consulta en DB'});
            }else{
                console.log("Rows: ", rows);
                resolve({msg: `La categoría con id ${id} ha sido eliminada correctamente`});
            }
        })
    })
}