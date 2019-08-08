//3) Faça um programa em JS que calcula e escreve a seguinte soma: soma = 1/1 + 3/2 + 5/3 + 7/4 + ... + 99/50.

var sum = ("A soma das equações é = ");
var numeric = -1;
var answer = 0;

for (var i = 1; i < 51; i++) {
  numeric = numeric + 2;
  answer = answer + (numeric / i);
}//No laço de repetição preciso fazer todos os calculos dentro do for, e depois fora dele imprimir o resultado para dar certo.
document.body.append(sum + answer);
