//Imprima na tela a partir de 20 e depois de 10 em 10 até o 100,
 //mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".

 console.log('inicio')

let number = 10
while(number < 100){
    number += 10
    if (number === 60 || number === 90){
        console.log('continue')
        continue
    }
    console.log('Testando continue' + number)
}
    console.log('fim')
