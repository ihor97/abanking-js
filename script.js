// геттер сеттер __proto__
// const a= {
//     print:()=>{console.log('hello');}
// }
// const b1={}

// b1.__proto__=a

// b1.print()

// це є те що лежить в [[Prototype]] тобто методи що беруться звідти
// __proto__ - це доступ до обєкта прототипа
// prototype - обєкт з наслідуваними методами 
// прототипи не можуть бути циклічними
// console.log(Object.prototype);

// чому виведеться native code?
// console.log(Object.__proto__); 

// function create(p1,p2) {
//     this.p1=p1
//     this.p2=p2

    
// }

// let a=new create('a','b')
// console.log(a);
// console.log(a.__proto__);
// // a.s() буде помилка

// create.prototype.s=()=>{console.log('eeee');}
// a.s()
// console.log(a.__proto__);