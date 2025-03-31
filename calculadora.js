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

// let operador = prompt(`Digite uma opção,
//     1 - soma, 
//     2 - subtração, 
//     3 - multiplicação, 
//     4 - divisão`)
// if(operador != "1" && operador != "2" && operador != "3" && operador != "4"){
//     alert("Operação inválida")
// }else {
//     alert(operador)
// }

   // function calcular() {
    //const num1 = parseFloat(prompt("Digite o primeiro número:"));
    //const operacao = prompt("Digite a operação (+, -, *, /):");
    //const num2 = parseFloat(prompt("Digite o segundo número:"));

    //if (isNaN(num1) || isNaN(num2)) {
       // alert("Erro: Por favor, insira números válidos.");
       // return;
   // }

    //let resultado;
   // if (operacao === '+') {
       // resultado = num1 + num2;
   // } else if (operacao === '-') {
       // resultado = num1 - num2;
   // } else if (operacao === '*') {
        //resultado = num1 * num2;
   // } else if (operacao === '/') {
        //if (num2 === 0 || num1===0) {
           // alert("Erro: Não é possível dividir por 0.");
           // return;
       // }
       // resultado = num1 / num2;
    //} else {
        //alert("Erro: Operação inválida. Use +, -, * ou /.");
       // return;
    //}

    //alert(`O resultado de ${num1} ${operacao} ${num2} é: ${resultado}`);
 //}
 //calcular()


 // ATIVIDADE 1

 // DESENVOLVA UM ALGORITIMO QUE INVERTE UMA PALAVRA, E EXIBA DE TRÁS PARA FRENTE.
 // PODE SER USADO O PROMPT/ALERT OU SOMENTE O CONSOLE.LOG EXEMPLO : "banana" - "ananab"

 // let palavra = "banana da terra" // length = 6 index= 5
 // let resultado = ""

 // for(let i = palavra.length -1; i >= 0; i--){
 //     // console.log(palavra[i])
 //     //resultado = resultado + palavra[i]
 //     resultado += palavra[i]
 // }
 // console.log(resultado)


 // ATIVIDADE 2

 // DESENVOLVA UM ALGORITMO QUE RECEBE UMA PALAVRA OU FRASE, 
 // E EXIBA ELA DA SEGUINTE FORMA
 // SE O INDEX DELA FOR PAR, O CARACTER DEVE SER MAIÚSCULO, 
 // SE O INDEX FOR ÍMPAR O CARACTER 
 // DEVE SER MINÚSCULO EXEMPLO : "algoritmo" -> "AlGoRiTmO"

 // let palavra = "banana"
 // let resultado = ""

 // for(let i =0;i<palavra.length;i++){
    
 //     if(i % 2 ==0 ){
 //         resultado += palavra[i].toUpperCase()
 //     }else{
 //         resultado += palavra[i].toLowerCase()
 //     }   
 // }
 // console.log(resultado)

 // ATIVIDADE 3

 // -DESENVOLVA UM ALGORITMO QUE RECEBE UM ARRAY DE NÚMEROS 
 // -SE O NÚMERO FOR DIVISÍVEL POR 3 EXIBA A PALAVRA "plic" 
 // -SE O NÚMERO FOR DIVISÍVEL POR 5 EXIBA A PALAVRA "plac" 
 // -SE O NÚMERO FOR DIVISÍVEL POR 3 E POR 5 EXIBA A PALAVRA "boom" 
 // -SE O NÚMEOR NÃO FOR DIVISEL NEM POR 3 E NEM POR 5, 
 // SOMENTE EXIBA O NÚMERO -O RESULTADO DEVE SER EXIBIDO 
 // EM UM ARRAY
 //  EXEMPLO : [1,2,3,4,5,6,7,8,9,15] -> 
 //  [1,2,"plic",4,"plac",6,7,8,"plic","boom"]

 // let lista = [1,2,3,4,5,6,7,8,9,15]
 // let resultado = []

 // for(let i =0; i<lista.length; i++){
 //     if(lista[i] % 3 == 0 && lista[i] % 5 ==0){
 //         resultado.push("boom")
 //     }else if(lista[i] % 3 == 0){
 //         resultado.push("plic")
 //     }else if(lista[i] % 5 ==0){
 //         resultado.push("plac")
 //     }else {
 //         resultado.push(lista[i])
 //     }
 // }   
 // console.log(resultado)





 // ATIVIDADES

 // 1- DESENVOLVA UM ALGORITIMO QUE SIMULE UM EMPRÉSTIMO
 //  - O NÚMERO DEVE INSERIR O VALOR DESEJADO DE EMPRÉSTIMO
 //  - O NÚMERO DE PARCELAS
 //  - OS JUROS EM CADA PARCELA

 //  - NO FINAL VOCE DEVE EXIBIR:
 //  - VALOR FINAL DO EMPRÉSTIMO COM OS JUROS
 //  - VALOR DE CADA PARCELA COM OS JUROS
 //  - NÚMEORO DE PARCELAS

