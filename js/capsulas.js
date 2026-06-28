const capsulas = [

{
    tipo: "tempo",

    titulo: "Nosso Futuro",

    data: "2027-12-31",

    texto: `
Se você está lendo isso...

o futuro finalmente chegou.

Espero que ainda estejamos
colecionando momentos lindos.

💜
`
},

{
    tipo: "memoria",

    titulo: "Primeiro Beijo",

    chave: "12/04/2025",

    dica: "Pssiu... 🤭\nTalvez seja o dia do nosso primeiro beijo.",

    texto: `
Você lembrou!

Então eu tenho certeza
de que esse momento também
é especial para você.

💖
`
}

];

const lista = document.getElementById("listaCapsulas");

capsulas.forEach(capsula=>{

const card=document.createElement("div");

card.className="capsula";

if(capsula.tipo=="tempo"){

card.innerHTML=`

<h2>${capsula.titulo}</h2>

<p>🔒 Abre em ${capsula.data}</p>

<button onclick="abrirTempo('${capsula.data}','${capsula.texto}')">

Abrir

</button>

`;

}

else{

card.innerHTML=`

<h2>${capsula.titulo}</h2>

<p>🔑 Cápsula da Memória</p>

<button onclick="abrirMemoria('${capsula.chave}','${capsula.texto}','${capsula.dica}')">

Abrir

</button>

`;

}

lista.appendChild(card);

});

function abrirTempo(data,texto){

const hoje=new Date();

const liberar=new Date(data);

if(hoje>=liberar){

alert(texto);

}

else{

alert("🔒 Ainda não chegou a hora.");

}

}

function abrirMemoria(chave,texto,dica){

let resposta="";

let tentativas=0;

while(resposta!=null){

resposta=prompt("Digite a chave...");

if(resposta==null) return;

if(resposta==chave){

alert(texto);

return;

}

tentativas++;

if(tentativas==3){

alert(dica);

}

}

}