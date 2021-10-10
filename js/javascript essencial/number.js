const myNumber = 12.869

//Transformar número para string para
const numberAsString = myNumber.toString()
console.log('Número transformado em string: ', typeof numberAsString)

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals)

//Transforma uma string em float para
console.log('\nString parseada para float ', parseFloat('13.22'))

//Transforma uma string em integer para
console.log('\String parseada para int: ', parseInt('13.20'))
