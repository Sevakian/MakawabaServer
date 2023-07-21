const dbConnection = require('./../dbConnect')

dbConnection.allDates = (table) => {
    return new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM ${table}`, (err, results) => {
            if(err){
                console.log(err)
                return reject(err);
            }
            return resolve(results);
        });
    });
};

dbConnection.datesForHour = (table, hour) => {
    return new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM ${table} WHERE Hour(datum) = ${hour}`, (err, results) => {
            if(err){
                console.log(err);
            }
            return resolve(results)
        })
        
    })
}

dbConnection.addDate = (table, value) => {
    let date = value.toDate.date
    let text = value.toDate.text
    if(text == 'NULL'){
        text = null
    }
    return new Promise((resolve, reject) => {
        dbConnection.query(`INSERT INTO ${table} (datum, text) VALUES (?, ?)`, [date, text], (err, results) => {
            if(err){
                console.log(err)
                return reject(err);
            }
            
            return resolve(results);
        })
    })
}

dbConnection.updateDate = (table, value) => {
    let id = value.toDate.id
    let date = value.toDate.date
    let text = value.toDate.text

    if(id == ""){
        return
    }
    if(text == 'NULL'){
        text = null
    }

    return new Promise((resolve, reject) => {
        dbConnection.query(`UPDATE ${table} SET datum = ?, text = ? WHERE datum_id = ?`, [date, text, id], (err, results) => {
            if(err){
                console.log(err)
                return reject(err);
            }
            
            return resolve(results);
        })
    })
}

dbConnection.deleteDate = (table, value) => {
    let id = value.toId 
    return new Promise((resolve, reject) => {
        dbConnection.query(`DELETE FROM ${table} WHERE datum_id = ?`, [id], (err, results) => {
            if(err){
                console.log(err)
                return reject(err);
            }  
            return resolve(results);
        })
    })
}

module.exports = dbConnection
