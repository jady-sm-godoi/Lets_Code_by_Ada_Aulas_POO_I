const pessoa = require('./Pessoa.class')

class Trabalhardor extends Pessoa{
    salario;

    constructor(nome, altura, peso, salario){
        super(nome, altura, peso, salario)
        this.salario = salario
    }

    apresentacao(){
        return `${super.apresentacao()}. Eu ganho R$${this.salario} por mês.`
    }

}

module.export = Trabalhardor