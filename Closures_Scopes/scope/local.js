const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();

// ÁMBITO LÉXICO
// Variable Global
var scope = "i am global";

const functionScope = () => {
    // Variable local
    var scope = "i am just a local";
    const func = () => {
        return scope;
    }

    console.log(func());
}

functionScope();
console.log(scope);