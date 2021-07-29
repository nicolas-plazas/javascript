var a = 'Hello';

function hello() {
    let b = 'Hello world';
    const c = 'Hello world!';
    if (true) {
        let d = 'Hello world!!';
        debugger
    }
}

hello();

const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

// Chrome es sources