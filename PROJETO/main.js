const { Postagem, Comentario } = require('./Postagem');
const {Usuario, Administrador} = require('./Usuario')


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

//adicionando amigos
userJady.adicionarAmigos(userCesar)
console.log('Amigo da Jady: ' + userJady.amigos[0].nome)

userCesar.adicionarAmigos(userJady)
console.log('Amiga do Cesar: ' + userCesar.amigos[0].nome)

//romovendo amigo
userCesar.removerAmigos(userJady)
console.log('Amiga do Cesar: ' + userCesar.amigos)

//criando postagens
const novaPostagem = new Postagem(
    {titulo: 'Minha primeira postagem', texto: 'lorem lorem lorem lorem', autor: userJady}
)
const outraPostagem = new Postagem(
    {titulo: 'Minha primeira postagem', texto: 'lorem lorem lorem lorem', autor: userCesar}
)
//adicinar postagem à lista do usuário
userJady.adicionarPostagem(novaPostagem)
userCesar.adicionarPostagem(outraPostagem)
//remover postagem da lista do usuário
console.log(userJady.postagens[0].titulo);
userJady.removerPostagem(novaPostagem)
console.log(userJady.postagens);

//criando um comentario
const comentarioJady = new Comentario({
    texto: 'Isso é muito legal', 
    autor: userJady, 
    postagem: novaPostagem
})
//adicionando comentario à postagem
// outraPostagem.adicionarComentario(comentarioJady)
userCesar.postagens[0].adicionarComentario(comentarioJady)
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
admin.removerUsuario(userJady, usuarios)
usuarios.forEach((user, index)=>{console.log(`${index}: ${user.nome}`);})



