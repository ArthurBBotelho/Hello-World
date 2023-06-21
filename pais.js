let pais = document.getElementById("pais")

function exibirBandeira() {
    fetch("https://restcountries.com/v3.1/name/" + pais.value)
        .then(response => response.json())
        .then(response => exibir(response))


}

function exibir(bandeira) {
    let imgFlag = document.getElementById("flag")
    imgFlag.innerText = ""
    let flag = document.createElement("img")
    console.log(bandeira)
    flag.src = bandeira[0].flags.png
    imgFlag.append(flag)
}

