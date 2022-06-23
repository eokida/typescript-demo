const container = document.getElementById('contain')

container.addEventListener('click', () => {
    console.log('teeste');
} )

function mostraErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}
mostraErro('Ooops',500)
