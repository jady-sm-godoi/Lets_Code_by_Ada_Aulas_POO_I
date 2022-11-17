/**
 * A entidade `Usuario` deve ser capaz de:

- Autenticar um usuário (verificar se nome de usuário e senha estão corretos);
- Adicionar outro usuário à lista de amigos;
- Remover outro usuário da lista de amigos;
- Criar uma postagem;
- Comentar uma postagem;
 */
const {Postagem, Comentario} = require('./Postagem')

class Usuario {
    #logged = false;
    #nome;
    #senha;
    #email;
    #github;
    #amigos = [];
    #postagens = [] //lista de objetos new Postagem()

    constructor({nome, senha, email, github}){
        this.#nome = nome
        this.#senha = senha
        this.#email = email
        this.#github = github
    }

    get isLogged(){
        return this.#logged
    }
    get nome(){
        return this.#nome
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
        if(this.#amigos.length > 0){
            return this.#amigos
        } else {
            console.log('Não há amigos cadastrados')
        }
    }
    get postagens(){
        if(this.#postagens.length > 0){
            return this.#postagens
        } else {
            console.log('Não há postagens cadastradas')
        }
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

    adicionarPostagem(postagem){
        if(postagem.autor.nome === this.#nome){
            this.#postagens.push(postagem)
        } else {
            throw 'esta não é sua postagem!'
        }
    }
    removerPostagem(postagem){
        let index = this.#postagens.indexOf(postagem)
        if(postagem.autor.nome === this.#nome){
            if(index >= 0){
                this.#postagens.splice(index, 1)
            }
        } else {
            throw 'Postagem não removida. Esta não é sua postagem!'
        }
    }
}

/**
 * A entidade `Administrador` deve ser uma especialização de `Usuario`. 
 * Apenas um administrador deve ser capaz de excluir um usuário.
 */

class Administrador extends Usuario{
    constructor({logged, nome, senha, email, github, amigos, postagens}){
        super({logged, nome, senha, email, github, amigos, postagens})
    }

    removerUsuario(usuario, listaDeUsuarios){
        const index = listaDeUsuarios.indexOf(usuario)
        listaDeUsuarios.splice(index, 1)
    }
}

module.exports = {Usuario, Administrador} 