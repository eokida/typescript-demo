type input = number | string;

function juntar(input1: input, input2: input) {
    let resultado: input;
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        resultado = input1.toString() + input2.toString();
    } else {
        resultado = input1 + input2
    }
    return resultado;
}

console.log(juntar(3, ' dias para comecar'));
console.log(juntar('minha nota e ', 2));
console.log(juntar(3, 2));