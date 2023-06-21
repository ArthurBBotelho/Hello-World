let pais = document.getElementById("pais")

let bandeira

fetch("https://restcountries.com/v3.1/name/" + pais)
    .then(response => response.json())
    .then(response => exibir(response))

function exibirBandeira(bandeira) {
    let bandeira = document.createElement("img")
    document.body.append(bandeira)
}

