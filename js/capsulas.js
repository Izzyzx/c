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

        titulo: "Que dia foi o nosso primeiro beijo, baby shark?",

        senha: "12/04/2025", 

        dica: "Pssiu... 🤭 foi na sua casa",

        texto: `
        Você lembrou hihi

        Então eu tenho certeza
        de que esse momento também
        é especial para você.

        
        `
    }

];


const lista = document.getElementById("listaCapsulas");


capsulas.forEach((capsula) => {

    const card = document.createElement("div");

    card.className = "capsula";


    /* =========================
       CÁPSULA DO FUTURO
    ========================= */

    if (capsula.tipo === "tempo") {

        card.innerHTML = `

            <div class="icone-capsula">
                🔒
            </div>

            <h2>${capsula.titulo}</h2>

            <p>
                Esta cápsula só poderá ser aberta em
                <strong>${formatarData(capsula.data)}</strong>.
            </p>

            <button onclick="abrirTempo('${capsula.data}', this)">
                Tentar abrir
            </button>

            <p class="mensagem-capsula"></p>

        `;

    }


    /* =========================
       CÁPSULA DA MEMÓRIA
    ========================= */

    else {

        card.innerHTML = `

            <div class="icone-capsula">
                🔒
            </div>

            <h2>${capsula.titulo}</h2>

            <p>
                Uma lembrança escondida
                especialmente para você.
            </p>

            <button onclick="mostrarMemoria(this)">
                Abrir cápsula
            </button>

            <div class="area-memoria">

                <p class="dica-memoria"></p>

                <label>
                    Qual é a senha?
                </label>

                <input
                    type="text"
                    class="campo-chave"
                    placeholder="dia/mês/ano"
                    maxlength="10"
                    oninput="formatarCampoData(this)"
                >

                <button onclick="verificarMemoria(this)">
                    🔓 Desbloquear
                </button>

                <p class="resultado-memoria"></p>

            </div>

        `;

        card.dataset.chave = capsula.senha;
        card.dataset.texto = capsula.texto;
        card.dataset.dica = capsula.dica;

    }


    lista.appendChild(card);

});


/* =========================
   CÁPSULA DO FUTURO
========================= */

function abrirTempo(data, botao) {

    const hoje = new Date();

    const liberar = new Date(data + "T00:00:00");

    const mensagem = botao
        .parentElement
        .querySelector(".mensagem-capsula");


    if (hoje >= liberar) {

        mensagem.textContent =
            "🔓 A cápsula foi desbloqueada!";

    }

    else {

        mensagem.textContent =
            `🔒 Ainda não chegou a hora...`;

    }

}


/* =========================
   MOSTRAR CÁPSULA DA MEMÓRIA
========================= */

function mostrarMemoria(botao) {

    const card = botao.parentElement;

    const area = card.querySelector(".area-memoria");

    const dica = card.querySelector(".dica-memoria");


    area.classList.add("visivel");


    /*
        A dica aparece depois de alguns segundos.
    */

    setTimeout(() => {

        dica.textContent =
            "Pssiu... 🤭 Quer uma dica? foi na sua casa";

        dica.classList.add("visivel");

    }, 4000);

}


/* =========================
   VERIFICAR CHAVE
========================= */

let tentativasMemoria = 0;

function verificarMemoria(botao) {

    const card = botao.parentElement.parentElement;

    const campo = card.querySelector(".campo-chave");

    const resultado = card.querySelector(".resultado-memoria");

    const chaveCorreta = card.dataset.chave;

    const texto = card.dataset.texto;


    const resposta = campo.value.trim();


    if (resposta === chaveCorreta) {

        resultado.textContent =
            "🔓 Cápsula desbloqueada! 💖";


        resultado.classList.add("correto");


        setTimeout(() => {

    abrirModalCapsula(texto);

}, 400);
    }

   else {

    tentativasMemoria++;

    if (tentativasMemoria === 1) {

        resultado.textContent =
            "🔒 Hmm... essa não é a senha, amor";

    }

    else if (tentativasMemoria === 2) {

        resultado.textContent =
            "Não foi dessa vez... tenta lembrar";

    }

    else if (tentativasMemoria === 3) {

        resultado.textContent =
            "👀 Hmmm... você está esquecendo alguma coisa";

    }

    else if (tentativasMemoria === 4) {

        resultado.textContent =
            "💡 Última tentativa... lembra do dia especial";

    }

    else {

        resultado.textContent =
            " Baby Shark, você realmente esqueceu? KKKKK";

    }

    resultado.classList.remove("correto");
}
}


/* =========================
   FORMATAR DATA
========================= */

function formatarData(data) {

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}

function formatarCampoData(campo) {

    let valor = campo.value.replace(/\D/g, "");

    if (valor.length > 2) {
        valor =
            valor.substring(0, 2) +
            "/" +
            valor.substring(2);
    }

    if (valor.length > 5) {
        valor =
            valor.substring(0, 5) +
            "/" +
            valor.substring(5, 9);
    }

    campo.value = valor;
}

function abrirModalCapsula(texto) {

    const modal = document.getElementById("modalCapsula");

    const textoModal = document.getElementById("modalCapsulaTexto");

    textoModal.innerHTML = texto.replace(/\n/g, "<br>");

    modal.style.display = "flex";

}


function fecharModalCapsula() {

    const modal = document.getElementById("modalCapsula");

    modal.style.display = "none";

}