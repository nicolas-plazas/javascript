// No utilizar var sino let para no reescribir valores
const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction();