// Mostrar en consola la secuencia de Fibonacci: 
// Entre los números 0 y 1000.
// Números pares entre 0 y 1000.
// Números impares entre 0 y 1000.

let fib = [0, 1]

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

const arregloDeFibonacciHastaMil = fibonacciHastaMil();
console.log("Los números de fibonacci hasta el número 1000: " + arregloDeFibonacciHastaMil)