const authJwt = require('../middleware/verifyJwtToken');
const Temoignage = require('../controller/TemoignageController');
const user_fos = require('../controller/user_fosController');
const Emploi = require('../controller/EmploiController');

module.exports = function(app) {

	app.post('/api/login',user_fos.authenticate);
	app.post('/api/temoignages',[authJwt.verifyToken],Temoignage.getAllTemoignage);
	app.post('/api/addUserFo',[authJwt.verifyToken],Temoignage.addUserFo);
	app.post('/api/data',Emploi.getEmploi);
	
	app.use(function(req, res, next)
  {
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page introuvable !');

  });

}


