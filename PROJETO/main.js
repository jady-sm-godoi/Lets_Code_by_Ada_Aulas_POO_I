const {Usuario, Administrador} = require('./Usuario')

const userJady = new Usuario(
    'Jady Godoi', 
    '123', 
    'jady.s.m@gmail.com', 
    'https://github.com/jady-sm-godoi')

console.log(userJady.nome);