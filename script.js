// forof працює так : js бере iterator після слова of і викликає метод next() і віддає value 
// for (const x of iterator) {
//     console.log(x);
// }

// iterator i iterable 
// iterable - обєкт який має в собі дані по яких можна ітеруватися

// function *generator(num) {
//     for (let i = 1; i <= num; i++) {
//         yield i
//     }
// }

// let iterator=generator(15)
// console.log(iterator);
// for (const x of iterator) {
//     console.log(x);
// }

function gen(start,condition) {
    let val =start
// тут всеодно замикання і без функції
        return {
            
            next(){
                return {
                    value:val>condition.less ? --val : undefined,
                    done:!val>condition.less
                }
            }
        }
   
}

let condition={less:3}
let iterator=gen(6,condition)
console.log(iterator.next());
console.log(iterator.next());
// тут ми можемо поставити умову і керувати нашим кодом так щоб він дальше продовжував виконуватися
// так як все у нас синхронно то в циклі все б проітерувалося і щоб якось повпливати на це нам би треба було ставити if  щоб змінити умову
// тобто можна влізти під час виконання коду і щось змінити
condition.less=0
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
