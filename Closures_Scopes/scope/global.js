// Puede ser reasignada
var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// <----- Malas practicas ----->
const helloWorld = () => {
    globalVar = 'im global';
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar ='Im Global';
}

anotherFunction();
console.log(globalVar);
// <----- Malas practicas ----->