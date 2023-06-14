let h1 = document.getElementById("titulo")
console.log(h1)

let nav = document.getElementsByClassName("iten-menu")
console.log(nav)
console.log(nav[2])

h1.innerText = "Hello Fuckers"



//let botao = document.getElementById("clique")
//botao.onclick = () => {
//    console.log("clicou no botão")
//}

let lista = [];

function enviar() {
    let item = document.getElementById("itemLista")
    lista.push(item.value)
}

function visualizar() {
    let area = document.getElementById("area")
    area.innerText = lista
    console.log(lista)
}

function limpar() {
    area.innerText = ""
}