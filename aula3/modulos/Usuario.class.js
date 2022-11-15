const { Documento } = require("./Endereco.class");

class Usuario {
  #nomeCompleto;
  #dataDeNascimento;
  #documento;
  #endereco;

  constructor({
    nomeCompleto = "",
    dataDeNascimento = new Date(),
    documento = new Documento("RG", ""),
  } = {}) {
    this.#nomeCompleto = nomeCompleto;
    this.#dataDeNascimento = dataDeNascimento;

    if (!documento instanceof Documento) throw "Parametro documento inválido.";

    this.#documento = documento;
  }

  inserirEndereco(endereco) {
    this.#endereco = endereco;
  }

  get nomeCompleto(){
    return this.#nomeCompleto
  }
  get dataDeNascimento(){
    return this.#dataDeNascimento
  }
  get documento(){
    return this.#documento
  }
  get endereco() {
    return this.#endereco;
  }
}

module.exports = Usuario;