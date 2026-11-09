
// ATIVIDADE 9

// PARTE 1 — Preparação

console.log("JavaScript carregado!");

// PARTE 2 — Variáveis e tipos

const nomeAluno = "Ana";
let idade = 16;
const matriculado = true;

console.log("Nome:", nomeAluno);
console.log("Idade:", idade);
console.log("Matriculado:", matriculado);

console.log("Tipo do nome:", typeof nomeAluno);
console.log("Tipo da idade:", typeof idade);
console.log("Tipo de matriculado:", typeof matriculado);

// PARTE 3 — Operadores

const num1 = 10;
const num2 = 5;

console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);
console.log("Resto da divisão:", num1 % num2);

// O primeiro número é maior que o segundo? Sim, pois 10 > 5.
console.log("O primeiro é maior?", num1 > num2);

// Eles são estritamente iguais? Não, pois 10 !== 5.
console.log("São estritamente iguais?", num1 === num2);

// PARTE 4 — Entrada e conversão

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("Soma dos valores:", n1 + n2);
console.log("Tipo de n1:", typeof n1);
console.log("Tipo de n2:", typeof n2);

// Se digitar "abc", o resultado será NaN.

// PARTE 5 — Condicionais

const idadeVerificada = Number(prompt("Digite uma idade:"));

if (idadeVerificada >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

console.log("Classificação de nota ---");

const nota = Number(prompt("Digite uma nota de 0 a 100:"));

if (nota >= 90 && nota <= 100) {
  console.log("Excelente");
} else if (nota >= 70 && nota < 90) {
  console.log("Aprovado");
} else if (nota >= 0 && nota < 70) {
  console.log("Reprovado");
} else {
  console.log("Nota inválida");
}

console.log("\nPar ou ímpar ---");

const numeroInteiro = Number(prompt("Parte 5.3 — Digite um número inteiro:"));

if (Number.isInteger(numeroInteiro)) {
  if (numeroInteiro % 2 === 0) {
    console.log("Número par");
  } else {
    console.log("Número ímpar");
  }
} else {
  console.log("Digite um número inteiro válido.");
}

// PARTE 6 — Depuração

// Correções: usar let para permitir conversão, Number para entrada;
// === para comparação;
// aspas no texto "Idade".

let idadeDepuracao = Number(prompt("Idade:"));

if (idadeDepuracao === 18) {
  console.log("Tem exatamente 18 anos");
} else {
  console.log("Idade diferente de 18");
}

console.log("Idade:", idadeDepuracao);

// DESAFIO FINAL — Situação do aluno

console.log("\n--- Desafio final: Situação do aluno ---");

const nome = prompt("Nome do aluno:");
const nota1 = Number(prompt("Primeira nota:"));
const nota2 = Number(prompt("Segunda nota:"));

const media = (nota1 + nota2) / 2;
let situacao;

if (media >= 70) {
  situacao = "Aprovado";
} else {
  situacao = "Reprovado";
}

console.log(`Aluno: ${nome} | Média: ${media} | Situação: ${situacao}`);
