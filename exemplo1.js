//Utilize a estrutura de repetição for para imprimir no console conforme instruções:

//a) números de 1 a 50  

console.log('inicio')

let numero = 0;
  for(let numero = 1; numero <=50; numero++) {
    console.log(`${numero}`)
}
console.log('fim')

//b) números de 1 a 50, quando chegar no número 25 interrompa a instrução e pare o loop 

console.log('inicio')

for(let numTeste = 50; numTeste > 1; numTeste = numTeste - 1){
console.log(numTeste)
if(numTeste === 25){
    break
 }
}
console.log('Deu break')
console.log('fim')

//c) números de 1 a 50, quando chegar no número 10 pule a instrução

console.log('inicio')

let number = 1
while(number < 50){
    number += 1
    if (number === 10){
        console.log('continue')
        continue
    }
    console.log('Testando continue' + number)
}
    console.log('fim')
