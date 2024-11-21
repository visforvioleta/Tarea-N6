// Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas
let pokemon =

[
   'Pikachu',
   'Charmander',
   'Bulbasaur',
   'Squirtle'
]

//Funcion para crear un nuevo array en mayusculas
let enMayusculas = pokemon.map(pokemonNombre => pokemonNombre.toUpperCase());
console.log(enMayusculas);