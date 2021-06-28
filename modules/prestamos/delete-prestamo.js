module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const { id } = req.params;
        const {usuario_cerro} = req.body;
        // const query = `DELETE FROM tb_prestamos WHERE id = ?`;
        const query = `UPDATE tb_prestamos SET devuelto = ?, hora_devolucion = NOW(), usuario_cerro = ?  WHERE id = ?`;
        console.log(usuario_cerro);
        connection.query(query, [1, usuario_cerro, id], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en consulta en DB'});
            }else{
                console.log("Rows: ", rows);
                resolve({msg: `El préstamo con id ${id} ha sido eliminado correctamente`});
            }
        })
    })
}