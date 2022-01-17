let animal = {
    move: 1,
};
let cat = {};
cat.__proto__ = animal;
console.log(cat.move);
