const dbConnection = require('./../dbConnect')

dbConnection.getTables = () => {
    return new Promise((resolve, reject) => {
        dbConnection.query('SHOW tables where tables_in_calendar not like "verwendung"', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

dbConnection.addTable = (value) => {
    let table = value.newTable
    return new Promise((resolve, reject) => {
        dbConnection.query(`CREATE TABLE ${table} (
            datum_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            datum datetime NOT NULL,
            title Varchar(30) DEFAULT NULL,
            text Varchar(300) DEFAULT NULL,
            verwendung_id int(10), FOREIGN KEY(verwendung_id) REFERENCES verwendung(verwendung_id)
          )`, 
            (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = dbConnection
