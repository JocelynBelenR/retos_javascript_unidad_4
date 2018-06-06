/* ENUNCIADO
Escriba una función llamada getNthElement.
Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, 
dentro del arreglo dado.

Notas:
Si el arreglo tiene una longitud de 0, debería devolver' undefined'.

Ejemplo de entrada:
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
*/

//MI FUNCION
/* LOGICA: me piden que mi funcion devuelva el entero dentro del arreglo
Nota, me dan una condicion o respuesta cuando la longitud del array sea 0 */

function getNthElement(array, n) { //(arreglo , entero)
    if (array.length === 0); { //if para mi condicion, si la longitud de array es 0
        return undefined; //esto es lo que devuelve
      }
      return array [n]; // dentro del arreglo me retorna el entero
  }
  
  module.exports = getNthElement;