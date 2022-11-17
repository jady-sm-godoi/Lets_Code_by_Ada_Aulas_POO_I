/**
 * A entidade `Usuario` deve ser capaz de:

- Autenticar um usuário (verificar se nome de usuário e senha estão corretos);
- Adicionar outro usuário à lista de amigos;
- Remover outro usuário da lista de amigos;
- Criar uma postagem;
- Comentar uma postagem;
 */
const {Postagem, Comentario} = require('./Postagem')

class Usuario extends Postagem{
    #logged = false;
    #nome;
    #senha;
    #email;
    #github;
    #amigos = [];
    #postagens = [] //lista de objetos new Postagem()

    constructor(nome, senha, email, github, amigos, postagens, logged, titulo, descricao, comentarios){
        super(titulo, descricao, comentarios)

        this.#nome = nome
        this.#senha = senha
        this.#email = email
        this.#github = github
        this.#amigos = amigos
        this.#postagens = postagens
        this.#logged = logged
    }
    get logged(){
        return this.#logged
    }
    get nome(){
        return this.#logged
    }
    set nome(novoNome){
        if(this.#logged){
            this.#nome = novoNome
        }
    }
    get github(){
        return this.#github
    }
    set github(novoGithub){
        if(this.#logged){
            this.#github = novoGithub
        }
    }
    get amigos(){
        return this.#amigos
    }
    get postagens(){
        return this.#postagens
    }

    autenticar(email, senha){
        if(this.#email == email && this.#senha == senha){
            this.#logged = true;
        } else {
            throw 'usuário não autenticado'
        }
    }

    adicionarAmigos(usuario){
        this.#amigos.push(usuario)
    }
    removerAmigos(usuario){
        let index = this.#amigos.indexOf(usuario)
        if(index >= 0){
            this.#amigos.splice(index, 1)
        }
    }

    criarPostagem(postagem){
        this.#postagens.push(postagem)
    }
    removerPostagem(postagem){
        let index = this.#postagens.indexOf(postagem)
        if(index >= 0){
            this.#postagens.splice(index, 1)
        }
    }

    //????
    comentarPostagem(postagem, novoComentario){
        let index = this.#postagens.indexOf(postagem)
        this.#postagens[index].comentario = novoComentario
        this.#postagens[index].comentar()
    }
}

/**
 * A entidade `Administrador` deve ser uma especialização de `Usuario`. 
 * Apenas um administrador deve ser capaz de excluir um usuário.
 */

class Administrador extends Usuario{
    constructor(nome, senha, email, github, amigos, postagens,logged){
        super(nome, senha, email, github, amigos, postagens, logged)
    }

    excluirUsuario(usuario){
        const index = usuarios.indexOf(usuario)
        usuarios.splice(index, 1)
    }
}

module.export = {Usuario, Administrador} 