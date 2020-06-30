
module.exports = function (sequelize, Sequelize) {
    const Temoignage = sequelize.define('user_fos', {

        id:{ primaryKey: true,type:Sequelize.INTEGER,field: 'id'},
        session_id:{type: Sequelize.TEXT, field: 'session_id'},
        questionnaire_version_id:{type: Sequelize.INTEGER, field: 'questionnaire_version_id'},
        session_start_date:{type: Sequelize.DATE, field: 'session_start_date'},
        session_end_date:{type: Sequelize.DATE, field: 'session_end_date'},
        pdf:{type: Sequelize.INTEGER, field: 'pdf'},
        finished:{type: Sequelize.INTEGER, field: 'finished'},
        note:{type: Sequelize.DOUBLE, field: 'note'},
        email:{type: Sequelize.STRING, field: 'email'},
        interested_temoignages:{type: Sequelize.INTEGER, field: 'interested_temoignages'},
        interested_diagnostic:{type: Sequelize.INTEGER, field: 'interested_diagnostic'},
        created_at: {type: Sequelize.DATE, field: 'created_at'},
        updated_at: {type: Sequelize.DATE, field: 'updated_at'},
        deleted_at: {type: Sequelize.DATE, field: 'deleted_at'}
    },
    {
        id:"id",
        session_id:"session_id",
        questionnaire_version_id:"questionnaire_version_id",
        session_start_date:"session_start_date",
        session_end_date:"session_end_date",
        pdf:"pdf",
        finished:"finished",
        note:"note",
        email:"email",
        interested_temoignages:"interested_temoignages",
        interested_diagnostic:"interested_diagnostic",
        created_at:"created_at",
        updated_at:"updated_at",
        deleted_at:"deleted_at"
    });
    return Temoignage;
};
