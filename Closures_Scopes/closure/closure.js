/*
    Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico).
    En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior.
    En JavaScript, las clausuras se crean cada vez que una función es creada.
*/
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        console.log(`coin ${coins}`)
        // coins + coins -> addition
        // Recordar la asignación de saveCoins
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    // Retornar la variable countCoins
    return countCoins;
};
// Let que contienene la función moneyBox
let myMoneyBox = moneyBox();

myMoneyBox(4); // 4
myMoneyBox(6); // 10
myMoneyBox(10); // 20

/*
    Un closure es una función que es libre de variables, esto quiere decir que las variables de la función padre funcionan, 
    pero el closure no tiene variables propias. Ejemplo:
 */
function padre() {
  var a = 1;
  function closure() {
    console.log(a);
  }
  closure();
}
padre();