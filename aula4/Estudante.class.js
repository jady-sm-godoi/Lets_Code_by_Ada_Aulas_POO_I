const Pessoa = require('./Pessoa.class')

class Estudante extends Pessoa{
    curso;
    constructor(nome, peso, altura, curso){
        super(nome, peso, altura)
        this.curso = curso
    }
}