class Pessoa{
    #nome;
    #idade;
    #peso;
    #altura;

    constructor(nome, idade, peso, altura){
        this.#nome = nome,
        this.#idade = idade,
        this.#peso = peso,
        this.#altura = altura
    }

    get nome(){
        return this.#nome
    }

    // set(nome){
    //     this.#nome = nome
    // }

    calcularIMC(){
        return this.#peso / Math.pow(this.#altura, 2)
    }
}

class Trabalhador extends Pessoa {
    #salario;

    constructor(nome, idade, peso, altura, salario){
        super(nome, idade, peso, altura)
        this.#salario = salario
    }

    // static criarTrabalhador(obj){
    //     return new Trabalhador(obj.)
    // }
}

class Estudante extends Pessoa{
    #curso;

    constructor(nome, idade, peso, altura, curso){
        super(nome, idade, peso, altura)
        this.#curso = curso
    }

    static calcularMedia(notas){
        super.calcularIMC()
    }
}

const trabalhador = new Trabalhador('Jady', 37, 72, 1.80, 5000)
console.log(trabalhador)

trabalhador.nome = 'João'

console.log(trabalhador)