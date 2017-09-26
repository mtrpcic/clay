import express from 'express';
import { Player } from '../Models';

const router = express.Router();

router.post('/users', (req, res) => {
    Player.create({
        username: req.body.username
    }).then(() => {
        
    });
});

export default router;