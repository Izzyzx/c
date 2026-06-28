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