// явне звязування call apply 
// bind жорстке
// function foo(smt) {
//     console.log(this.a, smt);
//     return this.a + smt
// }
// const obj={
//     a:2
// }
// // прибиває контекст
// const bar=foo.bind(obj)
// // bind біндиться тільки один раз так що контекст не поміняється(не можна перебіндити)
// const bar2=bar.bind({a:200})
// console.log(bar(4));

// часткове застосування 

// function foo(smt,another) {
//     console.log(this.a, smt,another);
//     return this.a + smt
// }
// const obj={
//     a:2
// }

// // тобто ми біндінгом назавжди забили в перший параметр ф-ї значення 10
// // типу lazy ф-я
// const bar=foo.bind(obj,10)
// bar(20)



// типу як замикання
// function counter(a,b) {
//     console.log(a+b);
// }
// // в пергий параметр назавжди забили 5
// const somethingPlusFive=counter.bind({},5)
// somethingPlusFive(543)