// однопоточність js  проявляється в тому що у нас є один стек

function multiply(a,b) {
    return a*b
}
function square(n) {
    return multiply(n,n)
}
function printSquare(n) {
    const squared= square(n)
    console.log(squared);
}
printSquare(4)

//так ф-ї нагромаджуються
//  -> multiply 
//   ->square 
//  printSquare 
// в консолі розробника коли відбувається помилка друкується весь стек