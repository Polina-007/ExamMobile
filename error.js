try {
    console.log(a);
    let a = 3;
} catch {
    alert("let перед использованием нужно объявить");
}


try {
    let a = 1;
    let b = 0;
    let result = a / b;
    alert(result);
} catch {
    if(a===1 && b===0){
    alert("На ноль делить нельзя!");}
}