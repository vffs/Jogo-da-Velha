const jogador1 = "X";
const jogador2 = "O";
var jogadorVez = jogador1;
var gameOver = false;
var ws = null;

onload = init;

function init() {
    atualizarMostrador();
    inicializarEspacos();


    
}
function atualizarMostrador() {
    if (gameOver) {
        return;
    }
    if (jogadorVez === jogador1) {
        var jogador = document.querySelectorAll("div#mostrador img")[0];
        jogador.setAttribute("src", "img/x.png");
    } else {
        var jogador = document.querySelectorAll("div#mostrador img")[0];
        jogador.setAttribute("src", "img/o.png");
    }
}

function inicializarEspacos() {
    var espacos = document.getElementsByClassName("espaco");

    for (var i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function () {
            if (gameOver) {
                return;
            }
            if (this.getElementsByTagName("img").length === 0) {

                if (jogadorVez === jogador1) {

                    this.innerHTML = "<img src='img/x.png' height='50'>";
                    this.setAttribute("jogada", jogador1);
                    jogadorVez = jogador2;

                } else {

                    this.innerHTML = "<img src='img/o.png' height='50'>";
                    this.setAttribute("jogada", jogador2);
                    jogadorVez = jogador1;
                }
                atualizarMostrador();
                verificarVencedor();
            }


        });
    }
}

function verificarVencedor() {

    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    vencedor = "";

    if (((a1 === a2 && a1 === a3) || (a1 === b1 && a1 === c1) || (a1 === b2 && a1 === c3)) && a1 !== "") {
        vencedor = a1;
    } else if (((b2 === b1 && b2 === b3) || (b2 === a2 && b2 === c2) || (b2 === a3 && b2 === c1)) && b2 !== "") {
        vencedor = b2;
    } else if (((c3 === c1 && c3 === c2) || (c3 === a3 && c3 === b3)) && c3 !== "") {
        vencedor = c3;
    }


    if (vencedor !== "") {
        gameOver = true;
        var venc = "O ganhador foi o: '" + vencedor + "'";
        var resultado = document.getElementById("resultado");
        resultado.textContent = venc;

    }






}


