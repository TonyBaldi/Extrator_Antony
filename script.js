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
    const frequencias = contaFrequencia(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavras);

    function ordenaPalavras(p1, p2){
        return frequencias[p2] - frequencias[1];
    }

    console.log(ordenadas);
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
    console.log(frequencias);   
}