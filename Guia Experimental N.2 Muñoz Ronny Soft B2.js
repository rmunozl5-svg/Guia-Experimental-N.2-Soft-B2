// 1. Contar caracteres de una palabra
function contarCaracteres(palabra) {
  console.log(`La palabra tiene ${palabra.length} letras.`);
}

contarCaracteres("Manzana");


// 2. Contar apariciones de una letra específica
function contarLetra(frase, letra) {
  const cantidad = frase.split('').filter(c => c.toLowerCase() === letra.toLowerCase()).length;
  console.log(`La letra '${letra}' aparece ${cantidad} veces.`);
}

contarLetra("Me encanta el café", "e");


// 3. Invertir un texto
function invertirTexto(texto) {
  const inver = texto.split('').reverse().join('');
  console.log(inver);
}

invertirTexto("Quito");


// 4. Comparar longitudes de cadenas
function compararLongitud(cadena1, cadena2) {
  if (cadena1.length > cadena2.length) {
    console.log(`El apellido '${cadena1}' tiene más letras.`);
  } else if (cadena2.length > cadena1.length) {
    console.log(`El apellido '${cadena2}' tiene más letras.`);
  } else {
    console.log(`Ambos apellidos tienen la misma cantidad de letras.`);
  }
}

compararLongitud("García", "Pérez");

// 5. Iniciales de un nombre completo
function iniciales(nombreCompleto) {
  const partes = nombreCompleto.split(" ");
  const resultado = partes.map(p => p[0].toUpperCase()).join(".");
  console.log(resultado + ".");
}

iniciales("Ana Maria Torres");


// 6. Reemplazo de caracteres
function reemplazarCaracteres(palabra) {
  const reemplazada = palabra.replace(/[aeiou]/gi, "#");
  console.log(reemplazada);
}

reemplazarCaracteres("Programador");


// 7. Palabra palíndroma
function esPalindromo(palabra) {
  const invertida = palabra.split("").reverse().join("");
  if (palabra.toLowerCase() === invertida.toLowerCase()) {
    console.log(`La palabra '${palabra}' es un palíndromo.`);
  } else {
    console.log(`La palabra '${palabra}' no es un palíndromo.`);
  }
}

esPalindromo("radar");


// 8. Frase con mayor cantidad de caracteres
function compararFrases(frase1, frase2) {
  if (frase1.length > frase2.length) {
    console.log(`La frase '${frase1}' tiene más caracteres.`);
  } else if (frase2.length > frase1.length) {
    console.log(`La frase '${frase2}' tiene más caracteres.`);
  } else {
    console.log("Ambas frases tienen la misma cantidad de caracteres.");
  }
}

compararFrases("Me gusta el fútbol", "Prefiero el baloncesto");


// 9. Contar apariciones de un carácter elegido
function contarCaracter(frase, caracter) {
  const cantidad = frase.split("").filter(c => c.toLowerCase() === caracter.toLowerCase()).length;
  console.log(`La letra '${caracter}' aparece ${cantidad} veces.`);
}

contarCaracter("Examen de programación", "m");


// 10. Dividir oración en palabras
function dividirEnPalabras(oracion) {
  const palabras = oracion.split(" ");
  palabras.forEach(p => console.log(p));
}

dividirEnPalabras("Me gusta aprender programación");

// 11. Divisores de números en un arreglo
function mostrarDivisores(numeros) {
  numeros.forEach(num => {
    const divisores = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisores.push(i);
      }
    }
    console.log(`Divisores de ${num}: ${divisores.join(", ")}`);
  });
}

mostrarDivisores([6, 10]);

// 12. Suma de divisores en un arreglo
function sumaDivisores(num) {
  let sm = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sm += i;
  }
  return sm;
}

function sumaDivisoresArreglo(arr) {
  arr.forEach(n => {
    console.log(`Suma divisores de ${n} = ${sumaDivisores(n)}`);
  });
}

// 13. Números perfectos en un arreglo
function esPerfec(num) {
  let suma = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) suma += i;
  }
  return suma === num;
}

function numPerfect(arr) {
  const perfectos = arr.filter(esPerfec);
  console.log(`Números perfectos: ${perfectos.join(", ")}`);
}

// 14. Números primos en un arreglo
function esPrim(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function numPrimos(arr) {
  const prim = arr.filter(esPrim);
  console.log(`Números primos: ${prim.join(", ")}`);
}

// 15. Factorial de números en un arreglo
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) fact *= i;
  return fact;
}

function factorialArreglo(arr) {
  arr.forEach(n => {
    console.log(`${n}! = ${factorial(n)}`);
  });
}

//. 16 Invertir números en un arreglo
function invertirNumero(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

function invertirArreglo(arr) {
  const invertidos = arr.map(invertirNumero);
  console.log(invertidos);
}


// 17. Promedio de un arreglo
function promedioArreglo(arr) {
  const suma = arr.reduce((a, b) => a + b, 0);
  const promedio = suma / arr.length;
  console.log(`El promedio es ${promedio}.`);
}


// 18. Contar impares en un arreglo
function contarImpares(arr) {
  const impares = arr.filter(n => n % 2 !== 0).length;
  console.log(`Cantidad de impares: ${impares}`);
}


// 19. Mayores de edad en un arreglo
function mayoresDeEdad(arr) {
  const mayores = arr.filter(n => n >= 18);
  console.log(`Mayores de edad: ${mayores.length}`);
}

// 20. Buscar valor en un arreglo
function buscarValor(arr, valor) {
  if (arr.includes(valor)) {
    console.log(`El valor ${valor} sí existe en el arreglo.`);
  } else {
    console.log(`El valor ${valor} no existe en el arreglo.`);
  }
}

// 21. Concatenar palabras de un arreglo
function concatenarPalabras(arr) {
  const frase = arr.join(" ");
  console.log(frase);
}


// 22. Cubo de elementos en un arreglo
function cuboElementos(arr) {
  const cubos = arr.map(n => n ** 3);
  console.log(cubos);
}



// 23. Tabla de multiplicar de elementos
function tablaMultiplicar(arr) {
  arr.forEach(n => {
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
      tabla += `${n * i}, `;
    }
    console.log(`Tabla de ${n}: ${tabla.slice(0, -2)}`);
  });
}



// 24. Factorial de cada número en un arreglo
function factorial(num) {
  let f = 1;
  for (let i = 1; i <= num; i++) f *= i;
  return f;
}

function factorialArreglo(arr) {
  const fact = arr.map(factorial);
  console.log(fact);
}



// 25. Copiar pares a otro arreglo
function copiarPares(arr) {
  const pares = arr.filter(n => n % 2 === 0);
  console.log(pares);
}



// 26. Suma de dos arreglos en un tercero
function sumarArreglos(A, B) {
  if (A.length !== B.length) {
    console.log("Los arreglos deben tener la misma longitud");
    return;
  }
  const C = A.map((n, i) => n + B[i]);
  console.log("C =", C);
}




