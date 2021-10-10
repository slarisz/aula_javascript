//Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log('Quantidade de letras:', textSize);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posição separadas pelo delimitador:', splittedText);

//Busca por valor e substitui por outro
const replacedText = 'Texto'.replace('Texto', 'otxeT');
console.log('\nSubstituição de valor:', replacedText);

//Retorne a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWithoutLastChart = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChart);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

const twoChartsBeforaFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', twoChartsBeforaFirstPos);
