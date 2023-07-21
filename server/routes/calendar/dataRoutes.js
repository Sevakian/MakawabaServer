const express = require('express');
const dbCalendar = require('../../db/dbCalendar/dbCalendar.js')
const router = express.Router();

router.get('/:table', async (req, res, next) => {
    try {
        let calendar = await dbCalendar.allDates(req.params.table);
        res.json({calendar});
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

// Neues Datum für eine Tabelle 
router.post('/:table/newDate', async(req, res, next) => {
    try {
        //req.params.table, req.params.date, req.params.title, req.params.text, req.params.verwendung
        let results = await dbCalendar.addDate(req.params.table, req.body);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    } 
})

//update 
router.put('/:table/updateDate', async(req, res, next) => {
    try {
        // req.params.table, req.params.id, req.params.title, req.params.text, req.params.verwendung
        let results = await dbCalendar.updateDate(req.params.table, req.body)
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

//delete
router.delete('/:table/deleteDate/', async (req, res, next) => {
    try {
        //req.params.table, req.params.id
        let results = await dbCalendar.deleteDate(req.params.table, req.body)
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }    
})


router.get('/verwendung', async(req, res, next) => {
    try {
        let results = await dbCalendar.getVerwendung();
        console.log(results);
        res.json(results);

    } catch(e){
        console.log(e);
        res.sendStatus(500); 
    }
}),

module.exports = router;