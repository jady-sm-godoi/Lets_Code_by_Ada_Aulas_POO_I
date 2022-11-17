/**
 * A entidade `Postagem` deve ser capaz de:

- Apagar comentários;
- Modificar o título
- Modificar a descrição;
 */
class Comentario{
    #texto;
    #autor;

    constructor(texto, autor){
        this.#texto = texto
        this.#autor = autor
    }

    get texto(){
        return this.#texto
    }
    get autor(){
        return this.#autor
    }
}

class Postagem {
    #titulo;
    #texto;
    #autor;
    // #comentarios = [];

    constructor({titulo, texto, autor}){
        this.#titulo = titulo
        this.#texto = texto
        this.#autor = autor
    }

    get titulo(){
        return this.#titulo
    }
    set titulo(novoTitulo){
        this.#titulo = novoTitulo
    }

    get texto(){
        return this.#texto
    }
    set texto(novoTexto){
        this.#texto = novoTexto
    }
    get autor(){
        return this.#autor
    }

    
    // apagarComentario(comentario){
    //     let index = this.#comentarios.indexOf(comentario)
    //     this.#comentarios.splice(index, 1)
    // }   
}



module.exports = {Postagem, Comentario}