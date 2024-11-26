// Mostrar en consola la secuencia de Fibonacci: 
// Entre los números 0 y 1000.
// Números pares entre 0 y 1000.
// Números impares entre 0 y 1000.


//Inicio secuencia Fibonacci
let fib = [0, 1]
//Función que irá añadiendo nuevos números a la secuencia hasta los 1000
function fibonacciHastaMil() {
    let numeroActual;
    for (let indice = 2; true; indice++) {
        numeroActual = fib[indice - 1] + fib[indice - 2]
        if (numeroActual < 1000) {
            fib.push(numeroActual);
        } else {
            break;
        }
    }
    return fib;
}

//Función que recibe un arreglo y retorna el mismo arreglo filtrando sólo los números par
function filtrarPares(arreglo){
    return arreglo.filter((valor)=>{
        return valor%2 === 0;
    })
}

//Función que recibe un arreglo y retorna el mismo arreglo filtrando sólo los números impar
function filtrarImpares(arreglo){
    return arreglo.filter((valor)=>{
        return valor%2 === 1;
    })
}

const arregloDeFibonacciHastaMil = fibonacciHastaMil();

console.log("Los números de fibonacci hasta el número 1000: " + arregloDeFibonacciHastaMil)

console.log("Los número pares dentro de la secuencia fibonacci son: " + filtrarPares(arregloDeFibonacciHastaMil))

console.log("Los número impares dentro de la secuencia fibonacci son: " + filtrarImpares(arregloDeFibonacciHastaMil))