module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {chart, start_date, end_date, asc} = req.body;

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
            if(asc == 1){
                const query = `SELECT mask.tipo AS mascarilla, SUM( givMask.cantidad ) AS entregadas, nombres FROM
                tb_mascarillas mask, tb_entrega_mascarillas givMask WHERE givMask.id_mascarilla = mask.id AND 
                givMask.fecha_creo BETWEEN ? AND ? GROUP BY nombres ORDER BY entregadas ASC`;
                console.log(start_date, end_date);
                connection.query(query, [start_date, end_date], (ex, {rows})=>{
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
            }else if (asc == 0){
                const query = `SELECT mask.tipo AS mascarilla, SUM( givMask.cantidad ) AS entregadas, nombres FROM
                tb_mascarillas mask, tb_entrega_mascarillas givMask WHERE givMask.id_mascarilla = mask.id AND 
                givMask.fecha_creo BETWEEN ? AND ? GROUP BY nombres ORDER BY entregadas DESC`;
                console.log(start_date, end_date);
                connection.query(query, [start_date, end_date], (ex, {rows})=>{
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
        }
    })
}