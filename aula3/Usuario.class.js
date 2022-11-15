const Documento = require("./Documento.class");

class Usuario{
    #nomeCompleto;
    #dataDeNascimento;
    #documento;
    #endereco;

    constructor({nomeCompleto, dataDeNascimento, documento = new Documento('CPF', '0502364'), endereco} = {}){
        this.#nomeCompleto = nomeCompleto;
        this.#dataDeNascimento = new Date;
        this.#documento = documento;
        this.#endereco = endereco;
    }
}

module.exports = Usuario

