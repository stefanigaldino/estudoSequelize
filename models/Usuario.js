module.exports = (sequelize, DataTypes) => {
    // DEFINE (nomeModel, colunas, config)
    const Usuario = sequelize.define(
        'Usuario', {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );

    Usuario.associate = (models) => {
        //relação de um usuario para varios posts 1-N
        Usuario.hasMany(models.Post, {as: "posts", foreingKey: "usuarios_id"});
    }
    return Usuario;
}