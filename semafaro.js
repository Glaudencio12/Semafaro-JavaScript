var verde = document.getElementById("verde")
var amarelo = document.getElementById("amarelo")
var vermelho = document.getElementById("vermelho")
var auto = document.getElementById("automático")
var img = document.getElementById("imagem")


function mudarCor(cor) {
    img.src = "img/" + cor + ".png"
}

verde.onclick = function () { mudarCor('verde') }
amarelo.onclick = function () { mudarCor('amarelo') }
vermelho.onclick = function () { mudarCor('vermelho') }

function Auto() {
    setTimeout(function () {
        img.src = "img/vermelho.png"
        setTimeout(function () {
            img.src = "img/amarelo.png"
            setTimeout(function () {
                img.src = "img/verde.png"
            }, 6000);
        }, 6000);
    }, 6000);
}