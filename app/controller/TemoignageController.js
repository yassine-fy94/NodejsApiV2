const db = require('../config/db.config.js');
const ObjTemoinage = db.Temoinage; // Instance Objet de la class Temoignage
const Objcompanies = db.companies; // Instance Objet de la class companies
const Op = db.Sequelize.Op; // Création d'un Objet Operateur

exports.getAllTemoignage = (req, res) => {
	if (req.headers['company-token'] && req.body.page) {
		var limit = parseFloat(9);
		var offset = parseFloat(limit * (req.body.page - 1));
		Objcompanies.findOne({
			attributes:
				[
					'id'
				],
			where:
			{
				token: req.headers['company-token']
			}
		}).then(data => {
			ObjTemoinage.findAndCountAll({
				where: {
					company_id: data.id,
					deleted_at: {
						[Op.eq]: null
					}
				},
				offset: offset, limit: limit
			}).then(temoingnage => {
				res.status(200).json({
					Nombre_Enregistrement_Total: temoingnage.count,
					Pages: Math.ceil(temoingnage.count / limit),
					Enregistrement_Afficher: limit,
					Enregistrement: temoingnage.rows
				});
			}).catch(err => {
				res.status(500).json({ "Erreur": err });
			})// fin catch
		}).catch(err => {
			res.status(500).json({ "Erreur": err });
		})// fin catch
	}// fin if
	else {
		res.status(500).json({ "Erreur": "Invalide Request headers" });
	}
}

exports.addUserFo = (req, res) => {
	// Save Temeoignage loop to Database
	const date = new Date().toISOString().slice(0, 19);
	for (var i = 0; i < 1000; i++) {
		ObjTemoinage.create({
			id: '0',
			company_id: '1',
			name: 'name',
			description: 'description',
			contexte: 'contexte',
			defi: 'defi',
			defi_details: 'defi_details',
			apports: 'apports',
			difficultes: 'difficultes',
			impacts_metiers: 'impacts_metiers',
			impacts_competences: 'impacts_competences',
			createdAt: date,
			updatedAt: date
		}).then(user => {
		}).catch(err => {
			res.status(500).send("Fail! Error -> " + err);
		})
	}
	res.status(200).json({ message: "ok" });
}
