// let y const solo se pueden acceder dentro del bloque en este caso dentro del if
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();

// Let de manera global
let x = 1;
{
    // let de manera local
    let x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction();