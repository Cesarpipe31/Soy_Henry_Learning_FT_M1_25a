/// Scope & Hoisting
/// Determiná que será impreso en la consola, sin ejecutar el código.

/// Investiga cuál es la diferencia entre declarar una variable con var y directamente asignarle un valor.


x = 1
var a = 5
var b = 10
var c = function (a, b, c) {
  var x = 10
  console.log(x) // 10
  console.log(a) // 8
  var f = function (a, b, c) {
    b = a
    console.log(b) // 8
    b = c
    var x = 5
  }
  f(a, b, c)
  console.log(b) // 9
}
c(8, 9, 10)
console.log(b) // 10
console.log(x) //  1

////////////////////////////////////

console.log(bar) // undefined
console.log(baz) // undefined
foo() // Hola!
function foo() {
  console.log("Hola!")
}
var bar = 1
baz = 2

/////////////////////////////

var instructor = "Tony"
if (true) {
  var instructor = "Franco"
}
console.log(instructor) // Franco

//////////////////////////////

var instructor = "Tony"
console.log(instructor) // Tony
;(function () {
  if (true) {
    var instructor = "Franco"
    console.log(instructor) // Franco
  }
})()
console.log(instructor) //  Tony

/////////////////////////////

var instructor = "Tony"
let pm = "Franco"
if (true) {
  var instructor = "The Flash"
  let pm = "Reverse Flash"
  console.log(instructor) // The Flash
  console.log(pm) // Reverse Flash
}
console.log(instructor) /// Tony pero lo correcto es The Flash
console.log(pm) // Franco

///////////////////////

/// Coerción de Datos
/// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

6 / "3"  // 2
"2" * "3"   // 6
4 + 5 + "px"  // 9px
"$" + 4 + 5   // $45
"4" - 2   //  2
"4px" - 2   // NaN
7 / 0  //  Infinity
{}[0]  // [ 0 ]
parseInt("09")  // 9
5 && 2  // 2
2 && 5  // 5
5 || 0  //  5
0 || 5  //  5  TAN RARO
[3]+[3]-[10]  //  23 
3>2>1  //  False
[] == ![]  //  True



////////////////////////



///   Hoisting
///   ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

function test() {
   console.log(a);   // undefined
   console.log(foo());   //  2

   var a = 1;  
   function foo() {
      return 2;
   }
}

test();


/// Y el de este código? :



var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;  //  Friskies
    }
    return snack;  //  Friskies
}

getFood(false);  // no hace nada