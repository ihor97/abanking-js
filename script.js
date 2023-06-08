// const anotherObject={
//     a:2
// }
// const myObject=Object.create(anotherObject)
// // буде 2
// console.log(myObject.a);

// const x={
//     a:3
// }
// // вертає масив ключів
// console.log(Object.keys(x));



const a={
    // print: ()=>{ console.log('hello');}
    print(){
        console.log('hello');
    }
}
const x={
    a:3
}
// ставимо інший прототип
// в властивість [[Prototype]] вказується оюєкт a
Object.setPrototypeOf(x,a)
// отримуємо прототип обєкта
Object.getPrototypeOf(x)

// це є більше делегування ніж наслідування в джаваскрипті так як метод print не копіюється в обєкт x
// просто відюувається пошук метода в прототипі
x.print()
