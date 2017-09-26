import { Player } from '../Models';

let routes = {
    'POST /users': (req, res) => {
        Player.create({
            username: req.body.username,

        }).then(() => {
            
        });
    },

    'POST /authenticate': (req, res) => {
        res.send("POST to authenticate");
    },

    'GET /test': (req, res) => {
        res.send("test endpoint");
    }
};

export default routes;