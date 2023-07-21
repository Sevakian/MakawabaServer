const dbConnection = require('./../dbConnect')

dbConnection.getGame = () => {
    return new Promise((resolve, reject) => {
        // `SELECT * FROM spiele ORDER BY  Spielid DESC`
        // SELECT * FROM spiele ORDER BY Erscheinungsjahr
        dbConnection.query(`SELECT * FROM spiele`, (err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results);
        })

    })
}

dbConnection.addGame = (value) => {
    let name = value.toGame.name
    let serie = value.toGame.serie
    let genre = value.toGame.genre
    let jahr = value.toGame.jahr
    let entwickler = value.toGame.entwickler
    let dimension = value.toGame.dimension
    let bild = value.toGame.bild
    let status = value.toGame.status
    let size = value.toGame.size
    let verkauft = value.toGame.verkauft
    let text = value.toGame.text
    let consoles = value.toGame.consoles

    if(serie == "null"){ serie = null; }
    if(genre == "null"){ genre = null;}
    if(jahr == "null"){jahr = null;}
    if(entwickler == "null"){entwickler = null;}
    if(dimension == "null"){dimension = null;}
    if(bild == "null"){bild = null;}
    if(status == "null"){status = null;} 
    if(size == "null"){size = null;}
    if(verkauft == "null"){verkauft = null;}
    if(text == "null"){text = null;}
    if(consoles == "null"){consoles = null;}

    return new Promise((resolve, reject) => {
        dbConnection.query(`INSERT INTO spiele (spielename, spieleserie, genre, erscheinungsjahr, entwickler, dimension, bild, status, größegb, anzahlverkauft, text) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                            [name, serie, genre, jahr, entwickler, dimension, bild, status, size, verkauft, text], (err, results) => {
            if(err){
                return reject(err);
            }
            if(consoles != null){
                let idvalues = [];
                for(let i = 0; i < consoles.length; i++){
                    idvalues.push([results.insertId , parseInt(consoles[i])])
                } 
                dbConnection.query(`INSERT INTO spielekonsole (spielid, konsoleid) VALUES ?`, [idvalues], (err, results) => {
                    if(err){
                        return reject (err);
                    }
                    return resolve(results);
                })
            }
            return resolve(results);
            
        })
    })
}

dbConnection.updateGame = (value) => {
    let id = value.toGame.id
    let name = value.toGame.name
    let serie = value.toGame.serie
    let genre = value.toGame.genre
    let jahr = value.toGame.jahr
    let entwickler = value.toGame.entwickler
    let dimension = value.toGame.dimension
    let bild = value.toGame.bild
    let status = value.toGame.status
    let size = value.toGame.size
    let verkauft = value.toGame.verkauft
    let text = value.toGame.text
    let consoles = value.toGame.consoles

    if(serie == "null"){ serie = null; }
    if(genre == "null"){ genre = null;}
    if(jahr == "null"){jahr = null;}
    if(entwickler == "null"){entwickler = null;}
    if(dimension == "null"){dimension = null;}
    if(bild == "null"){bild = null;}
    if(status == "null"){status = null;} 
    if(size == "null"){size = null;}
    if(verkauft == "null"){verkauft = null;}
    if(text == "null"){text = null;}
    if(consoles == "null"){consoles = null;}

    
    return new Promise((resolve, reject) => {
        dbConnection.query(`UPDATE spiele
                            SET spielename = ?, spieleserie = ?, genre = ?, erscheinungsjahr = ?, entwickler = ?, dimension = ?, bild = ?, status = ?, größegb = ?, anzahlverkauft = ?, text = ?
                            WHERE spielid = ?`, 
                            [name, serie, genre, jahr, entwickler, dimension, bild, status, size, verkauft, text, id], (err, results) => {
            if(err){
                console.log(err)
                return reject(err);
            }
            if(consoles != null){
                let idvalues = [];
                for(let i = 0; i < consoles.length; i++){
                    idvalues.push([id , parseInt(consoles[i])])
                } 
                // console.log(idvalues);
                dbConnection.query(`INSERT INTO spielekonsole (spielid, konsoleid) VALUES ?`, [idvalues], (err, results) => {
                    if(err){
                        // console.log(err);
                        return reject (err);
                    }
                    return resolve(results);
                })
            }
            return resolve(results);
            
        })
    })    
}

dbConnection.getConsoleForGame = (id) => {

    return new Promise((resolve, reject) => {

            let consoles = [];
            dbConnection.query(`SELECT konsoleid FROM spielekonsole WHERE spielid = ?`, id, (err, res) => {
                if(err){
                    reject(err)
                }      
                if(res.length != 0){
                    for(let i = 0; i < res.length; i++){
                        consoles.push(parseInt(Object.values(res[i])))
                    }
                }
                resolve(consoles);

            })  
    })
}

dbConnection.deleteConsoleFromGame = (value) => {
    let id = value.toGame.id
    return new Promise((resolve, reject) => {
        dbConnection.query(`DELETE FROM spielekonsole
                            WHERE spielid = ?`, [id], (err, results) => {
            if(err){
                // console.log(err);
                return reject(err);
            }
            resolve(results)

        })
    })
}


module.exports = dbConnection