//this -> se refere ao próprio contexto.
// const pessoa = {
//     nome: 'Zé',
//     idade: 37,
//     apresentacao: function(nome, idade){
//         console.log(`[meu objeto]oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`); //faz referencia aos dados declarados dentro do objeto
//         console.log(`[parametros]oi, meu nome é ${nome} e tenho ${idade} anos.`); //faz referencia aos parametros recebidos na funcao
//     }
// }

// se usar arrow functio no lugar de function, o this fará referencia ao escopo global. Logo não pegará dados de dentro do objeto.
// const pessoa2 = {
//     nome: 'Zé',
//     idade: 37,
//     apresentacao: (nome, idade) => {
//         console.log(`[meu objeto]oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`); //faz referencia aos dados declarados dentro do objeto
//         console.log(`[parametros]oi, meu nome é ${nome} e tenho ${idade} anos.`); //faz referencia aos parametros recebidos na funcao
//     }
// }



// pessoa.apresentacao('jady', 25)


class Pessoa {
    nome;
    sobrenome;
    idade;
    peso;
    altura;

    constructor(nome, sobrenome, idade, peso, altura){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    apresentacao(){
        console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} idade`);
    }

    calcularIMC(){
        return this.peso / this.altura ** 2;
    }
}
// console.log(pessoa instanceof Pessoa);//pessoa é da classe Pessoa?
// console.log(pessoa instanceof Date);//pessoa é da classe Date?

// const pessoa = new Pessoa()

// pessoa.nome = 'Jady'
// pessoa.idade = 37

const pessoa = new Pessoa('Jady', 'Godoi', 37, 72, 1.80)

pessoa.apresentacao()

console.log(`o IMC de ${pessoa.nome} é ${pessoa.calcularIMC()}`);

/*
TAD: Tipo de abstração de dado
Estratégia baseada em Domínios -> ver 
SOLID -> ver
*/

