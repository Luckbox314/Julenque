import User from "../data/user";

const game_manager = require("../data/game_manager");

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/:gameid", function(req, res, next){
  const game_id = req.params.gameid;
  const name = req.query.name;
  const game = game_manager.games[game_id];
  const player = new User(name);
  player.setGameID(game_id);
  game.addUser(player);
  res.status(200).send("OK");
});

module.exports = router;
