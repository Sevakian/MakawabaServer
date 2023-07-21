const express = require('express');
const dbTimestats = require('../../db/dbTimestats/dbTimestats')
const router = express.Router();


router.get('/tables', async (req, res, next) => {
    try {
        let results = await dbTimestats.getTables()
        res.json(results);

    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

// Neue Tabelle
router.post('/tables/newTable', async (req, res, next) => {
    try {
        let results = await dbTimestats.addTable(req.body);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    } 
})

router.put('/tables/updateTable', async (req, res, next) => {
    try {
        let results = await dbTimestats.updateTable(req.body);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    } 
})

router.delete('/tables/dropTable', async (req, res, next) => {
    try {
        let results = await dbTimestats.dropTable(req.body);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    } 
})

module.exports = router;