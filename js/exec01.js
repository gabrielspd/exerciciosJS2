function ehDataValida(dia, mes, ano) {
    if (ano <= 0 || ano > 2025) {
    return false;
    }

    if (mes < 1 || mes > 12) {
    return false;
    }

    const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    const diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes === 2 && ehBissexto) {
    diasMes[1] = 29;
    }

    if (dia < 1 || dia > diasMes[mes - 1]) {
    return false;
    }
    return true;
}


// console.log(ehDataValida(29, 2, 2024)); true
// console.log(ehDataValida(29, 2, 2023)); false
// console.log(ehDataValida(24, 06, 2025)); true