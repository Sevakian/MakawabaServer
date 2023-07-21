const express = require('express');
const dbTimestats = require('../../db/dbTimestats/dbTimestats')
const router = express.Router();

router.get('/:table', async (req, res, next) => {
    try {   
        let results = await dbTimestats.allDates(req.params.table);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

// Neues Datum für Tabelle
router.post('/:table/newDate', async(req, res, next) => {
    try {
        let results = await dbTimestats.addDate(req.params.table, req.body);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    } 
})

router.put('/:table/updateDate', async(req, res, next) => {
    try {
        let results = await dbTimestats.updateDate(req.params.table, req.body);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    } 
})

router.delete('/:table/deleteDate', async(req, res, next) => {
    try {
        let results = await dbTimestats.deleteDate(req.params.table, req.body);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    } 
})

module.exports = router;