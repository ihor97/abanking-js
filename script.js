//1-----------------------
// звязування по замовчуванню - або до обєкта window або до  undefined
// в use strict буде undefined
// function foo() {
//     console.log(this);
// }

//2------------------------

// неявне звязування

// function foo() {
//     console.log(this.a);
// }

// const obj={
//     a:2,
//     foo:foo
// }
// obj.foo()


// приклад 2
// атомарний виклик ф-ї тоді коли вона викликається без власника
// function foo() {
//     console.log(this.a);
// }
// function doFoo(fn) {
    // тут буде знову просто силка АБО  window.fn()
//     fn()
// }
// const obj={
//     a:2,
//     foo:foo
// }
// // undefined буде
// doFoo(obj.foo)
//3-----------------------------