//  let valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo desejado: R$"));
//  let numParcelas = parseInt(prompt("Digite o número de parcelas:"));
//  let juros = parseFloat(prompt("Digite a taxa de juros por parcela (%):"));

//  // Calcula o valor de cada parcela com os juros
//  let parcelaComJuros = valorEmprestimo * (1 + (juros / 100)) / numParcelas;

//  // Calcula o valor final do empréstimo com os juros
//  let valorFinal = parcelaComJuros * numParcelas;

//  // Exibe os resultados
//  console.log(`Valor do empréstimo: R$ ${valorEmprestimo}`);
//  console.log(`Número de parcelas: ${numParcelas}`);
//  console.log(`Taxa de juros por parcela: ${juros}%`);
//  console.log(`Valor de cada parcela (com juros): R$ ${parcelaComJuros.toFixed(2)}`);
//  console.log(`Valor total do empréstimo com juros: R$ ${valorFinal.toFixed(2)}`);



//  // 2- DESENVOLVA UM ALGORITIMO QUE RECEBE UMA PALAVRA DIGITADA PELO USUÁRIO
//  //  - VOCE DEVE EXIBIR AO FINAL:
//  //  - TAMANHO DA PALAVRA
//  //  - NÚMERO DE VOGAIS
//  //  - PALAVRA INVERTIDA


//  // Solitando uma palavra
//  let palavra = prompt("Digite uma palavra");
//  let tamanho = palavra.length;

//  // Calculando o tamanho da palavra
//  let numeroDeVogais = 0;
//  for (let i = 0; i < tamanho; i++) {
//     let letra = palavra[i].toLowerCase();
//  if ("aeiou".includes(letra))    
//  numeroDeVogais++;}

//  // Invertendo a palavra
//  let palavraInvertida = palavra.split("").reverse().join("");

//  // Exibindo os resultados
//  console.log("Tamanho da palavra:", tamanho);
//  console.log("Número de vogais:", numeroDeVogais);
//  console.log("Palavra invertida:", palavraInvertida);




 // 3- DESENVOLVA UM ALGORITIMO QUE RECEBA DO USUÁRIO
 //  - UMA LISTA DE NÚMEROS
 //  - UM NÚMERO, PARA SER USADO COMO MULTIPLICADOR
 //  - VOCÊ DEVE EXIBIR AO FINAL
 //  - A SOMA DE TODOS OS NÚMEROS
 //  - UMA LISTA DOS NÚMEROS QUE SÃO DIVISÍVEIS PELO MULPLICADOR INFORMADO.

//  // Solicita ao usuário a lista de números, e converte para um array de números
//  let listaNumeros = prompt("Digite os números separados por espaço:").split(" ").map(Number);

//  // Solicita ao usuário o multiplicador
//  let multiplicador = Number(prompt("Digite o número multiplicador:"));

//  // Calcula a soma de todos os números
//  let soma = 0;
//  for (let i = 0; i < listaNumeros.length; i++) {
//     soma += listaNumeros[i];
// }

