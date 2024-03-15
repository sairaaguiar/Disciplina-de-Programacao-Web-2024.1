let prompt = require('prompt-sync')();
var saldo = Number(prompt("Informe o seu saldo: R$"));

function verificarSaldo(saldo){
    if(saldo > 0){
        return console.log("Saldo Positivo");
    }else{
        return console.log("Saldo Negativo");
}
}

var saldoAtual = Number(prompt("Informe o seu saldo atual: R$"));
var valorSaque = Number(prompt("Informe o valor de saque: R$"));

function realizarSaque(saqueAtual,valorSaque){
    if(valorSaque <= saldoAtual){
        saldoAtual - valorSaque
        return console.log("Saque realizado com sucesso. Saldo atual: R$", saldoAtual)
    }else{
        return console.log("Saldo insuficiente");
    }
}

var saldoAtual = Number(prompt("Informe o seu saldo atual: R$"));
var valorDeposito = Number(prompt("Informe o valor do depósito: R$"));

function realizarDeposito(saqueAtual,valorDeposito){
    if()
}




