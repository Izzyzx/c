const botao = document.getElementById("entrar");

botao.addEventListener("click", () => {

    window.location.href = "pages/menu.html";

});

const saudacao = document.getElementById("saudacao");

if(saudacao){

const hora = new Date().getHours();

if(hora < 12){

    saudacao.innerHTML = "Bom dia ☀";

}

else if(hora < 18){

    saudacao.innerHTML = "Boa tarde 🌷";

}

else{

    saudacao.innerHTML = "Boa noite 🌙";

}

}

const frase = document.getElementById("frase");

if(frase){

const frases = [

"Hoje preparei uma surpresa para você. 💖",

"Espero conseguir arrancar um sorriso seu. 🌸",

"Você é meu lugar favorito. ☁",

"Cada clique guarda um pedacinho de carinho. 💌",

"Seja bem-vinda ao nosso cantinho. ✨"

];

const numero = Math.floor(Math.random()*frases.length);

frase.innerHTML = frases[numero];

}

const titulo = document.getElementById("titulo");

const popup = document.getElementById("segredo");

const fechar = document.getElementById("fechar");

if(titulo){

let cliques = 0;

titulo.addEventListener("click",()=>{

cliques++;

if(cliques==16){

popup.style.display="flex";

cliques=0;

}

});

}

if(fechar){

fechar.addEventListener("click",()=>{

popup.style.display="none";

});

}
function abrirPagina(nome){

    window.location.href = nome + ".html";

}

// ===========================
// PRIMEIRO ACESSO
// ===========================

window.onload = function(){

    const primeiro = localStorage.getItem("primeiroAcesso");

    if(primeiro != "sim"){

        document.getElementById("boasVindas").style.display = "flex";

    }

}

function entrarApp(){

    localStorage.setItem("primeiroAcesso","sim");

    document.getElementById("boasVindas").style.display="none";

}

function abrirModal(titulo,texto){

    document.getElementById("modalTitulo").innerHTML = titulo;
    document.getElementById("modalTexto").innerHTML = texto;
    document.getElementById("modal").style.display = "flex";

}

function fecharModal(){

    document.getElementById("modal").style.display = "none";

}