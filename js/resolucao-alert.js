function exec01() {
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

  const dia = parseInt(prompt("Digite o dia (1-31):"));
  const mes = parseInt(prompt("Digite o mês (1-12):"));
  const ano = parseInt(prompt("Digite o ano (até 2025):"));

  const valido = ehDataValida(dia, mes, ano);
  alert(`Data ${dia}/${mes}/${ano} é ${valido ? "válida" : "inválida"}.`);
}

function exec02() {
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

  alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
}

function exec03() {
  const frase = prompt("Digite uma frase:");
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
  alert("Palavras únicas: " + JSON.stringify(unicas));
}

function exec04() {
  function fatorial(n) {
    if (n < 0) {
      alert("Número negativo não tem fatorial.");
      return null;
    }
    if (n === 0) return 1;
    return n * fatorial(n - 1);
  }

  const n = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
  const resultado = fatorial(n);
  if (resultado !== null) alert(`Fatorial de ${n} é ${resultado}`);
}

function exec05() {
  alert(`Exercício 05 - Debounce

Função debounce recebe outra função e um delay (ms) e retorna uma nova função
Favor analisar o código fonte na outra aba, para entender seu funcionamento.`);
}

function exec06() {
  alert(`Exercício 06 - Memoization

Função memoize armazena resultados de chamadas anteriores para evitar cálculos repetidos.
Favor analisar o código fonte na outra aba, para entender seu funcionamento.`);
}

function exec07() {
  const input = prompt("Digite os produtos no formato nome:preco separados por vírgula.\nExemplo: arroz:20,feijao:15,pao:7");
  if (!input) {
    alert("Nenhum dado informado.");
    return;
  }

  const produtos = input.split(",").map(item => {
    const [nome, preco] = item.split(":");
    return { nome: nome.trim(), preco: parseFloat(preco) };
  });

  const nomesOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco).map(p => p.nome);
  alert("Nomes ordenados por preço crescente:\n" + nomesOrdenados.join(", "));
}

function exec08() {
  alert("Informe as vendas no formato cliente:total, separadas por vírgula.\nExemplo: Ana:100,Beto:200,Ana:150");

  const input = prompt("Digite as vendas:");
  if (!input) {
    alert("Nenhum dado informado.");
    return;
  }

  const vendas = input.split(",").map(item => {
    const [cliente, total] = item.split(":");
    return { cliente: cliente.trim(), total: parseFloat(total) };
  });

  const agrupado = vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});

  let resultado = "Totais por cliente:\n";
  for (const cliente in agrupado) {
    resultado += `${cliente}: ${agrupado[cliente].toFixed(2)}\n`;
  }
  alert(resultado);
}

function exec09() {
  alert("Digite pares no formato chave:valor separados por vírgula.\nExemplo: nome:João,idade:30");

  const input = prompt("Digite os pares:");
  if (!input) {
    alert("Nenhum dado informado.");
    return;
  }

  const pares = input.split(",").map(item => {
    const [chave, valor] = item.split(":");
    return [chave.trim(), valor.trim()];
  });

  const obj = Object.fromEntries(pares);
  const paresDeVolta = Object.entries(obj);

  alert("Objeto criado:\n" + JSON.stringify(obj, null, 2) +
        "\n\nArray de pares retornado:\n" + JSON.stringify(paresDeVolta, null, 2));
}
