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


