function debounce(fn, delay) {
    let timerId;

    return function (...args) {
    if (timerId) {
        clearTimeout(timerId);
        console.log(`Reiniciado: aguardando mais ${delay}ms para executar...`);
    } else {
        console.log(`Primeira chamada após inatividade, aguardando ${delay}ms para executar a função...`);
    }

    timerId = setTimeout(() => {
        fn.apply(this, args);
        console.log("Função executada.");
        timerId = null;
    }, delay);
    };
}

function exec05() {
    function acao() {
    console.log("Função executada no horário:", new Date().toLocaleTimeString());
    }
    // ahk 2 segundos (2000)
    const acaoComDebounce = debounce(acao, 2000);
    
    acaoComDebounce();
}
