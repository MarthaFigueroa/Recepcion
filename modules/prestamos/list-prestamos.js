module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
    const { start_date, end_date, asc} = req.body;

    if(start_date == null || end_date == null){
        const query = `SELECT * FROM tb_prestamos`;

        connection.query(query, [], (ex, {rows})=>{
            if(ex){
                console.log(ex);
                reject({msg: 'Error en la consulta a la DB'});
            }else{
                let arrObj = [];
                rows.forEach(row => {
                    arrObj.push(row.id_objeto)
                });
                console.log("Rows: ", arrObj);
                resolve({
                    data: rows,
                    msg: 'Listado de prestamos!'
                });
            }
        })
    }else{
        // const query = `SELECT * FROM tb_prestamos WHERE hora_prestamo BETWEEN ? AND ?`;
        // const query2 = `SELECT COUNT(id_objeto) FROM tb_prestamos WHERE id_objeto = ?`;
        // const query = `SELECT COUNT(id_objeto) as prestamos FROM tb_prestamos WHERE hora_prestamo BETWEEN ? AND ?`
        if(asc == 1){
            const query = `SELECT obj.objeto as objeto, COUNT( id_objeto ) as prestamos FROM tb_prestamos prest, tb_objetos obj WHERE prest.id_objeto = obj.id AND hora_prestamo BETWEEN ? AND ? GROUP BY id_objeto ASC`
            console.log(start_date, end_date);
            connection.query(query, [start_date, end_date], (ex, {rows})=>{
                if(ex){
                    console.log(ex);
                    reject({msg: 'Error en la consulta a la DB'});
                }else{
                    resolve({
                        data: rows,
                        msg: `Listado de prestamos entre las fechas ${start_date} y ${end_date} ordenado ascendentemente!`
                    });
                }
            })
        }else if (asc == 0){
            const query = `SELECT obj.objeto as objeto, COUNT( id_objeto ) as prestamos FROM tb_prestamos prest, tb_objetos obj WHERE prest.id_objeto = obj.id AND hora_prestamo BETWEEN ? AND ? GROUP BY id_objeto DESC`
            console.log(start_date, end_date);
            connection.query(query, [start_date, end_date], (ex, {rows})=>{
                if(ex){
                    console.log(ex);
                    reject({msg: 'Error en la consulta a la DB'});
                }else{
                    resolve({
                        data: rows,
                        msg: `Listado de prestamos entre las fechas ${start_date} y ${end_date} ordenado descendentemente!`
                    });
                }
            })
        }
        
    }
    })
}