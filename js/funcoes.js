// funcoes.js

function mostrarResultado(texto) {
  const resultadoElemento = document.getElementById('resultado-texto');
  resultadoElemento.textContent = texto;
}

const codigoExec01 = `
function ehDataValida(dia, mes, ano) {
  if (ano < 0 || ano > 2025) return false;
  if (mes < 1 || mes > 12) return false;

  function anoBissexto(ano) {
    return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
  }

  const diasPorMes = [31, (anoBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dia < 1 || dia > diasPorMes[mes - 1]) return false;

  return true;
}
`;

function exec01() {
  mostrarResultado(codigoExec01);
}

const codigoExec02 = `
function jogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let palpite;

  do {
    palpite = parseInt(prompt("Adivinhe o número (1 a 100):"));
    tentativas++;

    if (palpite < numeroSecreto) {
      alert("Mais alto!");
    } else if (palpite > numeroSecreto) {
      alert("Mais baixo!");
    }
  } while (palpite !== numeroSecreto);

  alert(\`Parabéns! O número era \${numeroSorteado}. Você acertou em \${tentativas} tentativa(s).\`);
}
`;

function exec02() {
  mostrarResultado(codigoExec02);
}

const codigoExec03 = `
function palavrasUnicas(frase) {
  const palavras = frase.split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavraAtual = palavras[i];
    if (unicas.includes(palavraAtual)) continue;

    let contador = 0;
    for (let j = 0; j < palavras.length; j++) {
      if (palavraAtual === palavras[j]) contador++;
    }

    if (contador === 1) unicas.push(palavraAtual);
  }

  return unicas;
}
`;

function exec03() {
  mostrarResultado(codigoExec03);
}

const codigoExec04 = `
function fatorial(n) {
  if (n < 0) throw new Error("Número negativo não tem fatorial");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
`;

function exec04() {
  mostrarResultado(codigoExec04);
}

const codigoExec05 = `
function debounce(fn, delay) {
  let timerId;

  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
      console.log(\`Reiniciado: aguardando mais \${delay}ms para executar...\`);
    } else {
      console.log(\`Aguardando \${delay}ms para executar a função...\`);
    }

    timerId = setTimeout(() => {
      fn.apply(this, args);
      console.log("Função executada.");
      timerId = null;
    }, delay);
  };
}
`;

function exec05() {
  mostrarResultado(codigoExec05);
}

const codigoExec06 = `
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const resultado = fn.apply(this, args);
    cache.set(key, resultado);
    return resultado;
  };
}
`;

function exec06() {
  mostrarResultado(codigoExec06);
}

const codigoExec07 = `
function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}
`;

function exec07() {
  mostrarResultado(codigoExec07);
}

const codigoExec08 = `
function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}
`;

function exec08() {
  mostrarResultado(codigoExec08);
}

const codigoExec09 = `
function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}
`;

function exec09() {
  mostrarResultado(codigoExec09);
}

document.getElementById('btnAlert').addEventListener('click', () => {
  window.location.href = 'resolucao-alert.html'; 
});
