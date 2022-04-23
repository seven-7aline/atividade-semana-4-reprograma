//Tabuada Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10

const number = 7
    console.log(`Tabuada de: ${number}`)

for(let m = 1; m < 11; m++) {
    let multiplication = (number * m)
    console.log(`${number} x ${m}: ${multiplication}`)
}