// let nome = prompt("Digite um nome")

//  COMPARAÇÃO
// == SE O VALOR É IGUAL
// === SE O VALOR E O TIPO SÃO IGUAIS
// console.log(3 === "3")
// != diferente
// || OU 
// && E
//CONDICIONAL 
// if(condicao){
// executa
// }
// else if(condicao){
// executa
//}
//else{
// executa
//}
// if(nome == "Vitor"){
//     console.log("if 1")
//     alert("Você é muito bonito")
// }
// else if(nome == "José"){
//     console.log("if 2")
//     alert("Você não é bonito")
// }
// else{
//     console.log("else")
//     alert(`seu nome é ${nome}`)
// }
// if(nome != "Maria"){
//     alert("Seu nome deve ser Maria")
// }
// if(nome == "Anderson" || nome == "Pedro"){
//     alert("VOcê ganhou o prêmio")
// }
// if(nome.toLowerCase() == "anderson" && 1>0){
//     alert("Parabens!")
// }

let operador = prompt(`Digite uma opção,
    1 - soma, 
    2 - subtração, 
    3 - multiplicação, 
    4 - divisão`)
if(operador != "1" && operador != "2" && operador != "3" && operador != "4"){
    alert("Operação inválida")
}else {
    alert(operador)
}

function calcular() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const operacao = prompt("Digite a operação (+, -, *, /):");
    const num2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Erro: Por favor, insira números válidos.");
        return;
    }

    let resultado;
    if (operacao === '+') {
        resultado = num1 + num2;
    } else if (operacao === '-') {
        resultado = num1 - num2;
    } else if (operacao === '*') {
        resultado = num1 * num2;
    } else if (operacao === '/') {
        if (num2 === 0) {
            alert("Erro: Não é possível dividir por 0.");
            return;
        }
        resultado = num1 / num2;
    } else {
        alert("Erro: Operação inválida. Use +, -, * ou /.");
        return;
    }

    alert(`O resultado de ${num1} ${operacao} ${num2} é: ${resultado}`);
}

 calcular();