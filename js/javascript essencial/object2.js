const user = {
    name: 'Larissa',
    lastName: 'Dória de Sousa'
};

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objetos
console.log('\nValores das propriedades do objeto user:', Object.values(user))

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propridades e valores:', Object.entries(user))

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Larissa Dória de Sousa'})

console.log('\nPropriedade inicial com nome completo mergeada:', user)
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos:', Object.assign({}, user, {age: 26}))
console.log(user)

//Bloqueia que todas as alterações em um objeto
const newObj = { foo: 'bar' }
Object.freeze(newObj)

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log('\nVariável newObj após as alterações:', newObj)

//Permite apenas a alteração de propriedades existentes em um objetos
const person = { name: 'Larissa' }
Object.seal(person)

person.name = 'Larissa Sousa'
delete person.name
person.age = 26

console.log('Variável person após as alterações', person)

