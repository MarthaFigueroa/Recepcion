module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
    const { start_date, end_date} = req.body;

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
        const query = `SELECT * FROM tb_prestamos WHERE hora_prestamo BETWEEN ? AND ?`;
        console.log(start_date, end_date);
        connection.query(query, [start_date, end_date], (ex, {rows})=>{
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
                    msg: `Listado de prestamos en las fechas ${start_date} AND ${end_date}!`
                });
            }
        })
    }
    })
}