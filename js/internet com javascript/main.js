function botao() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    // alert("Obrigado por clicar")
}

function redirecionar(){
    // window.open("https://www.google.com")
    window.location.href = "https://www.google.com"
}

function colorir(colorir) {
    //document.getElementById("mouseover").style.backgroundColor = "blue"
    colorir.style.backgroundColor = "blue"
}

function descolorir(colorir) {
    //document.getElementById("mouseover").style.backgroundColor = "initial"
    colorir.style.backgroundColor = "initial"
}

function load() {
    alert("Olá "+ nome + "!")
}

function funcaoEscolher(choose) {
    console.log(choose.value)

}

/* function vlIdade(idade) {
    var validar
    
    if(idade >= 18) {
        var validar = true;
    } else {
        var validar = false;
    }

    return validar
}

var idade = prompt("Qual sua idade")
console.log(vlIdade(idade)) */

// function soma(n1,n2) {
//     return n1 + n2;
// }

// alert(soma(5,10));

// var d = new Date();
// alert(d.getMonth()+1)
// alert(d.getDay())
// alert(d.getHours())
// alert(d.getMinutes())

/* var count
for(count = 0; count <= 5; count ++){
    alert(count);
} */

/* var count = 0
while(count <= 5) {
    console.log(count);
    count++;
} */

var nome = prompt("Eai, pode me dizer o seu nome?")
var nus = document.querySelector('.n-cg')

 if(nome.length !== 0 && nome.length > 2) {
    nus.innerHTML = nome
 } else {
     alert('Então... precisamos do seu nome ou um nome válido para personalizar esse site.')
}


/* var idade = prompt("Qual sua idade?")
 if (idade > 18) {
     alert("maior de idade");
 }else {
     alert("menor de idade")
 }; */

// Dicionário - list array

// var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
// console.log(frutas)
// alert(frutas[1].nome)

// --------------------------------------------------

// var fruta = {nome: "maçã", cor: "vermelha"}
// console.log(fruta.nome)
// alert(fruta.cor)

// var list = ['maçã', 'pêra', 'laranja'];
// list.push("uva");
// list.pop();
// console.log(list);
// console.log(list.toString());
// console.log(list.join(" - "));