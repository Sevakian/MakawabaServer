const express = require('express');
const dbGaming = require('../../db/dbGaming/dbGaming.js')
const router = express.Router();

//Games Konsole
router.get('/consoles', async(req, res, next) => {
    try{
        let results = await dbGaming.getConsoles()
        res.json(results);
    } catch(e){
        res.sendStatus(500);
    }
})

router.post('/newConsole', async(req, res, next) => {
    try {
        let results = await dbGaming.addConsole(req.body)
            res.json(results);
    } catch(e){
        res.sendStatus(500);
    }
}),

router.put('/updateConsole', async(req, res, next) => {
    try {
        let results = await dbGaming.updateConsole(req.body)
    res.json(results);

    } catch(e){
        res.sendStatus(500);
    }
})


module.exports = router;