const { Postagem } = require('./Postagem');
const {Usuario, Administrador} = require('./Usuario')

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

console.log('logado? ' + userJady.isLogged);

userJady.autenticar('jady.s.m@gmail.com', '123')
console.log(userJady.isLogged);


const novaPostagem = new Postagem(
    {titulo: 'Minha primeira postagem', texto: 'lorem lorem lorem lorem', autor: userJady}
)
const outraPostagem = new Postagem(
    {titulo: 'Minha primeira postagem', texto: 'lorem lorem lorem lorem', autor: userCesar}
)

userJady.adicionarPostagem(outraPostagem)
// console.log(userJady.postagens[0].titulo);