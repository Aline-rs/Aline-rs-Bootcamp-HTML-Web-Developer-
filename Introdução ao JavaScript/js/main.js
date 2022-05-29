/*
var nome = "Aline Rosa";
var idade = 23;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"))
alert(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase) //todas as letras em maiúsculo
console.log(frase.toLowerCase) // Todas as letras em minusculo
*/

//var lista = ["maça", "pêra","laranja"]
//lista.push("uva"); Adiciona um item
//lista.pop() Retira um item
//console.log(lista.length) Informa o tamanho do array
//console.log(lista.reverse) Exibe o array ao contrário
//console.log(lista.toString) Exibe o conteúdo em formato de string
//console.log(lista.join(" - ")) Altera o divisor entre as palavras
/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta);
console.log(fruta.cor);
*/

//var frutas = [{nome: "maça", cor: "vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);

/*var idade = prompt("Qual a sua idade?")
if(idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade")
};*/
/*
var count = 5;
while (count < 5){
    console.log(count)
    count++ //Ele recebe ele mesmo +1 -> é igual a count = count+1
}*/
/*
var count;
for(count = 1; count <= 5, count++){
    alert(count);
}

var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay)
alert(d.getHours)
alert(d.getMinutes)

function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

var validar = 0; //Variavel global
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else(
        validar = false
    )
    return validar;
}

var idade = prompt("Qual a sua idade?")
validaIdade(idade);
console.log(validar)
*/

function clicou(){
    //alert("Obrigado por clicar!")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento")
}

function redirecionar(){
    window.open("https://globallabs.academy/"); //Abre em outra guia
    window.location.href = "https://globallabs.academy/" //abre a pagina na mesma guia
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}