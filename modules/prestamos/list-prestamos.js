module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
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
                    msg: 'Listado de prestamos!',
                    arrObj: arrObj
                });
            }
        })
    })
}