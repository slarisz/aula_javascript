//------VARIAVEIS------//

// não respeita o escopo de bloco
var escopoGlobal = 'primeira variável criada'

// respeitando o escopo de bloco
let escopoBloco1 = 'variável escopo de bloco {}'
const escopoBloco2 = 'variável escopo de bloco {}'

// escopo global

{
    // escopo bloco
}

function text() {
    // escopo de função
}

// exemplo var

var test = 'exemplo';

(() =>{
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        var test = 'exemplo';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`)
})();


// exemplo let e const

(() =>{
    let test = 'exemplo1';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        let test = 'exemplo 2';
        console.log(`Valor dentro do if "${test}"`);
    }

    if (true) {
        let test = 'exemplo 3';
        console.log(`Valor de outro if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`)
})();

(() =>{
    const test = 'exemplo1';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        const test = 'exemplo 2';
        console.log(`Valor dentro do if "${test}"`);
    }

    if (true) {
        const test = 'exemplo 3';
        console.log(`Valor de outro if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`)
})();


//particularidades do const

//Não podemos alterar o valor de um tipo primitivo, ex. abaixo: string
// const name = 'Guilherme';
// name = 'Guilherme';

//Tipo por ref.: objetos e/ou Arrays podemos alterar suas propriedades
const user = {
    name: 'Guilherme'
}
//ex:
user.name = 'Outro nome';
//Mas não podemos fazer o objeto "apontar" para outro lugar
// user = {
//     name: 'Guilherme'
// }

//Podemos adicionar, remover ou alterar novos itens
const people = ['Larissa', 'Pedro', 'Guilherme']

//add
people.push('João')

//remove
people.shift('João')

//altera
people[1] = 'Larissa'

console.log('\nArray após as alterações: ', people)

//------TIPOS------//
//tipo primitivos
 var string = 'Isso é uma string'

 var number = 0 //basicamente.. números

 var boolean = true && false // verdadeiro ou falso

 var nulo = null //Uma palavra-chave que indica valor nulo.

 var indefinido = undefined //Uma propriedade cujo a variável existe mas o seu valor ainda não foi definido

 var symbol = symbol //Um tipo de dado cuja as instâncias são únicas e imutáveis.

 //tipos 

 objeto = {
     //objeto
 }

//  function() {
//     //função
//  }

 array = [
     //Array
 ]




