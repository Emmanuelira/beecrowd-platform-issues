/*
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).



Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

Entrada
A entrada contem as coordenadas de um ponto.

Saída
A saída deve apresentar o quadrante em que o ponto se encontra.
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const coordenadas = lines.shift().split(" ");
const x = parseFloat(coordenadas[0]);
const y = parseFloat(coordenadas[1]);

if(x === 0 && y !== 0) {
    console.log('Eixo Y');
} else if(x !== 0 && y === 0) {
    console.log('Eixo X');
} else if(x > 0 && y > 0) {
    console.log('Q1');
} else if(x < 0 && y > 0) {
    console.log('Q2');
} else if(x < 0 && y < 0) {
    console.log('Q3');
} else if(x > 0 && y < 0) {
    console.log('Q4');
} else {
    console.log('Origem');
}
