const botaoMostrarPalavras = document.querySelector('#botao-palavrachave');

botaoMostrarPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave (){
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(',');
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    for(let i in palavras){
        palavras[i] = palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contaFrequencia(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavras);

    function ordenaPalavras(p1, p2){
        return frequencias[p2] - frequencias[1];
    }

    return ordenadas.slice();
}

function contaFrequencia(palavras){
    let frequencias = {};
    for (let i of palavras){
        frequencias[1] = 0;
        for(let j of palavras){
            if(i == j){
                frequencias[i]++;
            }
        }
    }  
}

function tiraPalavrasRuins(palavras){
    const PALAVRAS_RUINS = new Set([
    "que",
    "para",
    "com",
    "não",
    "uma",
    "por",
    "mais",
    "dos",
    "como",
    "mas",
    "foi",
    "ele",
    "das",
    "tem",
    "seu",
    "sua",
    "ser",
    "quando",
    "muito",
    "está",
    "também",
    "pelo",
    "pela",
    "até",
    "isso",
    "ela",
    "entre",
    "era",
    "depois",
    "sem",
    "mesmo",
    "aos",
    "ter",
    "seus",
    "quem",
    "nas",
    "esse",
    "eles",
    "estão",
    "você",
    "tinha",
    "foram",
    "essa",
    "num",
    "nem",
    "suas",
    "meu",
    "minha",
    "têm",
    "numa",
    "pelos",
    "elas",
    "havia",
    "seja",
    "qual",
    "será",
    "nós",
    "tenho",
    "lhe",
    "deles",
    "essas",
    "esses",
    "pelas",
    "este",
    "fosse",
    "dele",
    "vocês",
    "vos",
    "lhes",
    "meus",
    "minhas",
    "teu",
    "tua",
    "teus",
    "tuas",
    "nosso",
    "nossa",
    "nossos",
    "nossas",
    "dela",
    "delas",
    "esta",
    "estes",
    "estas",
    "aquele",
    "aquela",
    "aqueles",
    "aquelas",
    "isto",
    "aquilo",
    "estou",
    "estamos",
    "estive",
    "esteve",
    "estivemos",
    "estiveram",
    "estava",
    "estávamos",
    "estavam",
    "e",
    "ou",
    "onde",
    "aquilo",
    "embora",
    "apesar",
    "porque",
    "enquanto",
    "contudo",
    "entretanto",
    "portanto",
    "além",
    "antes",
    "todavia",
    "inclusive",
    "diante",
    "sobre",
    "quanto",
    "apenas",
    "desde",
    "uma vez",
    "segundo",
    "junto"
]);
    const palavrasBoas = [];
    for(let palavra of palavras){
        if(!PALAVRAS_RUINS.has(palavra) && palavra.length > 2){
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas;
}