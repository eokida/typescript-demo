"use strict";

let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function somarNumeros(numero1: number, numero2: number, imprimir: boolean): number {
    if (imprimir)
        console.log('O resultado da soma e ' + (numero1+numero2));
    return numero1+numero2;
}

let imprimir = true;

if (button) {
    button.addEventListener('click', () => somarNumeros(Number(input1.value), Number(input2.value), imprimir));
}