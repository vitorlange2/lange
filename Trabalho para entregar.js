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

    let fitasAlugadasPorMes = qtdFitas / 3; 
    let faturamentoAnual = fitasAlugadasPorMes * valorAluguel * 12; 

    let fitasAtrasadasPorMes = fitasAlugadasPorMes / 10; 
    let valorMultasPorMes = fitasAtrasadasPorMes * (valorAluguel * 0.10); 

    let fitasEstragadasPorAno = qtdFitas * 0.02; 
    let fitasReposicao = qtdFitas / 10; 
    let fitasNoFinalAno = qtdFitas - fitasEstragadasPorAno + fitasReposicao; 

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
   

 function calcularDigitoVerificador(numeroConta) {
    if (isNaN(numeroConta) || numeroConta < 100 || numeroConta > 999) {
        alert("Por favor, insira um número de conta com três dígitos (entre 100 e 999).");
        return;
    }

    
    let centena = (numeroConta / 100) | 0; 
    let dezena = ((numeroConta % 100) / 10) | 0; 
    let unidade = numeroConta % 10; 

    
    let numeroInvertido = (unidade * 100) + (dezena * 10) + centena;

    
    let soma = numeroConta + numeroInvertido;

    
    let somaString = soma.toString();
    let somaPosicional = 0;

    for (let i = 0; i < somaString.length; i++) {
        let digito = parseInt(somaString[i]);
        somaPosicional += digito * (i + 1);
    }

    
    let digitoVerificador = somaPosicional % 10;

    alert(`Número da conta: ${numeroConta}\nDígito verificador: ${digitoVerificador}`);
}


let numeroConta = parseInt(prompt("Digite um número de conta com três dígitos:"));
calcularDigitoVerificador(numeroConta);
