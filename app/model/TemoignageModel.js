module.exports = function (sequelize, Sequelize) {
    const Temoignage = sequelize.define('temoignages', {

        id:{ primaryKey: true,type:Sequelize.INTEGER,field: 'id'},
        company_id:{type: Sequelize.INTEGER, field: 'company_id'},
        name:{type: Sequelize.STRING, field: 'name'},
        description:{type: Sequelize.TEXT, field: 'description'},
        contexte:{type: Sequelize.TEXT, field: 'contexte'},
        defi:{type: Sequelize.TEXT, field: 'defi'},
        defi_details:{type: Sequelize.TEXT, field: 'defi_details'},
        apports:{type: Sequelize.TEXT, field: 'apports'},
        difficultes:{type: Sequelize.TEXT, field: 'difficultes'},
        impacts_metiers:{type: Sequelize.TEXT, field: 'impacts_metiers'},
        impacts_competences:{type: Sequelize.TEXT, field: 'impacts_competences'},
        created_at: {type: Sequelize.DATE, field: 'created_at'},
        updated_at: {type: Sequelize.DATE, field: 'updated_at'},
        deleted_at: {type: Sequelize.DATE, field: 'deleted_at'},
    },
    {
        id:'id',
        company_id:'company_id',
        name:'name',
        description:'description',
        contexte:'contexte',
        defi:'defi',
        defi_details:'defi_details',
        apports:'apports',
        difficultes:'difficultes',
        impacts_metiers:'impacts_metiers',
        impacts_competences:'impacts_competences',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deleted_at: 'deleted_at'
    });
    return Temoignage;
};
