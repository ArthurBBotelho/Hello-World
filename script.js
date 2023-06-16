// let h1 = document.getElementById("titulo")
// console.log(h1)

// let nav = document.getElementsByClassName("iten-menu")
// console.log(nav)
// console.log(nav[2])

// h1.innerText = "Hello Fuckers"



// let botao = document.getElementById("clique")
// botao.onclick = () => {
//     console.log("clicou no botão")
// }

// let lista = [];

// function enviar() {
//     let item = document.getElementById("itemLista")
//     lista.push(item.value)
// }

// function visualizar() {
//     let area = document.getElementById("area")
//     area.innerText = lista
//     console.log(lista)
// }

// function limpar() {
//     area.innerText = ""
// }

// fim do TO-DO list

//CRIAR ELEMENTO

// let nome = document.createElement("h1")
// nome.className = "nome"
// nome.innerText = "Arthur"

// let sobrenome = document.createElement("h2")
// nome.className = "sobrenome"
// nome.innerText = "Botelho"

// document.body.append(sobrenome)

// document.body.append(nome)

// function eliminar() {
//     let eliminar = sobrenome
//     eliminar.remove()
// }

let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let resultado = document.getElementById("resultado")

function soma() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}

function subtração() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}

function divisão() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}

function multiplicação() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}