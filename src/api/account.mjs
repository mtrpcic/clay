import express from 'express';
import db from '../Database.mjs';

const router = express.Router();

// Create a new player
router.post('/', (req, res) => {
  const { username, password, email } = req.body;
  const player = db.Player.build({ username, password, email });
  
  player.save().then((p) => {
    res.send(p.toJSON());
  });
});

router.post('/authenticate', (req, res) => {
  const { username, password } = req.body;
  let isAuthenticated = false;

  db.Player.where({ username }).then(player => player.authenticate(password));
  res.send(isAuthenticated);
});


export default router;
