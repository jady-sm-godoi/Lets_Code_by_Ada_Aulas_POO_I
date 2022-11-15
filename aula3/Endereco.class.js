class Endereco{
    #logradouro;
    #numero;
    #cep;
    #cidade;
    #estado;
    #complemento;

    constructor(logradouro, numero, cep, cidade, estado, complemento = ''){
        this.#logradouro = logradouro
        this.#numero = numero
        this.#cep = cep
        this.#cidade = cidade
        this.#estado = estado
        this.#complemento = complemento
    }
}
