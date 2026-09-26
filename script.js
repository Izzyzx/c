const botao = document.getElementById("entrar");

if (botao) {

    botao.addEventListener("click", () => {

        window.location.href = "pages/menu.html";

    });

}


// ===========================
// SAUDAÇÃO
// ===========================

// ===========================
// SAUDAÇÃO
// ===========================

const saudacao = document.getElementById("saudacao");

if (saudacao) {

    const hora = new Date().getHours();

    let periodo;

    if (hora < 12) {

        periodo = "Bom dia ";
    
       

    }

    else if (hora < 18) {

        periodo = "Boa tarde ";

    }

    else {

        periodo = "Boa noite";

    }


    const apelidos = [

        "amor",

         "meu amor",

        "meu bem",

        "minha musa",

        "amor da minha vida",

        "minha princesa",

        "baby shark",

        "meu amorzinho",

        "babie shark",

        "mandii",

        "aipimpim"

    ];



    const numero = Math.floor(
        Math.random() * apelidos.length
    );


    saudacao.innerHTML =
        periodo + ", " + apelidos[numero];

}

// ===========================
// FRASE ALEATÓRIA
// ===========================

const frase = document.getElementById("frase");

if (frase) {

    const frases = [

        "Hoje preparei uma surpresa para você. ",

        "Oioi vc voltou hihi",
         
        "Eu estava com saudades",

        "Ooi volte mais vezes, tabom ★",

        "Espero conseguir arrancar um sorriso seu. 🌸",

        "Você é minha casa ☁️",

        "Eu te amo mais do que amo o homem aranha 🕸️๋࣭ ⭑",

        "Sabia que nesse exato momento eu estou pensando em vc? 💌",

        "Seja bem-vinda ao nosso cantinho. ✨"

    ];

    const numero = Math.floor(Math.random() * frases.length);

    frase.innerHTML = frases[numero];

}


// ===========================
// SEGREDO
// ===========================

const titulo = document.getElementById("titulo");

const popup = document.getElementById("segredo");

const fechar = document.getElementById("fechar");


if (titulo && popup) {

    let cliques = 0;

    titulo.addEventListener("click", () => {

        cliques++;

        if (cliques === 16) {

            popup.style.display = "flex";

            cliques = 0;

        }

    });

}


if (fechar && popup) {

    fechar.addEventListener("click", () => {

        popup.style.display = "none";

    });

}


// ===========================
// ABRIR PÁGINAS
// ===========================

function abrirPagina(nome) {

    window.location.href = nome + ".html";

}


// ===========================
// PRIMEIRO ACESSO
// ===========================

window.onload = function () {

    const primeiro = localStorage.getItem("primeiroAcesso");

    const boasVindas = document.getElementById("boasVindas");

    if (boasVindas && primeiro !== "sim") {

        boasVindas.style.display = "flex";

    }

};


// ===========================
// ENTRAR NO APP
// ===========================

function entrarApp() {

    localStorage.setItem("primeiroAcesso", "sim");

    const boasVindas = document.getElementById("boasVindas");

    if (boasVindas) {

        boasVindas.style.display = "none";

    }

}


// ===========================
// MODAL
// ===========================

function abrirModal(titulo, texto) {

    document.getElementById("modalTitulo").innerHTML = titulo;

    document.getElementById("modalTexto").innerHTML = texto;

    document.getElementById("modal").style.display = "flex";

}


function fecharModal() {

    document.getElementById("modal").style.display = "none";

}

function emBreve(nome) {

    const modal = document.getElementById("modal");

    const titulo = document.getElementById("modalTitulo");

    const texto = document.getElementById("modalTexto");


    if (modal && titulo && texto) {

        titulo.innerHTML = nome + " ✨";

        texto.innerHTML =
            "Essa parte ainda está sendo preparada com muito carinho. <br><br>" +
            "Em breve estará disponível para você okei";

        modal.style.display = "flex";

    }

}