import express from 'express';
import db from '../Database.mjs';

const router = express.Router();

// Create a new player
router.post('/', (req, res) => {
  db.Player.create({
    username: req.body.username,
  }).then(() => {
    res.send('test');
  });
});

router.post('/authenticate', (req, res) => {

});


export default router;
