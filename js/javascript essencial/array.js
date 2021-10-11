const users = ['Larissa', 'Igor', 'Ana']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const people = [
    {
        name: 'Larissa',
        age: 24,
        gender: gender.WOMAN
    },
    {
        name: 'Igor',
        age: 14,
        gender: gender.MAN
    },
    {
        name: 'Ana',
        age: 21,
        gender: gender.WOMAN
    }
]

//Retornar a quantidade de itens de um array de quantidades
// console.log('Items:', people.length);

//Verificar se é arrays
// console.log('A variável people é um array:', Array.isArray(people));

//Iterar os itens do array
// people.forEach((people, index, arr) => {
//     console.log(`Nome: ${people.name}, index ${index},`, arr)
// })

//Filtrar arrays
// const mens = people.filter(people => people.gender === gender.MAN)
// console.log('\nNova lista apenas com homens:\n', mens)

//Retorna um novos
// const peopleWithCourse = people.map(people => {
//     person.course = 'Introdução ao Javascript'
//     return people
// })

// console.log('\nPessoas com a adição do course:', personWithCourse)

//Transformar um array em outro tipo
// const totalAge = people.reduce((age, people) => {
//     age += people.age
//     return age;

// }, 0)

// console.log('\nA soma de todas as idades é:',totalAge)

//Juntando operações
const totalEvenAges = people.filter(people => people.age % 2 === 0)
                            .reduce((age, people) => {
                                age += people.age;
                                return age;
                            }, 0)
                    
console.log('\nSoma de idades das pessoas que possuem idade par é:', totalEvenAges)