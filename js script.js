//lógica de programação
// problema:receber 3 notas de uma aluno,
//calcular e apresentar a média e o resultado
//se o aluno foi aprovado ou não

console.log('Inicio do programa','\n');


let nota1;
let nota2;
let nota3;

nota1= parseInt(prompt('Digite a nota 1:'));
nota2= parseInt(prompt('Digite a nota 2'));
nota3= parseInt(prompt('Digite a nota 3'));


//calculo da média

media= (nota1+nota2+nota3) /3;

console.log('A nota 1 é :', nota1);
console.log('A nota 2 é :', nota2);
console.log('A nota 3 é :', nota3);
console.log('A média do aluno é:', media, '\n');
console.log('Fim do Programa');
