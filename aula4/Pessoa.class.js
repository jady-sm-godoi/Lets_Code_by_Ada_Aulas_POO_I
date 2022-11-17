class Pessoa{
    nome;
    altura;
    peso;

    constructor(nome, altura, peso){
        this.nome = nome
        this.altura = altura
        this.peso = peso
    }

    apresentacao(){
        return `Oi, meu nome é ${this.nome}, tenho ${this.altura} metros e ${this.peso} kg.`
    }
}

module.export = Pessoa;