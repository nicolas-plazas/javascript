// el hoisting se utiliza en declaraciones y no en inicializaciones
a = 2;
var a;
console.log(a); // 2

// levantamiento
nameOfDog('Sasha');

function nameOfDog(name) {
    console.log(name);
}

nameOfDog('Sasha');

nameOfDog("Elmo"); 

function nameOfDog(name) 

{ console.log(name); };