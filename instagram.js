const { Usuario, Comentario, Post, sequelize } = require('./models');
const {Op} = require('sequelize');




// // Post.findAll().then((resultado) => {
// //     console.table(resultado.map(user => user.toJSON()));
// // });

// Usuario.findByPk(2).then((resultado) => {
//     console.table(resultado.toJSON());
// });

// // Usuario.findOne(1).then((resultado) => {
// //     console.table(resultado.toJSON());
// // });

// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// });

// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'}
//     }
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// });

// // Post.findOne({
// //       limit: 6,
// //       offset: 2
// //     });

// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((comment) => comment.toJSON()));
//     });
//   }
  
//    Post.findAll().then((resultado) => {
//         console.table(resultado.map(user => user.toJSON()));
//     });

// Usuario.create({
//     nome: 'Stefani',
//     email: 'fani@digitalhouse.com',
//     senha: '123456'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })
// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })


// Post.create({
//     texto: 'Valeu!',
//     usuario_id: 11
// }).then((resultado) => {
//     console.log(resultado);
// });

// Post.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findByPK(1, {
//     include: [
//         { association: "posts"}
//     ]
// })
// .then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()))
// })

Usuario.findByPk(1, {include:['posts']}).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)
  

