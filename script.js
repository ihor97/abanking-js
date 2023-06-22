// звязування new

function foo(a) {
    // 1.конструюється новий обєкт 
    // 2 в __proto__ цього нового обєкта присвоюється foo.prototype
    // this ф=ї ссилається на новий обєкт this= новий обєкт
    this.a=a
}
const bar=new foo(2)

console.log(bar);