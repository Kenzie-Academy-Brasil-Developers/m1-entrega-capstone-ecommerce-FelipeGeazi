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

        var itemCardProduct = document.createElement("li")
        itemCardProduct.classList.add("cardProduct")
        itemCardProduct.id = `${arrLista[i].id}`

        var divImage = document.createElement("div")
        divImage.classList.add("divImage")

        var img = document.createElement("img")
        img.src = `${arrLista[i].img}`
        divImage.classList.add("divImage")

        var cardProductBody = document.createElement("main")
        cardProductBody.classList.add("cardProductBody")

        var categorias = document.createElement("h4")
        categorias.classList.add("categorias")
        categorias.innerText = `${arrLista[i].tag}`

        var nomeProduto = document.createElement("h3")
        nomeProduto.classList.add("nomeProduto")
        nomeProduto.innerText = `${arrLista[i].nameItem}`

        var descricao = document.createElement("p")
        descricao.classList.add("descricao")
        descricao.innerText = `${arrLista[i].description}`

        var price = document.createElement("p")
        price.classList.add("price")
        price.innerHTML = `<strong>R$ ${arrLista[i].value},00<strong>`

        var add = document.createElement("button")
        add.classList.add("add")
        add.innerText = `${arrLista[i].addCart}`
        add.id = `${arrLista[i].id}`
            /* add.addEventListener("click", addCarinho) */





        listaCard.appendChild(itemCardProduct)
        itemCardProduct.appendChild(divImage)
        divImage.appendChild(img)
        itemCardProduct.appendChild(cardProductBody)
        cardProductBody.appendChild(categorias)
        cardProductBody.appendChild(nomeProduto)
        cardProductBody.appendChild(descricao)
        cardProductBody.appendChild(price)
        cardProductBody.appendChild(add)

        add.setAttribute("onclick", "addCarrinho(" + add.id + ")")

    }




}

/* itemCardProduct.addEventListener("click", function(event) {
    console.log(event.target.id)
}) */

montaCard(data)




let somatorio = 0

function addCarrinho(idProduct) {

    const product = data.find(position => position.id == idProduct)

    carrinhoVazioH3.innerText = ""


    // item no carrinho
    const itemNoCarrinho = document.createElement("li")
    itemNoCarrinho.classList.add("itemNoCarrinho")

    imagemMini = document.createElement("img")
    imagemMini.src = `${product.img}`
    imagemMini.classList.add("imagemMini")


    divInformacoesCarrinho = document.createElement("div")
    divInformacoesCarrinho.classList.add("divInformacoesCarrinho")

    tituloItemCarrinho = document.createElement("h3")
    tituloItemCarrinho.classList.add("nomeProduto")
    tituloItemCarrinho.innerText = `${product.nameItem}`

    priceCarrinho = document.createElement("p")
    priceCarrinho.classList.add("price")
    priceCarrinho.id = `${product.id}`

    priceCarrinho.innerText = `${product.value}`

    somatorio += parseFloat(priceCarrinho.innerText)
    totalSoma.innerText = `R$ ${somatorio}`







    removerProduto = document.createElement("button")
    removerProduto.classList.add("add")
    removerProduto.innerText = "⛔"
    removerProduto.value = `${product.id}`
    console.log(removerProduto.id)




    /*     quantidadeSoma.innerText = contTotal.length
     */




    listaCarrinhoDeCompras.appendChild(itemNoCarrinho)
    itemNoCarrinho.appendChild(imagemMini)
    itemNoCarrinho.appendChild(divInformacoesCarrinho)
    divInformacoesCarrinho.appendChild(tituloItemCarrinho)
    divInformacoesCarrinho.appendChild(priceCarrinho)
    divInformacoesCarrinho.appendChild(removerProduto)


    //colocando class na div total
    divTotalNoCarrinho.classList.add("divTotalNoCarrinho")

    // colocando class no texto da div total
    divQuantidade.classList.remove("removido")
    divQuantidade.classList.add("divQuantidade")

    divTotal.classList.remove("removido")
    divTotal.classList.add("divQuantidade")


    /* if (quantidadeSoma < 1) {
        carrinhoVazioH3.innerText = "Carrinho Vazio"
    } */


    // remover item 
    let contTotal = document.querySelectorAll("#itensCarrinhoDeCompras li")
    let valorTotal = document.querySeletor


    removerProduto.addEventListener("click", function(e) {
        /* itemNoCarrinho.classList.remove("itemNoCarrinho")
        itemNoCarrinho.classList.add("removido") */
        e.target.parentNode.parentNode.remove()
        contTotal = document.querySelectorAll("#itensCarrinhoDeCompras li")
            /* somatorio -= parseFloat(priceCarrinho.innerText) */


        quantidadeSoma.innerText = contTotal.length

        retiraItem()
        retiraValor()




    })

    quantidadeSoma.innerText = contTotal.length


}


function retiraValor() {


    somatorio -= parseFloat(priceCarrinho.innerText)
        /*  somatorio += parseFloat(priceCarrinho.innerText) */
    totalSoma.innerText = `R$ ${somatorio}`

}


function retiraItem() {
    if (quantidadeSoma.innerText < 1) {
        carrinhoVazioH3.innerText = "Carrinho Vazio"

    } else {
        carrinhoVazioH3.innerText = ""
    }
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


// adicionando no divTotalNoCarrinholistaCarrinhoDeCompras

divTotalNoCarrinho = document.createElement("div")
carrinhoDeCompras.appendChild(divTotalNoCarrinho)





//
const divQuantidade = document.createElement("div")
divQuantidade.classList.add("removido")

const quantidade = document.createElement("p")
quantidade.classList.add("totalTitulo")
quantidade.innerText = "Quantidade:"



const quantidadeSoma = document.createElement("p")
quantidadeSoma.classList.add("somaCarinho")
    /* quantidadeSoma.innerText = 0 */



divTotalNoCarrinho.appendChild(divQuantidade)
divQuantidade.appendChild(quantidade)
divQuantidade.appendChild(quantidadeSoma)

///

const divTotal = document.createElement("div")
divTotal.classList.add("removido")

const totalTitulo = document.createElement("p")
totalTitulo.classList.add("totalTitulo")
totalTitulo.innerText = "Total:"

const totalSoma = document.createElement("p")
totalSoma.classList.add("somaCarinho")
    /* totalSoma.innerText = 0 */


divTotalNoCarrinho.appendChild(divTotal)
divTotal.appendChild(totalTitulo)
divTotal.appendChild(totalSoma)






/* const total = document.createElement("p")
quantidade.classList.add("quantidadeValor")
quantidade.innerText = "Total:"

total = document.createElement("p")
totalSoma = document.createElement("p") */