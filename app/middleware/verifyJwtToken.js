const jwt = require('../../node_modules/jsonwebtoken');
const config = require('../config/config.js');

verifyToken = (req, res, next) => {
	

	if (!req.headers['authorization']){
		return res.status(403).send({ 
			auth: false, message: 'No token provided.' 
		});
	}

	else
	{
	const token = req.headers['authorization'].split(" ")[1];

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
					message: 'Fail to Authentication. Error -> ' + err 
				});
		}
		// console.table(decoded); // le token decodé
		next();
	});

	}// fin else

	
}

const authJwt = {};
authJwt.verifyToken = verifyToken;

module.exports = authJwt;