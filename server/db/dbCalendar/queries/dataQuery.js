const dbConnection = require('./../dbConnect')

dbConnection.allDates = (table) => {
    return new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM ${table}`, (err, results) => {
            if(err){
                return reject(err);
            }
        
            return resolve(results);
        });
    });
};

dbConnection.addDate = (table, value) => {
    let date = value.toDate.date
    let title = value.toDate.title
    let text = value.toDate.text
    let verwendung = value.toDate.verwendung

    if(title == "null"){
        title = null;
    }
    if(text == "null"){
        text = null;
    }
    if(verwendung == "null"){
        verwendung = null;
    }
    return new Promise((resolve, reject) => {
        dbConnection.query(`INSERT INTO ${table} (datum, title, text, verwendung_id) VALUES (?, ?, ?, ?)`, [date, title, text, verwendung], (err, results) => {
            if(err){
                return reject(err);
            }
            // console.log(results);
            // console.log(results.insertId);
            return resolve(results.insertId);        
        })
    })
}

dbConnection.updateDate = (table, value) => {
    let id = value.toDate.id
    let date = value.toDate.date
    let title = value.toDate.title
    let text = value.toDate.text
    let verwendung = value.toDate.verwendung

    if(title == "null"){
        title = null;
    }
    if(text == "null"){
        text = null;
    }
    if(verwendung == "null"){
        verwendung = null;
    }   
    return new Promise((resolve, reject) => {
        dbConnection.query(`UPDATE ${table} 
                            SET datum = ?, title = ?, text = ?, verwendung_id = ? 
                            WHERE datum_id = ?`, [date, title, text, verwendung, id], (err, results) => {
            if(err){
                return reject(err);
            }
            // console.log(results);
            return resolve(results);
            
        })
    })
}

dbConnection.deleteDate = (table, value) => {
    let id = value.toId
    return new Promise((resolve, reject) => {

        dbConnection.query(`DELETE FROM ${table} 
                            WHERE datum_id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            // console.log(results);
            return resolve(results);
            
        })
    })    
}

dbConnection.getVerwendung = () => {
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM verwendung', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = dbConnection
