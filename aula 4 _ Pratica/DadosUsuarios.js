//Luiz Otavio Miranda tem 30 anos, pesa 84 kg
//tem 1.8 de altura e seu IMC é de 25.925925925925924
//luiz miranda nasceu em 1980

const nome = "Luiz Otavio Miranda";
let nomeMaiusculo = nome.toUpperCase();
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.80;
let anoAtual = 2025;

const imc = peso / (altura * altura);
const anoNascimento = anoAtual - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome.split(" ")[0].toLowerCase()} ${sobrenome.toLowerCase()} nasceu em ${anoNascimento}.`);