let pool = require("./mysql-pool.js");

exports.query = function (query, data, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      connection.release();
      throw err;
    }
    connection.query(query, data, function (err, rows) {
      connection.release();
      if (!err) {
        callback(null, { rows: rows });
      }
    });
    connection.on("error", function (err) {
      throw err;
      return;
    });
  });
};


// exports.query = function (query, callback) {
//   pool.getConnection(function (err, connection) {
//     if(err){
//         // Error cuando se pierde la conexión con la db
//         if(err.code === 'PROTOCOL_CONNECTION_LOST'){
//             console.error('DATABASE CONNECTION WAS CLOSED');
//         }
//         // Comprobar cuantas conexiones tiene la base de datos.
//         if(err.code === 'ER_CON_COUNT_ERROR'){
//             console.error('DATABASE HAS TO MANY CONNECTIONS');
//         }
//         // La conexión con la base de datos fue rechazada, puede ser por errores en las credenciales
//         if(err.code === 'ECONNREFUSED'){
//             console.error('DATABASE CONNECTION WAS REFUSED');
//         }
//     }

//     if(connection) connection.release();
//     console.log('Db is Connected');
//     return;
//   });
// };