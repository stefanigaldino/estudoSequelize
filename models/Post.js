module.exports = (sequelize, DataTypes) => {
    // DEFINE (nomeModel, colunas, config)
    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER ,
            n_likes: DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );
    Post.associate = (models) => {
        //relaçao de varios post para um usuario (N-1)
        Post.belongsTo(models.Usuario, {as: "usuario", foreingKey: "usuarios_id"});
    }

    return Post;
}