const dbConnection = require('./../dbConnect')

dbConnection.getTables = () => {
    return new Promise((resolve, reject) => {
        dbConnection.query('SHOW tables', (err, results) => {
            if(err){
                console.log(err)
                return reject(err);
            }
            return resolve(results);
        });
    });
};

dbConnection.addTable = (value) => {
    let table = value.newTable
    return new Promise((resolve, reject) => {
        dbConnection.query(`CREATE TABLE ${table} (datum_id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                                        datum datetime NOT NULL,
                                        text varchar(50) DEFAULT NULL)`, 
            (err, results) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dbConnection.updateTable = (value) => {
    let selectedTable = value.inTable.selectedTable;
    let newName = value.inTable.newName;
    return new Promise((resolve, reject) => {
        dbConnection.query(`ALTER TABLE ${selectedTable}
                            RENAME TO ${newName};`, 
            (err, results) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dbConnection.dropTable = (value) => {
    let table = value.table
    return new Promise((resolve, reject) => {
        dbConnection.query(`DROP TABLE ${table}`, (err, results) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = dbConnection
