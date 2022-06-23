const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: "dev"
}

pessoa.idade = 34;

const larissa: {nome: string, idade: number, profissao: string} = {
    nome: "Larissa",
    idade: 18,
    profissao: 'tester'
}


interface Pessoa {
    nome: string, idade: number, profissao?: Profissao
}

enum Profissao {
    Teacher,
    Plumber,
    Developer
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Plumber
}

interface Estudante extends Pessoa {
    materias: string[]
}

const leonardo: Estudante = {
    nome: "Leonardo",
    idade: 16,
    materias: ['Matematica', 'Portugues']
}

const maria: Estudante = {
    nome: "Maria",
    idade: 26,
    materias: ['Estatistica', 'Ciencias', 'Ingles']
}

function listarMaterias(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listarMaterias(maria.materias);