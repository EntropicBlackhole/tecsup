// EJERCICIOS
// 1. Retorna True si dos strings tienen la misma longitud sino devolver False
// 2. Retornar True si un numero es menor que 40 sino devolver False
// 3. Retornar True si un numero es menor que 60 sino devolver False
// 4. Retornar True si un numero es par sino devolver False
// 5. Retornar True si un numero es impar sino devolver False


//1
let str1 = "";
let str2 = "";
console.log(str1.length > str2.length);

//2
let num1 = 0;
console.log(num1 < 40);

//3
let num2 = 0;
console.log(num2 < 60)

//4
let num3 = 0;
console.log(num3 % 2 == 0)

//5
let num4 = 0;
console.log(num4 % 2 != 0)



// EJERCICIOS
  
// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

//1
let age = 16;
if (age < 18) console.log('Menor de edad');
else console.log('Mayor de edad');

//2
let lang = "aimara";
let output = "";
if (lang == 'ingles') output = 'Hello';
else if (lang == 'español') output = 'Hola';
else if (lang == 'aimara') output = 'Kamisaraki';
console.log(output);

//3
let outputFB = ""
for (let i = 0; i < 100; i++) {
  outputFB = ""
  if (i % 3 == 0) outputFB += "Fizz";
  if (i % 5 == 0) outputFB += "Buzz";
  if (outputFB == "") outputFB += i.toString();
  console.log(outputFB)
}

//4
console.log(isPrime(13));

function isPrime(n) {
  for (let i = 2; i**2 <= n; i++) 
    if (n % i === 0) return false;
  return n > 1;
}

//5
let num = 0;
while (num < 10) {
  num += 2
  console.log(num)
}

