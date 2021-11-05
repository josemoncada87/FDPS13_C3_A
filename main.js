// ¿Cómo creo objetos en JS?
// JSON
// 1. literales de objeto.
let obj = {
    llaveA:"valor",
    llaveB:10,
    llaveC:true,
    llaveD:function() {
        console.log(this.llaveA);
    },
    llaveE:{
        llave1:0,
        llave2:0,
    }
}

// 2. Clases ...
class Nombre{
    constructor(){
    }
}

// 3. funciones 
function creadorPersonas(_name, _last, _age) {
    return {
        name:_name,
        last:_last,
        age:_age,
    }
}
let unaPersona = new creadorPersonas("Alejandro", "Salazar", "18");

// 4. operador --> {}
let plantilla = {};
plantilla.age = 55;
plantilla.name = "Jose";
plantilla.last = "Moncada"
console.log(plantilla);

// Visibilidad de las variables JS
// *var* vs let vs const ---> ES6
// Ejemplo - closures o clausuras
// Closure de función valor
function crearFuncionContador() {
    let contador = 0;
    return function incrementar() {
        contador = contador + 1;
        return contador;
    } 
}
const miContador1 = crearFuncionContador();
console.log(miContador1()); // 1 || 1
console.log(miContador1()); // 2 || 2
console.log(miContador1()); // 3 || 3
console.log(miContador1);

const miContador2 = crearFuncionContador();
console.log(miContador2()); // 4 || 1
console.log(miContador2()); // 5 || 2
console.log(miContador2()); // 6 || 3
console.log(miContador2);

// En un de creacion de objetos desde función forma (3)
function Person(personName, personLast) {
    let name = personName;
    let last = personLast;
    return{
        //name:personName,
        //last:personLast,
        showName: function() {
            console.log(name);
        },
        showLast: function () {
            console.log(last);
        },
        showFullName: function () {
            console.log(name, last);
        },
    }
}
let persona = new Person("Pepito","Perez");

Object.freeze(persona);

persona.showName();
persona.showLast();
persona.showFullName();
console.log("--++", persona);
console.log("-->", persona.name);
console.log("-->", persona.last);
persona.name = "Sultano";
persona.last = "Sultanillo";
persona.age = 55;
console.log("--++", persona);
console.log("-->", persona.name);
console.log("-->", persona.last);

// Object keys, values y entries.
let objItem = {
    llaveA:"valor",
    llaveB:10,
    llaveC:true,
    llaveD:function() {
        console.log(this.llaveA);
    },
    llaveE:{
        llave1:0,
        llave2:0,
    }
}

console.log( Object.keys(objItem) );
console.log( Object.values(objItem) );
console.log( Object.entries(objItem) );




