const db = require('../config/db.config.js');
const ObjEmploi = db.Emploi; // Instance Objet de la class Emploi

exports.getEmploi = (req, res) => {

	ObjEmploi.findAndCountAll({
        attributes: ['id', 'titre','description','date_creation'],
		offset:0,limit:10


	}).then(Emploi => {

		res.status(200).json({
			Emploi:Emploi.rows
		});

		// console.log(req.headers['authorization']);
		console.log(req.body);
		console.log(req.headers);


	}).catch(err => {

	res.status(500).json({"Erreur":err});

	})// fin catch	

}

