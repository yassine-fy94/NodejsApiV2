module.exports = function (sequelize, Sequelize) {
    const companies = sequelize.define('companies', {

        id:{ primaryKey: true,type:Sequelize.INTEGER,field: 'id'},
        name:{type: Sequelize.STRING, field: 'name'},
        description:{type: Sequelize.TEXT, field: 'description'},
        token:{type: Sequelize.STRING, field: 'token'},
        logo:{type: Sequelize.STRING, field: 'logo'},
        active:{type: Sequelize.INTEGER, field: 'active'},
        created_at: {type: Sequelize.DATE, field: 'created_at'},
        updated_at: {type: Sequelize.DATE, field: 'updated_at'},
        deleted_at: {type: Sequelize.DATE, field: 'deleted_at'}
    },
    {
        id:'id',
        name:'name',
        description:'description',
        token:'token',
        logo:'logo',
        active:'active',
        created_at:'created_at',
        updated_at:'updated_at',
        deleted_at:'deleted_at'
    });
    return companies;
};
