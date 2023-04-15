/*
Ao observar a paisagem da Nlogônia, o professor MC percebeu que a cada intervalo de 100 metros existe um pico. E que exatamente na metade de dois picos há um vale. Logo, a cada 50 metros há um vale ou um pico e, ao longo da paisagem, não há um pico seguido por outro pico, nem um vale seguido por outro vale.

O professor MC ficou curioso com esse padrão e quer saber se, ao medir outras paisagens, isso se repete. Sua tarefa é, dada uma paisagem, indicar se ela possui esse padrão ou não.

Entrada
A entrada é dada em duas linhas. A primeira tem o número N de medidas da paisagem (1 < N ≤ 100). A segunda linha tem N inteiros: a altura Hi de cada medida (-10000 ≤ Hi ≤ 10000, para todo Hi, tal que 1 ≤ i ≤ N). Uma medida é considerada um pico se é maior que a medida anterior. Uma medida é considerada um vale se é menor que a medida anterior.

Saída
A saída é dada em uma única linha. Caso a paisagem tenha o mesmo padrão da Nlogônia, deve ser mostrado o número 1. Caso contrário, mostra-se o número 0.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
const landscape = lines.shift().split(' ').map(v => parseInt(v));
let result = 1;

if(quantity > 1) {
    let ref = '';
    for(let i = 1; i < quantity; i++) {
        const dif = landscape[i] - landscape[i - 1];
        let temp = '';

        if(dif > 0) temp = 'pico';
        else if(dif < 0) temp = 'vale';
        else {
            result = 0;
            break;
        }

        if(ref === '') ref = temp;
        else {
            if(ref !== temp) ref = temp;
            else {
                result = 0;
                break;
            }
        }
    }
}

console.log(result);
