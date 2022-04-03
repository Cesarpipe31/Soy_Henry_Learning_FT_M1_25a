"use strict"

// function BinarioADecimal(num) {
//   // tu codigo aca
//   // num strin -> array
//   // "1010" -> [1, 0, 1, 0]

//   //  PRIMER FORMA

//   var array = num.split("")
//   var sum = 0
//   for (var i = 0; i < array.length; i++) {
//     sum = sum + Math.pow(2, array.length - 1 - i) * array[i]
//   }
//   return sum
// }

//   var array = num.split("")
//   var sum = 0
//   for (var j = array.length - 1; j >= 0; j--) {
//     sum = sum + Math.pow(2, array.length - 1 - j * array[j]
//   }
//   return sum
// }

function BinarioADecimal(num) {
  var array = num.split("")
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum = sum + Math.pow(2, array.length - 1 - i) * array[i]
  }
  return sum
}

// num es un String
// string a número Decimal
// sumatoria (2^posicion*vlor_en dicha_posicion)
// 1010
// 3210
//--> posición
// 2^3*1 + 2^2*0 + 2^1*1 + 2^0*0
//  8    +   0   +    2  +   0   =   10

function DecimalABinario(num) {
  // tu codigo aca
  if (num <= 0) return "00000000"
  var array = []
  while (num > 0) {
    array.unshift(num % 2)
    num = Math.floor(num / 2)
  }
  return array.join("")
}

// num = 10
// 10/2 = 5 [0]
//  5/2 = 2 [1]
//  2/2 = 1 [0]
//  1/2 = 0 [1]
//=============
//         1010

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
