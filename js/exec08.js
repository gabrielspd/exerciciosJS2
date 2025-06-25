function exec08() {
const vendas = [
    { cliente: "João", total: 100 },
    { cliente: "Maria", total: 150 },
    { cliente: "João", total: 50 },
    { cliente: "Pedro", total: 200 },
];

const totalPorCliente = vendas.reduce((acc, venda) => { 
    if (!acc[venda.cliente]) {
    acc[venda.cliente] = 0;
    }
    acc[venda.cliente] += venda.total;
    return acc;
}, {});

return totalPorCliente;
}


// O map< funciona como um SELECT para pegar colunas específicas.
// O sort< é como um ORDER BY.
// O reduce< faz um papel parecido com GROUP BY e agregações, como SUM.