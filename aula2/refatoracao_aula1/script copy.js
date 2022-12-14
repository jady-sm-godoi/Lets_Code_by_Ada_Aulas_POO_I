//criando o modelo de card
class CardDeProduto{
    #imagem;
    #nome;
    #preco;
    #promocao;
    #element;

    constructor(imagem, nome, preco, promocao = false){
        this.#imagem = imagem;
        this.#nome = nome;
        this.#preco = preco;
        this.#element = document.createElement('div');
        this.#promocao = promocao;
    }

    get preco(){
        return `${this.#preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    }
    set preco(valor){
        if(valor == isNaN){
            throw('Valor não é um número')
        } else this.#preco = valor
    }

    set promocao(bool){
        this.#promocao = bool
    }

    static criarCard(obj){
        const prodCard = new CardDeProduto(obj.imagem, obj.nome, obj.preco, obj.promocao)
        return prodCard
    }

    renderizar(){
        //criando os elementos que irão compor o card
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const promo = document.createElement('span')

        //setando os atributos na tag img
        img.setAttribute('src', this.#imagem)
        img.setAttribute('width', 100)

        //inserindo conteúdo nas tags <h2> e <p>
        h2.innerHTML = this.#nome
        p.innerHTML = `${this.#preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        promo.innerHTML = this.#promocao ? 'PROMOÇÃO!' : '' 
        
        //inserindo a imagem, o titulo e o parágrafo na div mãe (card)
        this.#element.append(img, h2, p, promo)
        
        //inseridno o card no corpo da página
        document.body.append(this.#element)

        //chamada da função estilizar: inserção de class e condicional de cor para promoção
        this.#estilizar()
    }

    #estilizar(corDeFundo = '#eee'){ //insere class na tag do card e seta cor de fundo diferenciada
        this.#element.classList.add('card-de-produto')
        this.#element.childNodes[3].classList.add('promo-span')
        if(this.#promocao)
            this.#element.style.backgroundColor = '#d38c89'
    }
}

//imagens
const imagem1 = "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2022/08/09/843882592-cookie-chocolate-768x512.jpg"
const imagem2 = "https://img.itdg.com.br/tdg/images/recipes/000/134/387/354786/354786_original.jpg"

//criando cards por atribuição
const card1 = new CardDeProduto(imagem1, 'Cookie', 5.99)
card1.renderizar()

const card2 = new CardDeProduto(imagem2, 'Cup Cake', 9.99, false)

card2.promocao = true
card2.preco = 5.50
card2.renderizar()


//criando vários cards de uma lista de objetos usando o método estático da classe
const listaProdutos = [
    {
        imagem: "https://avidadoce.com/wp-content/uploads/2020/05/brigadeiros-gourmet-e1590075452121.jpg",
        nome: "Brigadeiro",
        preco: 19.99,
        promocao: false,
    },
    {
        imagem: "https://emporiokaminski.com.br/wp-content/uploads/2020/06/docinhos-17.jpg", 
        nome: 'bombom', 
        preco: 1.20, 
        promocao: false,
    },
    {
        imagem: "https://naturalevita.com.br/image/cache/catalog/confete%20de%20chcoco-800x800.jpg", 
        nome: 'confete', 
        preco: 4.20, 
        promocao: true,
    },
    {
        imagem: "https://www.alphagel.com.br/wp-content/uploads/2021/04/308761-o-que-e-sorvete-de-massa-e-quais-as-diferencas-para-os-outros-1.jpg", 
        nome: 'sorvete', 
        preco: 14.20, 
        promocao: false,
    },
]

listaProdutos.forEach(element => {
    CardDeProduto.criarCard(element).renderizar()
});