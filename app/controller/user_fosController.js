const db = require('../config/db.config.js');
const config = require('../config/config.js');
const Objuser_fos = db.user_fos; // Instance Objet de la class Temoignage
const Op = db.Sequelize.Op; // Création d'un Objet Operateur
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

exports.authenticate = (req, res) => {

    if (req.body.email == "said@mail.com" && req.body.password == "secret") {
        try {
            // création et envoie du token
            var token = jwt.sign({ email: req.body.email, password: req.body.password }, config.secret, {
                expiresIn: "1h" // expires in 1 hour
            });
            res.status(200).json({ token: token });

            /* --------------------------- hashage du password -------------------------- */

            bcrypt.hash(req.body['password'], 10, function (err, hash) {
                res.status(200).json({ token: token, password: hash });
            });

        }

        catch (err) {
            res.status(500).send("Error -> could_not_create_token");
        }
    }

    else {
        res.status(400).send("Error -> invalid_credentials");
    }

}

