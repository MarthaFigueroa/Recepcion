module.exports = function({connection, req}){
    return new Promise((resolve, reject)=>{
        const {chart} = req.body;

        if(chart == null){
            const query = `SELECT * FROM tb_defectuosos`;
            connection.query(query, [], (ex, {rows})=>{
                if(ex){
                    console.log(ex);
                    reject({msg: 'Error en la consulta a la DB'});
                }else{
                    console.log("Rows: ", rows);
                    resolve({
                        data: rows,
                        msg: 'Listado de objetos defectuosos!'
                    });
                }
            })
        }else if(chart == 1){
            const query = `SELECT obj.objeto as objeto, SUM( def.cantidad ) as defectuosos FROM tb_defectuosos def, tb_objetos obj WHERE def.id_objeto = obj.id GROUP BY id_objeto`;
            connection.query(query, [], (ex, {rows})=>{
                if(ex){
                    console.log(ex);
                    reject({msg: 'Error en la consulta a la DB'});
                }else{
                    console.log("Rows: ", rows);
                    resolve({
                        data: rows,
                        msg: 'Total de objetos defectuosos por nombre!'
                    });
                }
            })
        }
    })
}