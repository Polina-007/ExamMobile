let car = {
    color: 'черный',
};
car.color = 'зеленый';
car.power = () => {
    console.log("120Вт");
};


let apple = 5, pear = 3;

function fruitSum(a, b) {
    let rez = apple + pear;
    console.log(rez);
}

fruitSum(apple, pear);


function defineName(name) {
    let nameSave = 'Polina';
    let rez = (name === nameSave) ? "Hello, Polina" : "No such name";
    console.log(rez);
}

defineName("Polina");


function typeArg(a) {
    let rez = typeof (a);
    console.log(rez);
}

typeArg(true);


const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
};


function main() {
    if (isPrime(0)) {
        console.log("prime");
    } else {
        console.log("not prime");
    }
}

main();

