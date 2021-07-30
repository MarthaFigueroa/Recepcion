module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {chart} = req.body;

        if(chart == null){
        const query = `SELECT * FROM tb_entrega_mascarillas`;
        console.log("gg");
        connection.query(query, [], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en la consulta a la DB'});
            }else{
                console.log("Rows: ", rows);
                resolve({
                    data: rows,
                    msg: 'Listado de mascarillas!'
                });
            }
        })
    }else if(chart == 1){
        const query = `SELECT mask.tipo AS mascarilla, SUM( givMask.cantidad ) AS entregadas, nombres FROM 
        tb_mascarillas mask, tb_entrega_mascarillas givMask WHERE givMask.id_mascarilla = mask.id GROUP BY nombres`;
        connection.query(query, [], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en la consulta a la DB'});
            }else{
                console.log("Rows: ", rows);
                resolve({
                    data: rows,
                    msg: 'Total de mascarillas entregadas por nombre!'
                });
            }
        })
    }
    })
}