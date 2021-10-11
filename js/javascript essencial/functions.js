function fn() {
    return 'Code here'
}

const arrowFn = () => 'Code here'
const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Code here'; //return deve ser explícito
}

//Funções também são objetos
fn.prop = 'Posso criar propridades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

logFnResult(fn);

//Receber e retornar funções
const controlFnExec => fnParam => allowed => {
    if(allowed) {
        fnParam()
    }
}

const handleFnExec = controlFnExec(fn);

handleFnExec(true); //Executará a função fn
handleFnExec(); //Não executará a função fn

//controlFnExec como função func
function controlFnExec(fnParam) {
    return function(allowed){
        if(allowed) {
            fnParam();
        }
    }
}