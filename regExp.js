let str = "ahb acb aeb aeeb adcb axeb";
let result = str.match(/a.b/g);
console.log(result);


let str1 = "2+3 223 2223";
let result1 = str1.match(/2\+3/g);
console.log(result1);


let date = new Date();
console.log(date);
console.log(date.getDate(), date.getMonth()+1, date.getFullYear());
