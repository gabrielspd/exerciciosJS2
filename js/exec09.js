function paresParaObjeto(pares) {
return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
return Object.entries(obj);
}

function exec09() {
const pares = [["nome", "Gabriel"], ["idade", 27]];
const obj = paresParaObjeto(pares);
const paresNovos = objetoParaPares(obj);

return { obj, paresNovos };
}
