class Pessoa{
    #nome;
    sobrenome; 
    #idade;
    #peso;
    #altura;

    static numeroDePessoas = 0

    constructor(nome, sobrenome, idade, peso, altura){
        this.#nome = nome
        this.sobrenome = sobrenome
        this.#idade = idade
        this.#peso = peso
        this.#altura = altura

        Pessoa.numeroDePessoas += 1
    }

    static criarDeUmObjeto(obj){
        return new Pessoa(obj.nome, obj.sobrenome, obj.idade, obj.peso, obj.altura)
    }

    //get é um "metodo" tratado como atributo, pois entrega o atributo privado.
    get IMC(){
        return this.#peso / Math.pow(this.#altura, 2)
    }
    get idade(){
        return `${this.#idade} anos`;
    }
    get peso(){
        return this.#peso
    }

    set peso(novoPeso){
        this.#peso = novoPeso
    }

}

const pessoa = new Pessoa('Jady', 'Godoi', 37, 72, 1.80)

console.log(Pessoa.numeroDePessoas);

const pessoa2 = new Pessoa('Guilherme', 'Risnik', 29, 50, 1.70)

console.log(pessoa2);
console.log(Pessoa.numeroDePessoas);

const p = {nome: 'Cesar', sobrenome: 'Godoi', idade:51, peso: 92, altura: 1.92}
const pessoa3 = Pessoa.criarDeUmObjeto(p)
const arr = Array.from(iterable)

console.log(pessoa3);