function memoize(fn) {
const cache = {};

return function (...args) {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
    return cache[key];
    }

    const resultado = fn.apply(this, args);
    cache[key] = resultado;
    return resultado;
};
}

//teste do memoize
function exec06() {

function soma(a, b) {
    return a + b;
}

const somaMemo = memoize(soma);

  somaMemo(2, 3); // Calculando normal
  somaMemo(2, 3); // Usa cache
}
