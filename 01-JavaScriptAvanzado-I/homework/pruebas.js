var sayHello = "hello"

function person() {
  var first = "david"
  var last = "shariff"
  function firstName() {
    return first
  }
  function lastName() {
    return last
  }

  alert(sayHello + firstName() + lastName())
}

////////////////

var x = 2
function square(num) {
  var ans = num * num
  return ans
}

var square2 = square(x)
var square4 = square(4)

///////////////

function f() {
  this.x = 1
}

f()
window.x

/////////////////////

var obj ={
    name: "martina",
    getName(): function(){
        return this.name
    }
}

obj.getName()

let m = obj.getName
m()


///////////////////


bar();
console.log(foo);

var foo = 'Hola, me declaro';
function bar() {
 console.log('Soy una función');
}

 ///////////////////////

 function b() {
  console.log('B!')
};

function a() {
  // invoca a la función b
  b();
};

//invocamos a
a();


////////////////


var a = 5
var b = 6
var c = 7

a = c

c = 9

console.log(a)
console.log(c)


//////////////////


var a

var b = {nombre: "Martina"}

a = b
b.nombre = "Juana"



//////////////////


var obj = {
  nombre: "Objeto",
  log : function(){
    this.nombre = "Cambiado",
    console.log(this)

    var that = this

    var cambia = function ( str ) {
      that.nombre = str 
    }
    cambia ("Hooola")
    console.log(this)
  }
}

console.log(obj)

obj.log()

obj.cambia()


/////////////////


function saludarMasTarde(){
  var saludo = "Hola"

  setTimeout(function(){
    console.log(saludo)
    },3000)
}

saludarMasTarde()