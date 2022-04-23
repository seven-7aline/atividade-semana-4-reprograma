//Fatorial	
//Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function factorial(n) {
    let factorial = n - 1;
    let resultado = n * factorial;
      while (factorial != 1){
          factorial -= 1;
          resultado *= factorial;
      }
      return resultado;
}
console.log(factorial(5))