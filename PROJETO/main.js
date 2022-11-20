// const {Postagem, Comentario} = require('./Postagem');
// const {Usuario, Administrador} = require('./Usuario')
import {Postagem, Comentario} from './Postagem.js'
import {Usuario, Administrador} from './Usuario.js'


const usuarios = []

//criando novos usuários
const userJady = new Usuario(
    {
        nome: 'Jady Godoi', 
        senha: '123', 
        email:'jady.s.m@gmail.com',
        github:'https://github.com/jady-sm-godoi',
    }   
)
const userCesar = new Usuario(
    {
        nome: 'Cesar Godoi', 
        senha: '124', 
        email:'cesar.godoi@gmail.com',
        github:'https://github.com/cesargodoi',
    }   
)


//colocando usuarios na lista de usuarios
usuarios.push(userJady)
usuarios.push(userCesar)
usuarios.forEach((user, index)=>{console.log(`${index}: ${user.nome}`);})

//autenticando usuário
console.log(userJady.isLogged);
userJady.autenticar('jady.s.m@gmail.com', '123')
console.log(userJady.isLogged);

userCesar.autenticar('cesar.godoi@gmail.com', '124')

//adicionando amigos
userJady.adicionarAmigos(userCesar)
console.log('Amigos da Jady: ' + userJady.amigos[0].nome)

userCesar.adicionarAmigos(userJady)
console.log('Amigos do Cesar: ' + userCesar.amigos[0].nome)

//removendo amigo
userCesar.removerAmigos(userJady)
console.log('Amigos do Cesar: ' + userCesar.amigos)

//criando postagens
const novaPostagem = new Postagem(
    {titulo: 'Minha primeira postagem', texto: 'lorem lorem lorem lorem', autor: userJady}
)
const outraPostagem = new Postagem(
    {titulo: 'A mais nova postagem', texto: 'lorem lorem lorem lorem', autor: userCesar}
)
//adicinar postagem à lista do usuário
console.log('postagens da Jady: ' + userJady.postagens[0].titulo);
console.log('postagens do Cesar: ' + userCesar.postagens[0].titulo);

//remover postagem da lista do usuário
userJady.removerPostagem(novaPostagem)
console.log(userJady.postagens);

//criando um comentario
const comentarioJady = new Comentario({
    texto: 'Isso é muito legal', 
    autor: userJady, 
    postagem: outraPostagem
})
//acessando o comentário pela lista de postagem do usuário
console.log(userCesar.postagens[0].comentarios[0].texto);

//removendo comentario da postagem
userCesar.postagens[0].removerComentario(comentarioJady)
console.log(userCesar.postagens[0].comentarios);

//criando um usuário administrador
const admin = new Administrador({
    nome: 'Sra. Ada',
    senha: '123',
    email: 'admin@ada.com',
    github: 'https://github.com/ada',
})


usuarios.push(admin)
usuarios.forEach((user, index)=>{console.log(`${index}: ${user.nome}`);})

//apagando usuario
admin.autenticar('admin@ada.com', '123')
console.log(admin.isLogged); 

admin.removerUsuario(userJady, usuarios)
usuarios.forEach((user, index)=>{console.log(`${index}: ${user.nome}`);})



console.log(usuarios);