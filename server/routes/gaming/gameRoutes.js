const express = require('express');
const dbGaming = require('../../db/dbGaming/dbGaming.js')
const router = express.Router();

router.get('/games', async(req, res, next) => {
    try{
        let games = await dbGaming.getGame()
    
        for(let i = 0; i < games.length; i++){
            let congames = await dbGaming.getConsoleForGame(games[i].Spielid)
            games[i]['consoles'] = congames;
        }
        res.json(games);
    } catch(e){
        console.log(e)
        res.sendStatus(500);
    }
})

router.post('/newGame', async(req, res, next) => {
    try {
        let results = await dbGaming.addGame(req.body)
            res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}),

router.put('/updateGame', async(req, res, next) => {
    try {
        await dbGaming.deleteConsoleFromGame(req.body);
        let results = await dbGaming.updateGame(req.body)
        res.json(results);

    } catch(e){
        res.sendStatus(500);
    }
})

module.exports = router;