let prompt = require('prompt-sync')();
var num1 = Number(prompt("Insira o primeiro número: "));
var num2 = Number(prompt("Insira o segundo número: "));
var num3 = Number(prompt("Insira o terceiro número: "));

media = (num1 + num2 + num3) / 3

console.log("Os números digitados foram:", num1, num2, "e", num3)
console.log("A média dos números é:", media)