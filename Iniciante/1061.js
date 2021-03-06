const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valores1 = lines.shift().split(" ");
const diaInicio = parseInt(valores1[1]);

let valores2 = lines.shift().split(" ");
const horaInicio = parseInt(valores2[0]);
const minutoInicio = parseInt(valores2[2]);
const segundoInicio = parseInt(valores2[4]);

let valores3 = lines.shift().split(" ");
const diaFim = parseInt(valores3[1]);

let valores4 = lines.shift().split(" ");
const horaFim = parseInt(valores4[0]);
const minutoFim = parseInt(valores4[2]);
const segundoFim = parseInt(valores4[4]);

let dia = 0;
let hora = 0;
let minuto = 0;
let segundo = 0;

// DEFININDO OS SEGUNDOS
if(segundoFim > segundoInicio) {
    segundo = segundoFim - segundoInicio;
} else if(segundoFim < segundoInicio) {
    --minuto;
    segundo = 60 - (segundoInicio - segundoFim);
}

// DEFININDO OS MINUTOS
if(minutoFim > minutoInicio) {
    minuto += minutoFim - minutoInicio;
} else if(minutoFim < minutoInicio) {
    --hora;
    minuto += 60 - (minutoInicio - minutoFim);
} else {
    if(minuto < 0) {
        minuto = 59;
        --hora;
    }
}

// DEFININDO AS HORAS
if(horaFim > horaInicio) {
    hora += horaFim - horaInicio;
} else if(horaFim < horaInicio) {
    --dia;
    hora += 24 - (horaInicio - horaFim);
} else {
    if(hora < 0) {
        hora = 23;
        --dia;
    }
}

// DEFININDO OS DIAS
if(diaFim > diaInicio) {
    dia += diaFim - diaInicio;
} else if(diaFim < diaInicio) {
    dia += 30 - (diaInicio - diaFim);
} else {
    if(dia < 0) {
        dia = 29;
    }
}

if(dia === 0 && hora === 0 && minuto === 0) {
    segundo = 0;
    minuto = 1;
}

console.log(`${dia} dia(s)`);
console.log(`${hora} hora(s)`);
console.log(`${minuto} minuto(s)`);
console.log(`${segundo} segundo(s)`);