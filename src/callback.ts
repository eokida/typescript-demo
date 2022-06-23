function somar(num1: number, num2: number): number {
    return num1 + num2;
}

function aoQuadrado(num1: number, callback: (num: number, num1: number) => number): number {
    let res = num1**2;
    return callback(num1, res);
}

function calcularEImprimir(): void {
    let res = aoQuadrado(2, somar);
    console.log(res);
}

calcularEImprimir()