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

class Postagem extends Comentario{
    #titulo;
    #descricao;
    #comentarios = [];

    constructor(titulo, descricao, comentarios, texto, autor){
        super(texto, autor)

        this.#titulo = titulo
        this.#descricao = descricao
        this.#comentarios = comentarios
    }

    get titulo(){
        return this.#titulo
    }
    set titulo(novoTitulo){
        this.#titulo = novoTitulo
    }

    get descricao(){
        return this.#descricao
    }
    set descricao(novaDescricao){
        this.#descricao = novaDescricao
    }
    
    apagarComentario(comentario){
        let index = this.#comentarios.indexOf(comentario)
        this.#comentarios.splice(index, 1)
    }   
}



module.exports = {Postagem, Comentario}