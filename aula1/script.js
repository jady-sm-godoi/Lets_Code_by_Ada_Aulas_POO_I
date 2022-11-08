//criando o modelo de card
class CardDeProduto{
    imagem;
    nome;
    preco;
    promocao;

    constructor(imagem, nome, preco, promocao = false){
        this.imagem = imagem;
        this.nome = nome;
        this.preco = preco;
        this.element = document.createElement('div');
        this.promocao = promocao;
    }

    renderizar(){
        //criando os elementos que irão compor o card
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')

        //setando os atributos na tag img
        img.setAttribute('src', this.imagem)
        img.setAttribute('width', 100)

        //inserindo conteúdo nas tags <h2> e <p>
        h2.innerHTML = this.nome
        p.innerHTML = `${this.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}` 
        
        //inserindo a imagem, o titulo e o parágrafo na div mãe (card)
        this.element.append(img, h2, p)
        
        //inseridno o card no corpo da página
        document.body.append(this.element)

        //chamada da função estilizar: inserção de class e condicional de cor para promoção
        this.estilizar()
    }

    estilizar(corDeFundo = '#eee'){ //insere class na tag do card e seta cor de fundo diferenciada
        this.element.classList.add('card-de-produto')
        if(this.promocao)
            this.element.style.backgroundColor = '#d38c89'
    }
}

//imagens
const imagem1 = "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2022/08/09/843882592-cookie-chocolate-768x512.jpg"
const imagem2 = "https://img.itdg.com.br/tdg/images/recipes/000/134/387/354786/354786_original.jpg"
const imagem3 = "https://avidadoce.com/wp-content/uploads/2020/05/brigadeiros-gourmet-e1590075452121.jpg"

//criando cards
const card1 = new CardDeProduto(imagem1, 'Cookie', 5.99)
card1.renderizar()

const card2 = new CardDeProduto(imagem2, 'Cup Cake', 9.99, true)
card2.renderizar()

const card3 = new CardDeProduto(imagem3, 'Brigadeiro', 19.99, false)
card3.renderizar()
