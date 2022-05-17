const bodyHTML = document.querySelector("body")

// header

const header = document.createElement("header")
header.id = "header"

const logo = document.createElement("h1")
logo.innerText = "Weartake"
logo.id = "logo"

const divMenu = document.createElement("nav")
divMenu.id = "menu"

const listaMenu = document.createElement("ul")
listaMenu.classList.add("menu")

const itemTodos = document.createElement("li")
itemTodos.innerText = "Todos"
itemTodos.classList.add("itemMenu")

const itemAcessorios = document.createElement("li")
itemAcessorios.innerText = "Acessórios"
itemAcessorios.classList.add("itemMenu")

const itemCalcados = document.createElement("li")
itemCalcados.innerText = "Calçados"
itemCalcados.classList.add("itemMenu")

const itemCamisetas = document.createElement("li")
itemCamisetas.innerText = "Camisetas"
itemCamisetas.classList.add("itemMenu")

bodyHTML.appendChild(header)
header.appendChild(logo)
header.appendChild(divMenu)
divMenu.appendChild(listaMenu)
listaMenu.appendChild(itemTodos)
listaMenu.appendChild(itemAcessorios)
listaMenu.appendChild(itemCalcados)
listaMenu.appendChild(itemCamisetas)

// MainBody
const mainBody = document.createElement("main")
mainBody.classList.add("body")
bodyHTML.appendChild(mainBody)

// SECTION VITRINE
const sectionVitrine = document.createElement("section")
sectionVitrine.id = "vitrine"
mainBody.appendChild(sectionVitrine)

// LISTA CARD
const listaCard = document.createElement("ul")
listaCard.id = "listaCard"
sectionVitrine.appendChild(listaCard)

// FUNÇÃO PARA MONTAR CARDS

function montaCard(arrLista) {
    for (let i = 0; i < arrLista.length; i++) {

        itemCardProduct = document.createElement("li")
        itemCardProduct.classList.add("cardProduct")
        itemCardProduct.id = `${arrLista[i].id}`

        divImage = document.createElement("div")
        divImage.classList.add("divImage")

        img = document.createElement("img")
        img.src = `${arrLista[i].img}`
        divImage.classList.add("divImage")

        cardProductBody = document.createElement("main")
        cardProductBody.classList.add("cardProductBody")

        categorias = document.createElement("h4")
        categorias.classList.add("categorias")
        categorias.innerText = `${arrLista[i].tag}`

        nomeProduto = document.createElement("h3")
        nomeProduto.classList.add("nomeProduto")
        nomeProduto.innerText = `${arrLista[i].nameItem}`

        descricao = document.createElement("p")
        descricao.classList.add("descricao")
        descricao.innerText = `${arrLista[i].description}`

        price = document.createElement("p")
        price.classList.add("price")
        price.innerHTML = `<strong>R$ ${arrLista[i].value},00<strong>`

        var add = document.createElement("p")
        add.classList.add("add")
        add.innerText = `${arrLista[i].addCart}`
        add.id = `${arrLista[i].id}`
        add.addEventListener("click", addCarinho)





        listaCard.appendChild(itemCardProduct)
        itemCardProduct.appendChild(divImage)
        divImage.appendChild(img)
        itemCardProduct.appendChild(cardProductBody)
        cardProductBody.appendChild(categorias)
        cardProductBody.appendChild(nomeProduto)
        cardProductBody.appendChild(descricao)
        cardProductBody.appendChild(price)
        cardProductBody.appendChild(add)

    }




}

montaCard(data)

function addCarinho(event) {
    console.log(event.currentTarget.id)
        // item no carrinho
    itemNoCarrinho = document.createElement("li")
    itemNoCarrinho.innerText = "teste"
    itemNoCarrinho.classList.add("itemNoCarrinho")
    listaCarrinhoDeCompras.appendChild(itemNoCarrinho)

    // div item no carrinho
    divItemCarrinho = document.createElement("div")
    divItemCarrinho.classList.add("divItemCarrinho")
    itemNoCarrinho.appendChild(divItemCarrinho)

}









// ASIDE

mainLateral = document.createElement("aside")
mainLateral.classList.add("mainLateral")
mainBody.appendChild(mainLateral)


// section busca
busca = document.createElement("section")
busca.classList.add("busca")
mainLateral.appendChild(busca)

// input
barraDePesquisa = document.createElement("input")
barraDePesquisa.id = "barraDePesquisa"
barraDePesquisa.type = "text"
barraDePesquisa.placeholder = "Digite aqui sua pesquisa"
busca.appendChild(barraDePesquisa)

//button
buttonPesquisar = document.createElement("button")
buttonPesquisar.id = "buttonPesquisar"
buttonPesquisar.innerText = "Pesquisar"
busca.appendChild(buttonPesquisar)


// CARRINHO DE COMPRAS

carrinhoDeCompras = document.createElement("section")
carrinhoDeCompras.classList.add("buttonPesquisar")
mainLateral.appendChild(carrinhoDeCompras)

// div titulo carrinho
divCarrinho = document.createElement("div")
divCarrinho.classList.add("divCarrinho")
carrinhoDeCompras.appendChild(divCarrinho)

// h3 titulo
tituloCarrinhoH3 = document.createElement("h3")
tituloCarrinhoH3.classList.add("tituloCarrinhoH3")
tituloCarrinhoH3.innerText = "Carrinho de Compras"
divCarrinho.appendChild(tituloCarrinhoH3)

// lista carrinho de compras
listaCarrinhoDeCompras = document.createElement("ul")
listaCarrinhoDeCompras.id = "itensCarrinhoDeCompras"
listaCarrinhoDeCompras.classList.add("carrinhoVazioH32")
carrinhoDeCompras.appendChild(listaCarrinhoDeCompras)

// texto carrinho vazio
carrinhoVazioH3 = document.createElement("h3")
carrinhoVazioH3.innerText = "Carrinho Vazio"
carrinhoVazioH3.classList.add("carrinhoVazioH3")
    // incluir class de exclusão
    /* carrinhoVazioH3.classList.add("carrinhoVazioH3") */
listaCarrinhoDeCompras.appendChild(carrinhoVazioH3)


// adicionando no carrinho listaCarrinhoDeCompras