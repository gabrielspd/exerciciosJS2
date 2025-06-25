function exec03() {
    let texto = prompt("Digite uma frase:");
    let palavras = texto.split(" ");
    let unicas = [];

    for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];

    if (unicas.includes(palavraAtual)) {
        continue;
    }

    let contador = 0;

    for (let j = 0; j < palavras.length; j++) {
        if (palavraAtual === palavras[j]) {
        contador++;
        }
    }

    if (contador === 1) {
        unicas.push(palavraAtual);
    }
    }

    return unicas;
}
