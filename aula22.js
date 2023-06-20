

let cep = prompt("Digite seu CEP:")
let url = "https://viacep.com.br/ws/" + cep + "/json/"

fetch(url)
    .then(response => response.json())
    .then(response => exibir(response))

function exibir(dados) {
    console.log(dados)
}

