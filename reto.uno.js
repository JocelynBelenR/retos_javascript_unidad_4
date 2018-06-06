/* ENUNCIADO
Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve 
el promedio de la longitud de ambos strings.

Ejemplo de entrada:
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
 */


 /* MI FUNCION */
 /*LOGICA: Me piden el promedio de 2 string; para sacar un promedio debo sumar ambos string y
dividirlos por 2*/

 function computeAverageLengthOfWords(word1, word2) { //funcion y sus elementos
  var stringUno = word1.length; //declaro las variables y .length por la longitud
  var stringDos = word2.length;
  var resultado = (stringUno+stringDos) /2; //suma de strings divido por 2 para sacar promedio
  return resultado; //retorna el resultado de lo anterior
  
}

module.exports = computeAverageLengthOfWords;
