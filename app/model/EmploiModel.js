module.exports = function (sequelize, Sequelize) {
    const Emploi = sequelize.define('emplois', {

        id:{ primaryKey: true,type:Sequelize.INTEGER,field: 'id'},
        titre:{type: Sequelize.STRING, field: 'titre'},
        description:{type: Sequelize.STRING, field: 'description'},
        date_creation:{type: Sequelize.DATE, field: 'date_creation'}
        
    },
    {
        id:'id',
        titre:'titre',
        description:'description',
        date_creation:'date_creation'
       
    });
    return Emploi;
};
