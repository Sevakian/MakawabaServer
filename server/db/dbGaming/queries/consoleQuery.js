const dbConnection = require('./../dbConnect')

dbConnection.addConsole = (value) => {
    
    let name = value.toConsole.name
    let bild = value.toConsole.bild
    let hersteller = value.toConsole.hersteller
    let erscheinungsjahr = value.toConsole.jahr
    let generation = value.toConsole.gen
    let status = value.toConsole.status
    let typ = value.toConsole.typ
    let verkauft = value.toConsole.verkauft
    let text = value.toConsole.text

    if(bild == "null"){
        bild = null;
    }
    if(hersteller == "null"){
        hersteller = null;
    }
    if(erscheinungsjahr == "null"){
        erscheinungsjahr = null;
    }
    if(generation == "null"){
        generation = null;
    }
    if(status == "null"){
        status = null;
    }
    if(typ == "null"){
        typ = null;
    }
    if(verkauft == "null"){
        verkauft = null;
    }
    if(text == "null"){
        text = null;
    }

    return new Promise((resolve, reject) => {

        dbConnection.query(`INSERT INTO konsole (konsolename, bild, hersteller, erscheinungsjahr, generation, status, typ, anzahlverkauft, text) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                [name, bild, hersteller, erscheinungsjahr, generation, status, typ, verkauft, text], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results.insertId);        
        })
    })
}

dbConnection.updateConsole = (value) => {
    console.log(value)
    let id = value.toConsole.id
    let name = value.toConsole.name
    let bild = value.toConsole.bild
    let hersteller = value.toConsole.hersteller
    let erscheinungsjahr = value.toConsole.jahr
    let generation = value.toConsole.gen
    let status = value.toConsole.status
    let typ = value.toConsole.typ
    let verkauft = value.toConsole.verkauft
    let text = value.toConsole.text

    if(bild == "null"){
        bild = null;
    }
    if(hersteller == "null"){
        hersteller = null;
    }
    if(erscheinungsjahr == "null"){
        erscheinungsjahr = null;
    }
    if(generation == "null"){
        generation = null;
    }
    if(status == "null"){
        status = null;
    }
    if(typ == "null"){
        typ = null;
    }  
    if(verkauft == "null"){
        verkauft = null;
    }
    if(text == "null"){
        text = null;
    }

    return new Promise((resolve, reject) => {
        dbConnection.query(`UPDATE konsole
                            SET konsolename = ?, bild = ?, hersteller = ?, erscheinungsjahr = ?, generation = ?, status = ?, typ = ?, anzahlverkauft = ?, text = ?
                            WHERE Konsoleid = ?`, 
                            [name, bild, hersteller, erscheinungsjahr, generation, status, typ, verkauft, text, id], (err, results) => {
            if(err){
    
                return reject(err);
            }
            return resolve(results);
            
        })
    })
}


dbConnection.getConsoles = () => {
    return new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM konsole ORDER BY Typ DESC, Erscheinungsjahr DESC`, (err, results) => {
        if(err){
            return reject(err);
        }
        return resolve(results);

        })
    })
}


module.exports = dbConnection