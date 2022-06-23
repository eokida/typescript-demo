let valor = document.getElementById('valor') as HTMLInputElement;
let btnAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let btnLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let saldoFinal = document.getElementById('campo-saldo') as HTMLElement;

saldoFinal.innerHTML='0'

function limparSaldo(): void {
    saldoFinal.innerHTML='';
}
function somarAoSaldo(num: number): void {
    let soma =+ Number(saldoFinal.innerHTML)+num;
    saldoFinal.innerHTML = soma.toString();
}
btnLimpar.addEventListener('click', () => limparSaldo());
btnAtualizar.addEventListener('click', () => somarAoSaldo(Number(valor.value)))