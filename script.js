// протоколи перебору

// const obj={
//     a:'dsds',
//     b:'csscs',
//     // [key] синтаксис юзаємо для того щоб заюзати змінну або символ
//     // [Symbol.iterator](){
//     //     return Array[Symbol.iterator]
//     // }
// }

// генератор ф-я яка вміє призупиняти своє виконання
function *generator() {
    // yield означає призупинитися
   yield 1;
   yield  2;
   yield  3;
}
// при виклику генератора ми отримуємо ітератор -обєкт в якого є метод next(), який вертає обєкт з полем value та полем done
let iterator =generator()

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// після того як yield закінчиться у нас буде обєкт {value: undefined, done: true}
console.log(iterator.next());