// // Cria a lista dos números divisíveis pelo multiplicador
// let divisiveis = [];
// for (let i = 0; i < listaNumeros.length; i++) {
//     if (listaNumeros[i] % multiplicador === 0) {
//         divisiveis.push(listaNumeros[i]);
//     }
// }

// // Exibe a soma dos números e os divisíveis pelo multiplicador
// console.log("Soma de todos os números:", soma);
// console.log("Números divisíveis por " + multiplicador + ":", divisiveis);





// console.log("ai sim")

// //FUNCTION, NOME, (PARAMETROS) { ESCOPO }
// // function somar(){
// //     let numa = 1
// //     let numb = 20
// //     const soma = numa + numb
// //     console.log(soma)
// // }
// // const somar = () => {
// //     let numa = 1
// //         let numb = 20
// //         const soma = numa + numb
// //         console.log(soma)
// // }
// // somar()

// // (()=>{
// //     console.log("funcao anonima")
// // })()
// function somar(numa = 0,numb = 0){
//     // let numa = 1
//     // let numb = 20
//     const soma = numa + numb
//     return soma
// }
// // const numa = prompt("digite um numero")
// // const numb = prompt("digite um numero")
// // const resultado =  somar(numa,numb)
// // console.log(resultado,"resultado")

// // function multiplica(numa,numb){
// //     return numa*numb
// // }
// // const resultadoMultiplicacao = multiplica(3,8)
// // console.log(resultadoMultiplicacao)
// const listaNumeros =[1,2,4,5,8]
// const resultLista = multiplcaPorTres(listaNumeros,10)

// function multiplcaPorTres(lista=[],multiplcador){
//     console.log(lista,"lista parametro",multiplcador)
//     let aux = []
//     for(let i = 0;i < lista.length; i++){
//         aux.push(lista[i]/multiplcador)
//     }
//     return aux
// }
// console.log(resultLista,"lista")


// Exercício 1
// Antes do racionamento de energia ser decretado, 
// quase ninguém falava de quilowatts; mas agora, 
// todos incorporaram essa palavra em seu vocabulário.
// Sabendo que 100 quilowatts de energia custa um sétimo de salário mínimo, 
// faça um aplicativo que receba o valor do salário mínimo e a quantidade de quilowatts gasta por uma residência. 
// Então, calcule e imprima:

// O valor em reais de cada quilowatt; O valor em reais a ser pago;
//  O novo valor a ser pago por essa residência com um desconto de 10%.

function calcularContaEnergia(salarioMinimo, quantidadeQuilowatts) {
    let valorQuilowatt = salarioMinimo / 7 / 100; 
    let valorTotal = valorQuilowatt * quantidadeQuilowatts; 
    let valorComDesconto = valorTotal * 0.9; 

    console.log(`O valor de cada quilowatt é: R$ ${valorQuilowatt.toFixed(2)}`);
    console.log(`O valor total a ser pago é: R$ ${valorTotal.toFixed(2)}`);
    console.log(`O valor com 10% de desconto é: R$ ${valorComDesconto.toFixed(2)}`);
}

// Exemplo de uso:
let salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo:"));
let quantidadeQuilowatts = parseFloat(prompt("Digite a quantidade de quilowatts consumidos:"));

calcularContaEnergia(salarioMinimo, quantidadeQuilowatts);

// - Exercício 2
// Em épocas de pouco dinheiro,
// os comerciantes estão procurando aumentar suas vendas oferecendo desconto. 
// Faça um aplicativo que possa receber o valor de um produto e imprima o novo valor 
// tendo em vista que o desconto foi de 9%.

