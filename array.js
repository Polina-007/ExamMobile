let arr = ['зеленая миля', 'золушка', 'матрица', 'начало', 'джентльмены'];
arr.forEach((item) => {
    console.log(item);
});


let arr1 = ['Volkswagen', 'Toyota', 'Renault', 'Nissan', 'Mitsubishi'];
arr1 = arr1.join('_');
console.log(arr1);
arr1 = arr1.split(' ');
console.log(arr1);


let arr2 = ['Юля', 'Яна', 'Андрей', 'Лера', 'Петя'];
arr2.forEach((item) => {
    console.log('hello, ' + item + '!');
});


let arr3 = [2, 8, 4, 3, 1];
arr3.forEach((item) => {
    console.log(Boolean(item));
});


let arr4 = [2, 8, 4, 3, 1];
let a;
for (let i = 0; i < arr4.length; i++) {
    for (let j = i + 1; j < arr4.length; j++)
        if (arr4[i] < arr4[j]) {
            a = arr4[i];
            arr4[i] = arr4[j];
            arr4[j] = a;
        }
    console.log(arr4);
}


let arr5 = [1, 6, 7, 8, 3, 4, 5, 6];
let arr51 = arr5.filter(item => item > 3);
console.log(arr51);


function arrIndex(arr, a) {
    return (0 <= a < arr.length) ? alert(arr[a]) : alert("error");

}
arrIndex(arr5, 3);


let i = 20;
while (i > 10) {
    console.log(i);
    i--;
}

let arr6=[];
nextPrime:
for (let i = 2; i < 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
    }
    arr6.push(i);
}
console.log(arr6);


let arr7=[];
for(let i=1; i<20; i++){
    if(i%2===1) arr7.push(i);
}
console.log(arr7);
