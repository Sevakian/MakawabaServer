const express = require('express');
const dbCalendar = require('../../db/dbCalendar/dbCalendar.js')
const router = express.Router();

router.get('/tables', async(req, res, next) => {
    try {
        let results = await dbCalendar.getTables();
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

// Neue Tabelle anlegen
router.post('/tables/newTable', async(req, res, next) => {
    try {
        let results = await dbCalendar.addTable(req.body);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    } 
})

// router.put('/tables/updateTable', async (req, res, next) => {
//     try {
//         let results = await dbCalendar.updateTable(req.body);
//         res.json(results);
//     } catch(e){
//         console.log(e);
//         res.sendStatus(500);
//     } 
// })

// router.delete('/tables/dropTable', async (req, res, next) => {
//     try {
//         let results = await dbCalendar.dropTable(req.body);
//         res.json(results);
//     } catch(e){
//         console.log(e);
//         res.sendStatus(500);
//     } 
// })

module.exports = router;