function calcularDesconto(valorProduto) {
    if (isNaN(valorProduto) || valorProduto <= 0) {
        alert("Por favor, insira um valor válido para o produto.");
        return;
    }

    let desconto = valorProduto * 0.09; 
    let valorComDesconto = valorProduto - desconto; 

    let resultado = "Valor original do produto: R$ ${valorProduto.toFixed(2)}\n" +
                    "Desconto aplicado (9%): R$ ${desconto.toFixed(2)}\n" +
                    "Valor final com desconto: R$ ${valorComDesconto.toFixed(2)}";

    alert(resultado);
}


 let valorProduto = parseFloat(prompt("Digite o valor do produto:"));
 calcularDesconto(valorProduto);

 // - Exercício 3
 // Criar um aplicativo que leia a quantidade de fitas que uma locadora de vídeo possui e o valor
 // que ela cobra por cada aluguel, mostrando as informações pedidas a seguir:
 // Sabendo que um terço das fitas são alugadas por mês, 
 // exiba o faturamento anual da locadora; Quando o cliente atrasa a entrega, 
 // é cobrada uma multa de 10% sobre o valor do aluguel. 
 // Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso, 
 // calcule o valor ganho com multas por mês; 
 // Sabendo ainda que 2% das fitas se estragam ao longo do ano,
 //  e um décimo do total é comprado para reposição,
 //  exiba a quantidade de fitas que a locadora terá no final do ano.

 function calcularDadosLocadora(qtdFitas, valorAluguel) {
    if (isNaN(qtdFitas) || isNaN(valorAluguel) || qtdFitas <= 0 || valorAluguel <= 0) {
        alert("Por favor, insira valores válidos para a quantidade de fitas e o valor do aluguel.");
        return;
    }

    let fitasAlugadasPorMes = qtdFitas / 3; // Um terço das fitas são alugadas por mês
    let faturamentoAnual = fitasAlugadasPorMes * valorAluguel * 12; // Faturamento anual

    let fitasAtrasadasPorMes = fitasAlugadasPorMes / 10; // Um décimo das alugadas são atrasadas
    let valorMultasPorMes = fitasAtrasadasPorMes * (valorAluguel * 0.10); // Multa de 10% sobre aluguel

    let fitasEstragadasPorAno = qtdFitas * 0.02; // 2% das fitas estragam ao longo do ano
    let fitasReposicao = qtdFitas / 10; // 10% do total são compradas para reposição
    let fitasNoFinalAno = qtdFitas - fitasEstragadasPorAno + fitasReposicao; // Cálculo final

    let resultado = `Faturamento anual: R$ ${faturamentoAnual.toFixed(2)}\n` +
                    `Valor ganho com multas por mês: R$ ${valorMultasPorMes.toFixed(2)}\n` +
                    `Quantidade de fitas no final do ano: ${Math.round(fitasNoFinalAno)}`;

    alert(resultado);
}
let qtdFitas = parseInt(prompt("Digite a quantidade de fitas na locadora:"));
let valorAluguel = parseFloat(prompt("Digite o valor do aluguel por fita:"));

calcularDadosLocadora(qtdFitas, valorAluguel);


// - Exercício 4
 // Entrar com um número no formato CDU (centena, dezena e unidade) e imprimi-lo invertido.
 //  Por exemplo, 123 sairá 321.
 //  O número deverá ser armazenado em outra variável antes de ser impresso.

 function inverterNumero(numero) {
    if (isNaN(numero) || numero < 100 || numero > 999) {
        alert("Por favor, insira um número de três dígitos (entre 100 e 999).");
        return;
    }

    let centena = Math.floor(numero / 100); 
    let dezena = Math.floor((numero % 100) / 10); 
    let unidade = numero % 10; 

    let numeroInvertido = (unidade * 100) + (dezena * 10) + centena; 

    alert(`Número original: ${numero}\nNúmero invertido: ${numeroInvertido}`);
}

let numero = parseInt(prompt("Digite um número de três dígitos (CDU):"));
inverterNumero(numero);

 // - Exercício 5
 // Criar um aplicativo que, dado um número de conta corrente com três dígitos,
 //  retorne o seu dígito verificador.
 //  Para encontrar o dígito verificador, siga o exemplo do número 235:
 // Somar o número da conta com o seu inverso: 235 + 532 = 767;
 //  Multiplicar cada dígito pela sua ordem posicional (da esquerda para a direita)
 //  e somar estes resultados: 7 * 1 + 6 * 2 + 7 * 3 = 40;
 //  O último dígito desse resultado é o dígito verificador da conta: último dígito de 40 é 0.
   




