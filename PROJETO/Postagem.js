/**
 * A entidade `Postagem` deve ser capaz de:

- Apagar comentários;
- Modificar o título
- Modificar a descrição;
 */
class Comentario{
    #texto;
    #autor;
    #postagem;

    constructor({texto, autor, postagem}){
        this.#texto = texto
        this.#autor = autor
        this.#postagem = postagem
        this.#postagem.adicionarComentario(this)
    }

    get texto(){
        return this.#texto
    }
    get autor(){
        return this.#autor
    }
    get postagem(){
        return this.#postagem
    }
}

class Postagem {
    #titulo;
    #texto;
    #autor;
    #comentarios = [];

    constructor({titulo, texto, autor}){
        this.#titulo = titulo
        this.#texto = texto
        this.#autor = autor
        this.#autor.adicionarPostagem(this) //Ao criar a postagem, recebendo o autor, já adiciona na lista.
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
    get comentarios(){
        if(this.#comentarios.length > 0){
            return this.#comentarios
        } else {
            console.log('Não há comentários na postagem')
        }
    }

    adicionarComentario(novoComentario){
        if(novoComentario.postagem.titulo == this.#titulo){
            this.#comentarios.push(novoComentario)
        }else{
            throw 'Erro! Este comentário não é desta postagem.'
        }
    }
    removerComentario(comentario){
        let index = this.#comentarios.indexOf(comentario)
        this.#comentarios.splice(index, 1)
    }   
}



// module.exports = {Postagem, Comentario}
export {Postagem, Comentario}