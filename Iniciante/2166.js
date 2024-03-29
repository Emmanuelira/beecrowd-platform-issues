/*
Uma das formas de calcular a raiz quadrada de um número natural é pelo método das frações periódicas continuadas. Esse método usa como denominador uma repetição de frações. Essa repetição pode ser feita uma quantidade específica de vezes.

Por exemplo, ao repetir 2 vezes a fração continuada para calcular a raiz quadrada de 2, temos a fórmula abaixo.



Sua tarefa é, dado o número N de repetições, calcular o valor aproximado da raiz quadrada de 2.

Entrada
A entrada é um número natural N (0 ≤ N ≤ 100), que indica o número de repetições do denominador na fração continuada.

Saída
A saída é o valor aproximado da raiz quadrada com 10 casas decimais.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());
let result = 1;
function calc(n) {
    if(n === 0) return 0;
    else if(n === 1) return 1/2;
    else return 1/(2 + calc(--n));
}

result += calc(number);
console.log(result.toFixed(10));
