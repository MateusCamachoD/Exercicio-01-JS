/*
- [x]  A soma dos dois números; 
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/

let firstNumber = prompt("Digite o primeiro número: ")

let secondNumber = prompt("Digite o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const soma = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert("Soma: " + soma)
alert("Subtração: " + sub)
alert("Multiplicação: " + mult)
alert("Divisão: " + div.toFixed(1))
alert("Resto: " + rest)

// % Pode ser usado como Divisível

if(soma % 2 === 0){
  alert("A soma dos dois números inseridos é: Par")
} else {
  alert("A soma dos dois números inseridos é: Impar")
}

if(firstNumber == secondNumber){
  alert("Seus números digitados são: Iguais")
} else {
  alert("Seus números inseridos são: Diferentes")
}

