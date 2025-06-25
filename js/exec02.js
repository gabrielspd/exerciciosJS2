function exec02() {
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0; 
    let palpite;

    while (palpite !== numeroSorteado) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    tentativas++;
    if (isNaN(palpite)) {
        alert("Por favor, digite um número válido.");
    } else if (palpite < numeroSorteado) {
        alert("Mais alto!");
    } else if (palpite > numeroSorteado) {
        alert("Mais baixo!");
    } else {
        alert(`Parabéns! O número era ${numeroSorteado}. Você acertou em ${tentativas} tentativa(s).`);
    }
    }
}
